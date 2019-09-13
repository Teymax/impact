export const mutations = {
  SET_NEW_CLIENT_ID(state, newClientId) {
    state.newClientId = newClientId; // eslint-disable-line
  }
};

export const actions = {
  async updateClient(context, payload) {
    const clientId = payload.data.id;
    const { status } = await this.$axios.patch(`/clients/${clientId}`, payload);

    return (status >= 200 && status < 211);
  }
};

export const state = () => ({
  newClientId: null,
  clientTypes: ['individual', 'nonProfit', 'forProfit'],
  nonProfitCategories: ['Animals', 'Religious', 'Veterans'],
  articles: [
    {
      id: 1,
      title: 'Best ways to increase your rating?'
    },
    {
      id: 2,
      title: 'How to get your first client as a new freelancer?'
    },
    {
      id: 3,
      title: 'Best positive impact stories so far?'
    },
    {
      id: 4,
      title: 'I need help with some developement issues.'
    },
    {
      id: 5,
      title: 'Social Impact opportunities for a Writer?'
    }
  ]
});
