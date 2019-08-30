<template>
  <v-form>
    <v-layout column>
      <v-flex>
        <label
          class="base-input-label"
        >
          <span>{{ t('freelancerLevels') }}</span>
          <v-select
            v-model="form.requirements.freelancerLevel"
            v-validate="'required'"
            :items="freelancerLevels"
            :error-messages="errors.collect(t('freelancerLevels'))"
            :data-vv-name="t('freelancerLevels')"
            return-object
            solo
            class="base-input mt-2"
            append-icon="keyboard_arrow_down"
          />
        </label>
      </v-flex>
      <v-flex xs10>
        <label
          class="base-input-label"
        >
          <span>{{ t('approximateLength') }}</span>
          <v-select
            v-model="approximateLength"
            v-validate="'required'"
            :items="timePeriods"
            :error-messages="errors.collect(t('approximateLength'))"
            :data-vv-name="t('approximateLength')"
            return-object
            solo
            class="base-input mt-2"
            append-icon="keyboard_arrow_down"
          />
        </label>
      </v-flex>

      <v-divider
        class="step__divider"
      />

      <v-flex>
        <p
          class="base-input-label ma-0"
        >
          {{ t('jobVisibility') }}
        </p>
        <v-radio-group
          v-model="form.visibility"
          row
          class="base primary--text"
        >
          <v-layout justify-space-between>
            <v-radio
              off-icon="radio_button_unchecked"
              on-icon="radio_button_checked"
              :label="t('visible')"
              :value="true"
              color="primary"
            />
            <v-radio
              off-icon="radio_button_unchecked"
              on-icon="radio_button_checked"
              :label="t('hidden')"
              :value="false"
              color="primary"
            />
          </v-layout>
        </v-radio-group>
      </v-flex>

      <v-divider
        class="step__divider"
      />

      <v-flex xs10 mt-4 mb-2>
        <v-layout>
          <v-btn
            outline
            round
            flat
            class="azure--text ml-0 mr-4 text-none base"
            @click="saveData('previous')"
          >
            {{ t('back') }}
          </v-btn>
          <v-btn
            round
            flat
            class="azure white--text px-5 text-none base"
            @click="saveData('next')"
          >
            {{ t('continue') }}
          </v-btn>
        </v-layout>
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
