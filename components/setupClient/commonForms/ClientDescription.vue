<template>
  <v-flex
    xs10
    class="step__input-box"
  >
    <label
      class="base-input-label"
    >
      {{ t('organizationDescription') }}
      <v-textarea
        v-model="inputModel"
        v-validate="'required'"
        :error-messages="errors.collect(t('description'))"
        :data-vv-name="t('description')"
        class="base-input mt-2"
        solo
        required
        data-vv-validate-on="blur"
        @blur="emitInputValue('description')"
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
