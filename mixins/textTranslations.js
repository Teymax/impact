export default {
  methods: {
    t(text, params) {
      return this.$t(`${this.translationScope}.${text}`, params);
    }
  }
};
