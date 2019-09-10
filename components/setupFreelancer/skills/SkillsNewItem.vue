<template>
  <v-flex xs12>
    <v-layout justify-center wrap>
      <v-flex xs12 sm10 lg8>
        <v-layout column>
          <h3
            class="step__header step__header--mid"
          >
            {{ t('addSkills') }}
          </h3>

          <v-form>
            <SkillsInput @skill-changed="skillId => skill = skillId" />
          </v-form>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
        class="setup-item__integrated-img"
      />
    </v-layout>
    <v-layout
      justify-center
      class="step__btn-box--column"
      wrap
    >
      <v-flex shrink>
        <v-btn
          flat
          round
          large
          class="azure white--text px-5 base text-none step__btn--large step__btn"
          @click="addItem()"
        >
          {{ t('finishTest') }}
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn
          flat
          round
          large
          class="error white--text base text-capitalize step__btn"
          @click="backToList"
        >
          {{ t('cancel') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import SkillsInput from '@/components/shared/Inputs/SkillsInput';

export default {
  components: { SkillsInput },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        skill: null
      }
    };
  },
  computed: {
    skillItems() {
      return ['Design | UX/UI design', 'Developer | front-end', 'Developer | back-end'];
    }
  },
  methods: {
    ...mapMutations({
      addSkillItem: 'setupFreelancer/ADD_SKILLS_ITEM'
    }),
    async addItem() {
      const isValid = await this.$validator.validate();
      if (!isValid) return;

      this.addSkillItem(this.form.skill);
      this.$emit('new-item-added');
      this.backToList();
    },
    backToList() {
      this.$emit('switch-component');
    }
  }
};
</script>
