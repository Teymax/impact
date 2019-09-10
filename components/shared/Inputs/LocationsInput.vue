<template>
  <v-flex xs10>
    <label
      :for="t('location')"
      class="base-input-label"
    >
      {{ t('location') }}
    </label>
    <v-autocomplete
      v-model="location"
      v-validate="'required'"
      :items="locations"
      :data-vv-name="t('location')"
      item-text="name"
      item-value="value"
      :error-messages="errors.collect(t('location'))"
      append-icon="keyboard_arrow_down"
      class="base-input mt-2"
      solo
      @change="$emit('location-changed', $event)"
    >
      <v-list-tile
        slot="prepend-item"
        class="primary--text"
        @click="fetchLocations()"
      >
        {{ t('showAllLocations') }}
      </v-list-tile>
    </v-autocomplete>
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
      location: ''
    };
  },
  computed: {
    ...mapGetters({
      locations: 'staticData/locations'
    })
  },
  methods: {
    ...mapActions({
      fetchLocations: 'staticData/fetchLocations'
    })
  }
};
</script>
