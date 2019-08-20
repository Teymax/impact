<template>
  <v-layout row wrap fluid justify-center>
    <v-fade-transition
      mode="out-in"
    >
      <h4
        v-if="activeComponent === 'SkillsList' && !skillItems.length"
        class="step__info-text"
      >
        {{ t('letPotencialClients') }}
      </h4>
    </v-fade-transition>
    <v-fade-transition mode="out-in">
      <v-flex xs12 sm10 md9 text-xs-left>
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
                  {{ t('skillAdded') }}
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
              :items-list="skillItems"
              :text-props="{
                addButon: 'addSkills'
              }"
              @switch-component="switchComponent"
              @next-step="nextStep"
              @new-item-added="newItemAdded = true"
            />
          </v-fade-transition>
        </v-layout>
      </v-flex>
    </v-fade-transition>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import SkillsList from '@/components/setupFreelancer/setupShared/ItemList';
import NewSkill from './SkillsNewItem';

export default {
  components: {
    SkillsList,
    NewSkill
  },
  mixins: [nextStepBtn, textTranslations],
  data() {
    return {
      activeComponent: 'SkillsList',
      translationScope: 'setupAccount',
      newItemAdded: false
    };
  },
  computed: {
    ...mapGetters({
      skillItems: 'setupFreelancer/skillItems'
    })
  },
  methods: {
    switchComponent() {
      if (this.activeComponent === 'SkillsList') {
        this.newItemAdded = false;
        this.activeComponent = 'NewSkill';
      } else {
        this.activeComponent = 'SkillsList';
      }
    },
    nextStep(value) {
      if (value) this.goToNextStep();
    }
  }
};
</script>
