<template>
  <v-layout ow fluid justify-center>
    <v-flex xs9>
      <h5 class="headline font-weight-thin mb-5 text-xs-center">
        {{ t('jobPreviewTitle') }}
      </h5>
      <v-card
        class="mb-5"
        height="auto"
      >
        <v-card-title class="subheading grey lighten-3" height="50">
          <span class="mr-3">
            {{ 'Unicorn Organization - For-Profit, Animals' }}</span>
          <span class="mr-3">
            <v-icon class="primary--text">
              location_on
            </v-icon>
            {{ 'France' }}
          </span>
          <span class="mr-3">
            <v-icon class="primary--text">
              star_border
            </v-icon>
            {{ '80%' /* TODO: need fetch client with currentClientId to get real attributes */ }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-text-field
                v-if="editingTitle"
                v-model="form.title"
                v-validate="'required'"
                :label="t('jobTitle')"
                :error-messages="errors.collect(t('jobTitle'))"
                :data-vv-name="t('jobTitle')"
                required
                autofocus
                @blur="editingTitle = false"
              />
              <p v-else class="headline font-weight-bold ma-0 mr-3">
                {{ form.title }}
              </p>
            </v-fade-transition>
            <v-btn
              class="mr-3 mt-3 ml-0"
              icon
              @click="editingTitle= !editingTitle"
            >
              <v-img
                :src="require(`@/assets/images/icons/edit.svg`)"
              />
            </v-btn>
          </v-layout>
          <v-layout>
            <v-btn
              v-for="btn in jobInfoButtons"
              :key="btn.id"
              class="mr-3 mt-3 ml-0"
              round
            >
              {{ btn.description }}
            </v-btn>
          </v-layout>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-text-field
                v-if="editingDescription"
                v-model="form.description"
                v-validate="'required'"
                :label="t('jobDescription')"
                :error-messages="errors.collect(t('jobDescription'))"
                :data-vv-name="t('jobDescription')"
                required
                autofocus
                @blur="editingDescription = false"
              />
              <p
                v-else
                class="font-weight-light subheading ma-0 mr-3"
              >
                {{ form.description }}
              </p>
            </v-fade-transition>
            <v-btn
              class="mr-3 mt-3 ml-0"
              icon
              @click="editingDescription= !editingDescription"
            >
              <v-img
                :src="require(`@/assets/images/icons/edit.svg`)"
              />
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-flex
        xs10
        sm12
        align-self-center
        text-xs-center
        text-lg-center
      >
        <v-btn
          flat
          round
          outline
          class="text-none base azure homepage__btn azure--text ml-0 mr-5"
          @click="goToPreviousStep()"
        >
          {{ t('back') }}
        </v-btn>
        <v-btn
          flat
          round
          class="text-none azure base homepage__btn white--text ml-0"
          @click="createJob()"
        >
          {{ t('postAJob') }}
        </v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import uuid from 'uuid/v4';
import dayjs from 'dayjs';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';
import textTranslations from '@/mixins/textTranslations';
import serializeData from '@/mixins/serializeData';

export default {
  mixins: [textTranslations, previousStepBtn, serializeData],
  data() {
    return {
      translationScope: 'postJob',
      form: {
        title: '',
        description: ''
      },
      editingTitle: false,
      editingDescription: false
    };
  },
  computed: {
    ...mapState({
      clientId: state => state.auth.user.clients[0].id, // TODO: fetch currentClientId
      newJob: state => state.clientPostJob.newJob,
      customQuestions: state => state.clientPostJob.customQuestions
    }),
    jobInfoButtons() {
      return this.newJob.jobType === 'fixed_budget' ? this.fixedJobTypeInfoButtons : this.perHourJobTypeInfoButtons;
    },
    fixedJobTypeInfoButtons() {
      return [
        {
          id: 0,
          description: this.t('fixedPriceBudgetButton', { budget: this.newJob.budget })
        },
        {
          id: 1,
          description: this.t('deadlineButton', { date: dayjs(this.newJob.deadlineAt).format('MMM D') })
        }
      ];
    },
    perHourJobTypeInfoButtons() {
      return [
        {
          id: 0,
          description: this.t('freelancerLevelButton', { level: this.newJob.freelancerLevel })
        },
        {
          id: 1,
          description: this.newJob.approximateLength
        }
      ];
    }
  },
  mounted() {
    this.form.title = this.newJob.title || '';
    this.form.description = this.newJob.description || '';
  },
  methods: {
    ...mapActions({
      createJobOffer: 'clientPostJob/createJobOffer'
    }),
    customQuestionsData() {
      return this.customQuestions.map(questionContent => ({
        id: uuid(),
        type: 'customQuestion',
        content: questionContent
      }));
    },
    async createJob() {
      const data = {
        id: await uuid(),
        type: 'job_offer',
        ...this.newJob,
        client: {
          id: this.clientId,
          type: 'client'
        },
        relationshipNames: ['client']
      };
      if (this.customQuestions.length) {
        data.relationshipNames.push('customQuestions');
        Object.assign(data, { customQuestions: this.customQuestionsData() });
      }
      this.createJobOffer(this.serializeData(data));
    }
  }
};
</script>
