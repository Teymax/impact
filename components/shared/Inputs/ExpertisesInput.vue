<template>
  <v-flex xs10>
    <label
      :for="t('expertise')"
      class="base-input-label"
    >
      {{ t('expertise') }}
    </label>
    <v-layout row align-baseline>
      <v-autocomplete
        v-model="expertise"
        v-validate="'required'"
        :items="expertises"
        :data-vv-name="t('expertise')"
        item-text="name"
        item-value="value"
        :error-messages="errors.collect(t('expertise'))"
        append-icon="keyboard_arrow_down"
        class="base-input mt-2"
        solo
        @change="$emit('expertise-changed', $event)"
      />
      <v-flex shrink>
        <v-btn
          depressed
          fab
          class="xsmall azure white--text step__btn-box"
        >
          <v-icon class="step__btn">
            add
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
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
      expertise: ''
    };
  },
  computed: {
    ...mapGetters({
      expertises: 'staticData/expertises'
    })
  },
  mounted() {
    this.fetchExpertises();
  },
  methods: {
    ...mapActions({
      fetchExpertises: 'staticData/fetchExpertises'
    })
  }
};
</script>
