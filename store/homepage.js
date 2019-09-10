export const actions = {
  async fetchCategories({ commit }, query) {
    try {
      const { data, status } = await this.$axios.get(`/expertises?fields[expertises]=name&sort=name&include=category&page[size]=${query.length}&page[number]=1`);

      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_CATEGORIES', data);
    } catch (e) {
      console.log(e);
    }
  },

  async fetchJobsPerCategory({ commit }, category) {
    try {
      let baseUrl = 'job_offers?&include=expertise,client&page[size]=3&page[number]=1';
      if (category) baseUrl += `&filter[expertiseNameEq]=${category}`;

      const { data } = await this.$axios.get(baseUrl);
      delete data.included;
      delete data.data;

      commit('SAVE_JOB_OFFERS', data);
    } catch (e) {
      console.error(e);
    }
  },

  async fetchFreelancerPerCategory({ commit }, category) {
    try {
      let baseUrl = 'freelancers?&fields[skills]=name&include=expertise,user,skills&page[size]=3&page[number]=1';
      if (category) baseUrl += `&filter[expertiseNameEq]=${category}`;

      const { data } = await this.$axios.get(baseUrl);
      delete data.included;
      delete data.data;
      console.log(data);

      // commit('SAVE_JOB_OFFERS', data);
    } catch (e) {
      console.error(e);
    }

    const freelancersOffers = [
      {
        fullName: 'Kevin Lim',
        proffesion: 'UX Designer',
        tags: ['hci', 'UX Design', 'VR/AR'],
        location: 'S.Korea',
        rating: '100',
        fee: '50'
      },
      {
        fullName: 'Tina Barners',
        proffesion: 'Project Manager',
        tags: ['projectManagement', 'strategy', 'goodLookin'],
        location: 'UK',
        rating: '96',
        fee: '45'
      },
      {
        fullName: 'Eleonora Dot',
        proffesion: 'Boss',
        tags: ['DoStuff', 'MasterOfUniverse'],
        location: 'Global',
        rating: '101',
        fee: '100'
      },
      {
        fullName: 'Jhon Bravo',
        proffesion: 'LadiesMen',
        tags: ['GoodLookin', 'MusclesEverywhere'],
        location: 'club',
        rating: '100',
        fee: 'xxx'
      }
    ];

    commit('SAVE_FREELANCERS_OFFERS', freelancersOffers);
  }
};

export const mutations = {
  SAVE_CATEGORIES(state, categories) {
    state.categories = categories;
  },

  TOGGLE_CATEGORY(state, category) {
    state.currentCategory = category;
  },

  SAVE_JOB_OFFERS(state, jobsOffers) {
    state.jobsOffers = jobsOffers;
  },

  SAVE_FREELANCERS_OFFERS(state, freelancersOffers) {
    state.freelancersOffers = freelancersOffers;
  },

  TOGGLE_MENU(state) {
    state.isMenuShow = !state.isMenuShow;
  }
};

export const state = () => ({
  currentCategory: null,
  categories: null,
  jobsOffers: null,
  freelancersOffers: null,
  isMenuShow: false
});
