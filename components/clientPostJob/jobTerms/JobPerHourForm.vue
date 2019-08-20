<template>
  <v-form>
    <v-layout wrap align-center>
      <v-flex xs10>
        <v-select
          v-model="form.requirements.freelancerLevel"
          v-validate="'required'"
          :items="freelancerLevels"
          :label="t('freelancerLevels')"
          :error-messages="errors.collect(t('freelancerLevels'))"
          :data-vv-name="t('freelancerLevels')"
          return-object
        />
      </v-flex>
      <v-flex xs10>
        <v-select
          v-model="approximateLength"
          v-validate="'required'"
          :items="timePeriods"
          :label="t('approximateLength')"
          :error-messages="errors.collect(t('approximateLength'))"
          :data-vv-name="t('approximateLength')"
          return-object
        />
      </v-flex>
      <v-flex xs10>
        <v-radio-group
          v-model="form.visibility"
          v-validate="'required'"
          :label="t('jobVisibility')"
          :error-messages="errors.collect(t('jobVisibility'))"
          :data-vv-name="t('jobVisibility')"
          row
        >
          <v-radio
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
            :label="t('visible')"
            :value="true"
          />
          <v-radio
            off-icon="radio_button_unchecked"
            on-icon="radio_button_checked"
            :label="t('hidden')"
            :value="false"
          />
        </v-radio-group>
      </v-flex>
      <v-flex xs10 mt-4 mb-2>
        <v-btn
          block
          @click="saveData('next')"
        >
          {{ t('continue') }}
        </v-btn>
      </v-flex>
      <v-flex xs10 mt-4 mb-2>
        <v-btn
          block
          @click="saveData('previous')"
        >
          {{ t('back') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'postJob',
      form: {
        requirements: {
          freelancerLevel: ''
        },
        visibility: true
      },
      approximateLength: '',
      freelancerLevels: ['Beginners', 'Experts'],
      timePeriods: ['2-3 days', '1 week', '3 weeks', 'month']

    };
  },
  computed: {
    ...mapState('clientPostJob', ['newJob'])
  },
  mounted() {
    this.setData();
  },
  methods: {
    async saveData(direction) {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit('saveData', this.form, direction);
    },
    setData() {
      this.form.requirements.freelancerLevel = this.newJob.requirements.freelancerLevel || '';
      this.form.approximateLength = this.newJob.approximateLength || '';
      this.form.visibility = this.newJob.visibility || true;
    }
  }
};
</script>
