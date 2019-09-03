<template>
  <v-layout fluid justify-center>
    <v-flex xs12 sm11 md9 text-xs-left>
      <v-fade-transition
        mode="out-in"
      >
        <h4
          v-if="activeComponent === 'PortfolioList' && !portfolioItems.length"
          class="step__info-text"
        >
          {{ t('letPotencialClients') }}
        </h4>
      </v-fade-transition>

      <v-layout
        wrap
        class="mb-5 step__container"
      >
        <v-fade-transition>
          <v-flex
            v-if="newItemAdded"
            xs12
            class="text-xs-center setup-item__msg-box"
          >
            <v-layout
              justify-center
              align-center
            >
              <p class="setup-item__success-msg">
                {{ t('portfolioAdded') }}!
              </p>
              <v-icon class="success--text">
                check_circle
              </v-icon>
            </v-layout>
          </v-flex>
        </v-fade-transition>

        <v-fade-transition mode="out-in">
          <component
            :is="activeComponent"
            :items-list="portfolioItems"
            :text-props="{
              addButon: 'addPortfolio'
            }"
            @switch-component="switchComponent"
            @next-step="nextStep"
            @new-item-added="newItemAdded = true"
          />
        </v-fade-transition>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import uuid from 'uuid/v4';
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import PortfolioList from '@/components/setupFreelancer/setupShared/ItemList';
import PortfolioNewItem from './PortfolioNewItem';

export default {
  components: {
    PortfolioList,
    PortfolioNewItem
  },
  mixins: [nextStepBtn, serializeData, textTranslations],
  data() {
    return {
      activeComponent: 'PortfolioList',
      translationScope: 'setupAccount',
      newItemAdded: false
    };
  },
  computed: {
    ...mapGetters({
      portfolioItems: 'setupFreelancer/portfolioItems'
    }),
    ...mapState({ freelancerId: state => state.auth.user.freelancer.id })
  },
  methods: {
    ...mapActions({
      createPortfolio: 'setupFreelancer/createPortfolio'
    }),
    switchComponent() {
      if (this.activeComponent === 'PortfolioList') {
        this.newItemAdded = false;
        this.activeComponent = 'PortfolioNewItem';
      } else {
        this.activeComponent = 'PortfolioList';
      }
    },
    async nextStep() {
      const isValid = await this.$validator.validate();

      if (isValid) {
        this.createFreelancerPortfolio();
        this.goToNextStep();
      }
    },
    portfolioItemsData() {
      return this.portfolioItems.map(item => ({
        id: uuid(),
        type: 'portfolioItem',
        relationshipNames: ['image'],
        ...item
      }));
    },
    async createFreelancerPortfolio() {
      const data = {
        id: await uuid(),
        type: 'portfolio',
        portfolioItems: this.portfolioItemsData(),
        owner: {
          id: this.freelancerId,
          type: 'freelancer'
        },
        relationshipNames: ['portfolioItems', 'owner', 'portfolioItems.image']
      };
      this.createPortfolio(this.serializeData(data));
    }
  }
};
</script>
