export default {
  methods: {
    t(text, params, customScope) {
      const scope = customScope || this.translationScope;
      return this.$t(`${scope}.${text}`, params);
    }
  }
};
