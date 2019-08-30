// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async updateProfileImage(context, payload) {
    const { status } = await this.$axios.post('/images', payload);

    return (status >= 200 && status < 211);
  }
};
