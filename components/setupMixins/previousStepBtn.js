export default {
  methods: {
    goToPreviousStep() {
      this.$emit('go-to-previous-step');
    }
  }
};
