<template>
  <v-flex xs10>
    <label
      :for="languageLevelTranslation"
      class="base-input-label"
    >
      {{ languageLevelTranslation }}
    </label>
    <v-select
      v-model="languageProficiency"
      v-validate="'required'"
      :items="humanReadProficiency"
      :data-vv-name="languageLevelTranslation"
      return-object
      :error-messages="errors.collect(languageLevelTranslation)"
      append-icon="keyboard_arrow_down"
      class="base-input mt-2 text-capitalize"
      solo
      @change="emitValue"
    />
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import fromSnakeCase from '@/filters/fromSnakeCase';
import toSnakeCase from '@/filters/toSnakeCase';

export default {
  mixins: [textTranslations],
  props: {
    languageName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'setupAccount',
      languageProficiency: ''
    };
  },
  computed: {
    ...mapGetters({
      languageProficiencyLevels: 'staticData/languageProficiencyLevels'
    }),
    languageLevelTranslation() {
      return this.t('languageProficiency', { language: this.languageName });
    },
    humanReadProficiency() {
      return this.languageProficiencyLevels.map(value => fromSnakeCase(value));
    }
  },
  mounted() {
    this.fetchLanguageProficiencyLevels();
  },
  methods: {
    ...mapActions({
      fetchLanguageProficiencyLevels: 'staticData/fetchLanguageProficiencyLevels'
    }),
    emitValue() {
      this.$emit('language-level-changed', toSnakeCase(this.languageProficiency));
    }
  }
};
</script>
