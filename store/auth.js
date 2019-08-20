export const actions = {
  async registerUser(context, payload) {
    const { data } = await this.$axios.post('/auth/sign_up', payload);
    const { token } = data;

    await this.$auth.setUserToken(token);
    await this.$auth.fetchUser();
  },

  async resetUserPassword(context, payload) {
    await this.$axios.post('/auth/password_recovery', payload);
  },

  async updateUserPassword(context, payload) {
    const { status } = await this.$axios.patch('/auth/password_update', payload);

    if (status >= 200 && status < 211) return true;
    return false;
  },

  async confirmRegistration(context, token) {
    const { status } = await this.$axios.get(`/auth/confirm_email/${token}`);

    if (status >= 200 && status < 211) return true;
    return false;
  }
};

export const getters = {
  user: state => state.user
};

export const state = () => ({
  busy: false,
  loggedIn: false,
  strategy: 'local',
  user: false
});
