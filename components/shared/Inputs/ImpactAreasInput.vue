<template>
  <v-flex xs10>
    <label
      :for="t('impactAreas')"
      class="base-input-label"
    >
      {{ t('impactAreas') }}
    </label>
    <v-autocomplete
      v-model="impactArea"
      v-validate="'required'"
      :items="impactAreas"
      :data-vv-name="t('impactAreas')"
      item-text="name"
      item-value="value"
      :error-messages="errors.collect(t('impactAreas'))"
      append-icon="keyboard_arrow_down"
      class="base-input mt-2"
      solo
      @change="$emit('impact-area-changed', $event)"
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
      impactArea: ''
    };
  },
  computed: {
    ...mapGetters({
      impactAreas: 'staticData/impactAreas'
    })
  },
  mounted() {
    this.fetchImpactAreas();
  },
  methods: {
    ...mapActions({
      fetchImpactAreas: 'staticData/fetchImpactAreas'
    })
  }
};
</script>
