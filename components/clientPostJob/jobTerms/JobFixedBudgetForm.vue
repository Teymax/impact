<template>
  <v-flex>
    <v-form>
      <v-layout column>
        <v-flex>
          <label class="base-input-label">
            <span>{{ t('freelancerLevels') }}</span>
            <v-select
              v-model="form.freelancerLevel"
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
        <v-flex>
          <v-layout
            align-center
            justify-space-between
            wrap
          >
            <v-flex sx12 sm4 d-flex align-center>
              <label class="base-input-label base-input-label--full-width">
                {{ t('budget') }}
                <v-text-field
                  v-model="form.budget"
                  v-validate="'required|decimal'"
                  placeholder="0"
                  :error-messages="errors.collect(t('fixedBudget'))"
                  :data-vv-name="t('fixedBudget')"
                  required
                  solo
                  class="base-input mt-2"
                />
              </label>
              <span class="font-weight-bold mt-0 mx-2 mb-1">
                {{ t('usd') }}
              </span>
            </v-flex>
            <v-flex xs12 sm6>
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
                  <label class="base-input-label">
                    <span>
                      <v-icon>event</v-icon>
                      {{ t('projectdeadlineAt') }}
                    </span>
                    <v-text-field
                      v-model="form.deadlineAt"
                      v-validate="'required'"
                      :error-messages="errors.collect(t('projectdeadlineAt'))"
                      :data-vv-name="t('projectdeadlineAt')"
                      readonly
                      solo
                      class="base-input mt-2"
                      v-on="on"
                    />
                  </label>
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
          </v-layout>
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
            v-model="form.visisble"
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
  </v-flex>
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
        freelancerLevel: '',
        visisble: true
      },
      menu: false,
      freelancerLevels: ['Beginners', 'Experts']
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
