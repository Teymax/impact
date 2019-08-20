import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      inputModel: ''
    };
  },
  methods: {
    emitInputValue(field) {
      this.$emit('set-input-data', { value: this.inputModel, field });
    }
  }
};
