<template>
  <v-flex>
    <label
      :for="t('skills')"
      class="base-input-label"
    >
      {{ t('skills') }}
    </label>
    <v-autocomplete
      v-model="skill"
      v-validate="'required'"
      :items="skills"
      :data-vv-name="t('skills')"
      item-text="name"
      item-value="value"
      :error-messages="errors.collect(t('skills'))"
      append-icon="keyboard_arrow_down"
      class="base-input mt-2"
      solo
      @change="$emit('skill-changed', $event)"
    />
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      skill: ''
    };
  },
  computed: {
    ...mapGetters({
      skills: 'staticData/skills'
    })
  },
  mounted() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: 'staticData/fetchSkills'
    })
  }
};
</script>
