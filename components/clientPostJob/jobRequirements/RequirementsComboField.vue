<template>
  <v-flex
    class="step__combo-input"
    xs12
  >
    <v-layout align-start>
      <v-flex
        shrink
        class="step__combo-input--checkbox"
      >
        <v-checkbox
          v-model="isEditable"
          :label="inputContent.checkboxLabel"
          :disabled="!enabled"
        />
      </v-flex>

      <v-fade-transition
        mode="out-in"
      >
        <v-flex
          v-if="showTextInput"
          shrink
        >
          <v-text-field
            v-model="inputModel"
            v-validate="'required|min_value:0|max_value:100|decimal'"
            :error-messages="errors.collect(inputContent.checkboxLabel)"
            :data-vv-name="inputContent.checkboxLabel"
            suffix="%"
            class="base-input"
            solo
            @blur="emitInputValue"
          />
        </v-flex>

        <v-flex
          v-if="!showTextInput && enabled"
          class="step__combo-input--checkbox"
        >
          <v-select
            v-if="isEditable"
            v-model="inputModel"
            :items="inputContent.fieldItems"
            :chips="hasMany"
            :clearable="hasMany"
            :deletable-chips="hasMany"
            solo
            :multiple="hasMany"
            hide-no-data
            hide-selected
            class="base-input"
            :aria-autocomplete="false"
            @blur="emitInputValue"
          />
        </v-flex>
      </v-fade-transition>
    </v-layout>
  </v-flex>
</template>


<script>
export default {
  props: {
    inputContent: {
      type: Object,
      required: true
    },
    initial: {
      type: Object,
      required: true
    },
    hasMany: {
      type: Boolean,
      required: false,
      default: true
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      isEditable: false,
      inputModel: null
    };
  },
  computed: {
    showTextInput() {
      return this.isEditable && !this.inputContent.fieldItems;
    },
    showComboBox() {
      return !this.showTextInput && this.toggledCheckboxName !== this.inputContent.fieldName;
    }
  },
  watch: {
    isEditable(value) {
      if (!value) {
        this.inputModel = null;
        this.emitInputValue();
      }
      if (this.inputContent.fieldName !== 'englishProficiency') this.toggleCountryCheckbox();
    }
  },
  mounted() {
    if (this.initial.value) {
      this.inputModel = this.initial.value;
      this.isEditable = true;
    }
  },
  methods: {
    emitInputValue() {
      const { inputModel, inputContent } = this;
      this.$emit('get-input-value',
        { value: inputModel, fieldName: inputContent.fieldName });
    },
    toggleCountryCheckbox() {
      if (this.inputContent.fieldItems && this.isEditable) {
        this.$emit('toggle-country-checkbox', this.inputContent.fieldName);
      }
      if (this.inputContent.fieldItems && !this.isEditable) {
        this.$emit('toggle-country-checkbox', null);
      }
    }
  }
};
</script>
