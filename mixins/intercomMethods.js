export default {
  methods: {
    initializeIntercom() {
      if (!this.$auth.user) {
        this.$intercom.boot();
      } else {
        this.$intercom.boot(this.setIntercomData());
      }
    },
    updateIntercomState() {
      this.$intercom.update(this.setIntercomData());
    },
    setIntercomData() {
      if (!this.$auth.user) return null;

      const { id, firstName, email } = this.$auth.user;
      return {
        user_id: id,
        name: firstName,
        email
      };
    }
  }
};
