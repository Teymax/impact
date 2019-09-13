<template>
  <v-flex
    xs12
    sm10
  >
    <v-layout
      class="step__container"
    >
      <v-flex
        xs12
        sm10
        md9
      >
        <v-form>
          <v-layout wrap>
            <v-flex xs12>
              <v-combobox
                v-model="form.requirements.skills"
                :items="['Vuejs', 'Ruby on Rails']"
                :label="t('skillsRequired')"
                chips
                clearable
                class="base-input"
                solo
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    @input="remove(data.item)"
                  >
                    <strong>{{ data.item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
            </v-flex>

            <h4>{{ t('freelancerRequirements') }}</h4>

            <ComboFieldInput
              v-for="field in allFields"
              :key="field.inputContent.checkboxLabel"
              :initial="field.initial"
              :input-content="field.inputContent"
              :has-many="field.hasMany"
              :toggled-checkbox-name="toggledCheckboxName"
              :enabled="field.enabled"
              @get-input-value="setFromData"
              @toggle-country-checkbox="toggleCountryCheckbox"
            />


            <v-layout column>
              <RequirementsQuestion
                v-for="customQuestion in allQuestions"
                :id="customQuestion.id"
                :key="customQuestion.id"
                :question-content="customQuestion"
                @remove-question="removeQuestion"
                @emit-question="saveQuestion"
              />
            </v-layout>

            <v-flex xs12>
              <v-layout align-center>
                <v-btn
                  icon
                  small
                  class="ma-0 mr-2"
                  @click="newCustomQuestion"
                >
                  <v-icon class="azure--text">
                    add_circle_outline
                  </v-icon>
                </v-btn>
                <p class="ma-0 azure--text">
                  {{ t('addCustomQuestion') }}
                </p>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-divider
                class="step__divider--large"
              />
            </v-flex>

            <v-layout justify-center>
              <v-btn
                round
                flat
                outline
                class="base text-none azure azure--text"
                @click="previousStep"
              >
                {{ t('back') }}
              </v-btn>
              <v-btn
                round
                flat
                class="base text-none azure white--text"
                @click="nextStep"
              >
                {{ t('continue') }}
              </v-btn>
            </v-layout>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';
import textTranslations from '@/mixins/textTranslations';
import ComboFieldInput from './RequirementsComboField';
import RequirementsQuestion from './RequirementsQuestion';

export default {
  components: { ComboFieldInput, RequirementsQuestion },
  mixins: [textTranslations, nextStepBtn, previousStepBtn],
  data() {
    return {
      toggledCheckboxName: null,
      translationScope: 'postJob',
      allQuestions: [],
      form: {
        requirements: {
          allowedCountries: null,
          prohibitedCountries: null,
          englishProficiency: '',
          minimumRating: '',
          skills: [],
          questions: []
        }
      }
    };
  },
  computed: {
    ...mapState('clientPostJob', ['newJob', 'customQuestions']),
    allFields() {
      return [
        {
          initial: {
            value: this.newJob.requirements.minimumRating
          },
          inputContent: {
            checkboxLabel: this.t('ratingRequirement'),
            fieldName: 'minimumRating'
          }
        },
        {
          initial: {
            value: this.newJob.requirements.allowedCountries
          },
          inputContent: {
            checkboxLabel: this.t('allowedCountries'),
            fieldName: 'allowedCountries',
            fieldItems: ['Poland', 'Ukraine']
          },
          enabled: !this.form.requirements.prohibitedCountries
        },
        {
          initial: {
            value: this.newJob.requirements.prohibitedCountries
          },
          inputContent: {
            checkboxLabel: this.t('prohibitedCountries'),
            fieldName: 'prohibitedCountries',
            fieldItems: ['Pakistan', 'Afghanistan']
          },
          enabled: !this.form.requirements.allowedCountries
        },
        {
          initial: {
            value: this.newJob.requirements.englishProficiency
          },
          inputContent: {
            checkboxLabel: this.t('englishProficiency'),
            fieldName: 'englishProficiency',
            fieldItems: ['Low intermediate', 'High intermediate', 'Advanced']
          },
          hasMany: false
        }
      ];
    }
  },
  mounted() {
    if (this.newJob.requirements.questions) {
      this.newJob.requirements.questions.forEach(el => {
        this.allQuestions.push(Object.assign({}, el));
      });
    }
  },
  methods: {
    ...mapMutations({
      updateNewJob: 'clientPostJob/UPDATE_JOB',
      updateCustomQuestions: 'clientPostJob/UPDATE_CUSTOM_QUESTIONS'
    }),
    toggleCountryCheckbox(value) {
      this.toggledCheckboxName = value;
    },
    setFromData(payload) {
      this.form.requirements[payload.fieldName] = payload.value;
    },
    submitNullInsteadOfArray(inputValue) {
      if (inputValue && !inputValue.length) return null;
      return inputValue;
    },
    updateData() {
      const newForm = {};
      this.saveQuestionToForm();

      Object
        .keys(this.form.requirements)
        .map(input => ({ [input]: this.submitNullInsteadOfArray(this.form.requirements[input]) }))
        .forEach(attr => Object.assign(newForm, attr));

      this.updateNewJob({
        requirements: {
          ...newForm
        }
      });
    },
    previousStep() {
      this.updateData();
      this.goToPreviousStep();
    },
    nextStep() {
      this.updateData();
      this.goToNextStep();
    },
    newCustomQuestion() {
      const id = this.allQuestions.length + 1;
      this.allQuestions.push({
        name: this.t('question', { number: id }),
        id,
        question: ''
      });
    },
    removeQuestion(id) {
      this.allQuestions = this.allQuestions.filter(el => el.id !== id);

      this.updateQuestionNumber();
    },
    updateQuestionNumber() {
      const updatedArray = this.allQuestions.map((question, index) => Object.assign({}, {
        id: index + 1,
        name: this.t('question', { number: index + 1 }),
        question: question.question
      }));

      this.allQuestions = updatedArray;
    },
    saveQuestion(question) {
      this.allQuestions.find(el => el.id === question.id).question = question.value;
    },
    saveQuestionToForm() {
      this.form.requirements.questions = [];
      this.allQuestions.forEach(el => {
        this.form.requirements.questions.push(el);
      });
    }
  }
};
</script>
