// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async updateProfileImage(context, payload) {
    const { id } = payload.data;
    const { status } = await this.$axios.patch(`/profile_images/${id}`, payload);

    return (status >= 200 && status < 211);
  }
};
