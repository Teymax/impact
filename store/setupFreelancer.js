export const mutations = {
  ADD_PORTFOLIO_ITEM(state, portfolioItem) {
    state.portfolioItems.push(portfolioItem);
  },

  ADD_SKILLS_ITEM(state, skill) {
    state.skillItems.push(skill);
  }
};

export const actions = {
  async updateFreelancer(context, payload) {
    const freelancerId = payload.data.id;
    const { status } = await this.$axios.patch(`/freelancers/${freelancerId}`, payload);

    return (status >= 200 && status < 211);
  },
  async createPortfolio(context, payload) {
    const { status } = await this.$axios.post('/portfolios', payload);

    return (status >= 200 && status < 211);
  }
};

export const getters = {
  portfolioItems: state => state.portfolioItems,
  skillItems: state => state.skillItems
};


export const state = () => ({
  portfolioItems: [],
  skillItems: []
});
