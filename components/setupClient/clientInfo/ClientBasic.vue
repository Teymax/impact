<template>
  <v-flex xs12 sm11 md9 lg8 text-xs-left>
    <v-layout
      row
      justify-center
      class="step__container"
    >
      <v-flex xs12 md9 lg7>
        <h4 class="mb-1">
          {{ t('companyType') }}
        </h4>
        <v-layout align-center>
          <v-flex
            d-flex
          >
            <v-btn
              v-for="btn in clientTypeToggler"
              :key="btn.name"
              :value="btn.value"
              flat
              large
              block
              class="text-none base toggle"
              :class="{
                'active': btn.value === activeClientType,
              }"
              @click="activeClientType = btn.value"
            >
              {{ t(btn.name) }}
            </v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn
              icon
              class="xsmall azure--text hidden-xs-only"
            >
              <span class="step__btn--mark" />
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-fade-transition
            mode="out-in"
          >
            <component
              :is="clientTypeFormComponentName"
              :client-id="clientId"
              @save-data="updateClientBasicInfo"
            />
          </v-fade-transition>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import serializeData from '@/mixins/serializeData';
import capitalize from '@/mixins/capitalizeString';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import ClientIndividualForm from '@/components/setupClient/clientInfo/ClientIndividualForm';
import ClientNonProfitForm from '@/components/setupClient/clientInfo/ClientNonProfitForm';
import ClientForProfitForm from '@/components/setupClient/clientInfo/ClientForProfitForm';
import fromCamelToSnake from '@/filters/fromCamelToSnake';

export default {
  name: 'ClientBasicStep',
  components: {
    ClientIndividualForm,
    ClientNonProfitForm,
    ClientForProfitForm
  },
  mixins: [textTranslations, nextStepBtn, serializeData, capitalize],
  data() {
    return {
      translationScope: 'setupAccount',
      activeClientType: 'individual'
    };
  },
  computed: {
    ...mapState(
      {
        clientTypes: state => state.setupClient.clientTypes,
        clientId: state => state.auth.user.activeProfile.id
      }
    ),
    clientTypeToggler() {
      return this.clientTypes.map(type => ({
        name: `${type}Type`,
        value: type
      }));
    },
    clientTypeFormComponentName() {
      return `Client${this.capitalize(this.activeClientType)}Form`;
    }
  },
  methods: {
    ...mapActions({
      updateClient: 'setupClient/updateClient'
    }),
    async updateClientBasicInfo(value) {
      const form = value;
      const payload = {
        id: this.clientId,
        type: 'client',
        clientType: fromCamelToSnake(this.activeClientType),
        ...form
      };

      this.updateClient(this.serializeData(payload));
      this.goToNextStep();
    }
  }
};
</script>
