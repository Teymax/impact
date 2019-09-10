// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async updateProfileImage(context, payload) {
    try {
      const { status, data } = await this.$axios.post('/images', payload);
      if (status !== 201) throw Error;

      return data;
    } catch (e) {
      return null;
    }
  }
};
