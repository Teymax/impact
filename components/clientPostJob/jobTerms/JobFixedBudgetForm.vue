<template>
  <v-form>
    <v-layout wrap align-center>
      <v-flex xs4 mr-4>
        <v-text-field
          v-model="form.budget"
          v-validate="'required'"
          :label="t('fixedBudget')"
          placeholder="0"
          :error-messages="errors.collect(t('fixedBudget'))"
          :data-vv-name="t('fixedBudget')"
          required
          type="number"
          prefix="$"
          suffix="USD"
        />
      </v-flex>
      <v-flex xs4 mr-4>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="form.deadlineAt"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.deadlineAt"
              v-validate="'required'"
              :label="t('projectdeadlineAt')"
              :error-messages="errors.collect(t('projectdeadlineAt'))"
              :data-vv-name="t('projectdeadlineAt')"
              prepend-icon="event"
              readonly
              v-on="on"
            /></v-text-field>
          </template>
          <v-date-picker
            v-model="form.deadlineAt"
            no-title
            scrollable
          >
            <v-btn
              flat
              color="primary"
              @click="menu = false"
            >
              {{ t('cancel') }}
            </v-btn>
            <v-btn
              flat
              color="primary"
              @click="$refs.menu.save(form.deadlineAt)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs10>
        <v-radio-group
          v-model="form.visisble"
          row
          :label="t('jobvisisble')"
          :error-messages="errors.collect(t('jobvisisble'))"
          :data-vv-name="t('jobvisisble')"
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
import dayjs from 'dayjs';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'postJob',
      form: {
        budget: '',
        deadlineAt: dayjs(new Date()).format('YYYY-MM-DD'),
        visisble: true
      },
      menu: false
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
      this.form.budget = this.newJob.budget || '';
      this.form.deadlineAt = this.newJob.deadlineAt || dayjs(new Date()).format('YYYY-MM-DD');
      this.form.visisble = this.newJob.visisble || true;
    }
  }
};
</script>
