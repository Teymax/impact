<template>
  <v-flex xs10>
    <label
      :for="t('timezone')"
      class="base-input-label"
    >
      {{ t('timezone') }}
    </label>
    <v-autocomplete
      v-model="timezone"
      v-validate="'required'"
      :items="humanReadTimezones"
      :data-vv-name="t('timezone')"
      return-object
      :error-messages="errors.collect(t('timezone'))"
      append-icon="keyboard_arrow_down"
      class="base-input mt-2"
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
  filters: { fromSnakeCase, toSnakeCase },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      timezone: ''
    };
  },
  computed: {
    ...mapGetters({
      timezones: 'staticData/timezones'
    }),
    humanReadTimezones() {
      return this.timezones.map(value => fromSnakeCase(value));
    }
  },
  mounted() {
    this.fetchTimezones();
  },
  methods: {
    ...mapActions({
      fetchTimezones: 'staticData/fetchTimezones'
    }),
    emitValue() {
      this.$emit('timezone-changed', toSnakeCase(this.timezone));
    }
  }
};
</script>
