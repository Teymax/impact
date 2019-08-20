<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12>
        <v-combobox
          v-model="form.requirements.skills"
          :items="['Vuejs', 'Ruby on Rails']"
          :label="t('skillsRequired')"
          chips
          clearable
          prepend-icon="filter_list"
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
      <p> {{ t('freelancerRequirements') }}</p>
      <v-flex xs12 align-center justify-center>
        <v-checkbox
          v-model="ratingChecked"
          v-validate="'required|min:0|max:100'"
          :error-messages="errors.collect(t('ratingRequirement'))"
          :data-vv-name="t('ratingRequirement')"
          on-icon="check_box"
          off-icon="check_box_outline_blank"
          :label="t('ratingRequirement')"
          @change="form.requirements.minimumRating = ''"
        />
        <v-text-field
          v-if="ratingChecked"
          v-model="form.requirements.minimumRating"
          v-validate="'required'"
          suffix="%"
        />
      </v-flex>
      <v-flex xs12 align-center justify-center>
        <v-checkbox
          v-model="allowedCountriesChecked"
          v-validate="'required'"
          :disabled="prohibitedCountriesChecked"
          :error-messages="errors.collect(t('allowedCountries'))"
          :data-vv-name="t('allowedCountries')"
          on-icon="check_box"
          off-icon="check_box_outline_blank"
          :label="t('allowedCountries')"
          @change="form.requirements.allowedCountries = []"
        />
        <v-combobox
          v-if="allowedCountriesChecked"
          v-model="form.requirements.allowedCountries"
          :items="['Poland', 'Ukraine']"
          label="Choose Countries"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              close
              @input="remove(data.item)"
            >
              <strong>{{ `${data.item} ` }}</strong>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 align-center justify-center>
        <v-checkbox
          v-model="prohibitedCountriesChecked"
          v-validate="'required'"
          :disabled="allowedCountriesChecked"
          :error-messages="errors.collect(t('prohibitedCountries'))"
          :data-vv-name="t('prohibitedCountries')"
          on-icon="check_box"
          off-icon="check_box_outline_blank"
          :label="t('prohibitedCountries')"
          @change="form.requirements.prohibitedCountries = []"
        />
        <v-combobox
          v-if="prohibitedCountriesChecked"
          v-model="form.requirements.prohibitedCountries"
          :items="['Pakistan', 'Afghanistan']"
          :label="t('chooseCountries')"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              close
              @input="remove(data.item)"
            >
              <strong>{{ `${data.item} ` }}</strong>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 align-center justify-center>
        <v-checkbox
          v-model="englishProficiencyChecked"
          v-validate="'required'"
          :error-messages="errors.collect(t('englishProficiency'))"
          :data-vv-name="t('englishProficiency')"
          on-icon="check_box"
          off-icon="check_box_outline_blank"
          :label="t('englishProficiency')"
          @change="form.requirements.englishProficiency = ''"
        />
        <v-select
          v-show="englishProficiencyChecked"
          v-model="form.requirements.englishProficiency"
          v-validate="'required'"
          :items="['Low intermediate', 'High intermediate', 'Advanced']"
          :label="t('englishProficiency')"
          :error-messages="errors.collect(t('englishProficiency'))"
          :data-vv-name="t('englishProficiency')"
          return-object
        />
      </v-flex>
      <v-btn
        icon
        @click="addCustomQuestionInput('')"
      >
        <v-icon large class="mr-3 azure--text">
          add_circle_outline
        </v-icon>
      </v-btn>
      <p class="mr-3 mt-3 ml-0 azure--text">
        {{ t('addCustomQuestion') }}
      </p>
      <v-flex
        v-for="customQuestion in customQuestionInputObjects"
        :key="customQuestion.id"
        xs12
        row
      >
        <label
          :for="customQuestion.name"
          class="base-input-label"
        >
          {{ customQuestion.name }}
        </label>
        <v-text-field
          v-validate="'required'"
          :value="customQuestion.content"
          :data-vv-name="customQuestion.name"
          class="mr-3 mt-3 ml-0"
          @change="saveCustomQuestion($event, customQuestion.id)"
        />
        <v-btn
          icon
          @click="removeCustomQuestion(customQuestion.id)"
        >
          <v-icon large class="mr-3">
            close
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 align-center justify-center>
        <v-btn
          block
          @click="nextStep"
        >
          {{ t('continue') }}
        </v-btn>
      </v-flex>
      <v-flex xs10 mt-4 mb-2>
        <v-btn
          block
          @click="previousStep"
        >
          {{ t('back') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations, nextStepBtn, previousStepBtn],
  data() {
    return {
      translationScope: 'postJob',
      ratingChecked: false,
      allowedCountriesChecked: false,
      prohibitedCountriesChecked: false,
      englishProficiencyChecked: false,
      customQuestionInputObjects: [],
      questionId: 0,
      form: {
        requirements: {
          allowedCountries: [],
          prohibitedCountries: [],
          englishProficiency: '',
          minimumRating: '',
          skills: []
        }
      }
    };
  },
  computed: {
    ...mapState('clientPostJob', ['newJob', 'customQuestions']),
    customQuestionsArray() {
      return this.customQuestionInputObjects.map(obj => obj.content);
    }
  },
  mounted() {
    this.setData();
  },
  methods: {
    ...mapMutations({
      updateNewJob: 'clientPostJob/UPDATE_JOB',
      updateCustomQuestions: 'clientPostJob/UPDATE_CUSTOM_QUESTIONS'
    }),
    updateData() {
      this.updateNewJob(this.form);
      this.updateCustomQuestions(this.customQuestionsArray);
    },
    previousStep() {
      this.updateData();
      this.goToPreviousStep();
    },
    nextStep() {
      this.updateData();
      this.goToNextStep();
    },
    setData() {
      this.form.requirements.allowedCountries = this.newJob.requirements.allowedCountries || [];
      this.form.requirements.prohibitedCountries = this.newJob.requirements.prohibitedCountries || [];
      this.form.requirements.englishProficiency = this.newJob.requirements.englishProficiency || '';
      this.form.requirements.minimumRating = this.newJob.requirements.minimumRating || '';
      this.form.requirements.skills = this.newJob.requirements.skills || [];
      this.ratingChecked = this.form.minimumRating !== '';
      this.allowedCountriesChecked = !this.form.requirements.allowedCountries.length;
      this.prohibitedCountriesChecked = !this.form.requirements.prohibitedCountries.length;
      this.englishProficiencyChecked = this.form.requirements.englishProficiency !== '';
      this.customQuestions.forEach(questionContent => this.addCustomQuestionInput(questionContent));
    },
    addCustomQuestionInput(content) {
      const questionObject = {
        id: this.questionId,
        name: this.t('question', { number: this.customQuestionInputObjects.length + 1 }),
        content
      };
      this.questionId += 1;
      this.customQuestionInputObjects.push(questionObject);
    },
    saveCustomQuestion(content, id) {
      const index = this.customQuestionIndex(id);
      this.customQuestionInputObjects[index].content = content;
    },
    customQuestionIndex(id) {
      return this.customQuestionInputObjects.findIndex(object => object.id === id);
    },
    removeCustomQuestion(id) {
      this.customQuestionInputObjects.splice(this.customQuestionIndex(id), 1);
      this.customQuestionInputObjects.forEach((obj, i) => {
        obj.name = this.t('question', { number: i + 1 });
      });
    }
  }
};
</script>
