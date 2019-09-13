<template>
  <v-flex
    xs10
    class="step__input-box"
  >
    <label
      class="base-input-label"
    >
      {{ t('url') }}
      <span> {{ ` (${t('optional')})` }}</span>
      <v-text-field
        v-model="inputModel"
        v-validate="'url'"
        :error-messages="errors.collect(t('url'))"
        :data-vv-name="t('url')"
        class="base-input mt-2"
        solo
        required
        data-vv-validate-on="blur"
        @blur="emitInputValue('url')"
      />
    </label>
  </v-flex>
</template>

<script>
import formHandler from '@/components/setupMixins/formHandler';

export default {
  mixins: [formHandler]
};
</script>
