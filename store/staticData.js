export const actions = {
  async fetchLanguageProficiencyLevels({ commit }) {
    const { data, status } = await this.$axios.get('/language_proficiency_levels');

    try {
      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_LANGUAGE_PROFICIENCY_LEVELS', data);
    } catch (e) {
      // TODOD: Error handling
    }
  },

  async fetchTimezones({ commit }) {
    const { data, status } = await this.$axios.get('/timezones');

    try {
      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_TIMEZONES', data);
    } catch (e) {
      // TODOD: Error handling
    }
  },

  async fetchExpertises({ commit }) {
    const { data, status } = await this.$axios.get('/expertises?fields[expertises]=name&sort=-freelancers_count');

    try {
      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_EXPERTISES', data);
    } catch (e) {
      // TODOD: Error handling
    }
  },

  async fetchLocations({ commit }) {
    const { data, status } = await this.$axios.get('/locations');

    try {
      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_LOCATIONS', data);
    } catch (e) {
      // TODOD: Error handling
    }
  },

  async fetchSkills({ commit }) {
    const { data, status } = await this.$axios.get('/skills?fields[skills]=name&filter[activeEq]=true&sort=name');

    try {
      if (status !== 200) throw Error;
      delete data.included;
      delete data.data;

      commit('SAVE_SKILLS', data);
    } catch (e) {
      // TODOD: Error handling
    }
  }
};

export const getters = {
  languageProficiencyLevels: state => Object.values(state.languageProficiencyLevels).map(level => level.name),
  timezones: state => Object.values(state.timezones).map(timezone => timezone.name),
  expertises: state => Object.values(state.expertises).map(exp => ({ name: exp.name, value: exp.id })),
  locations: state => Object.values(state.locations).map(location => ({ name: location.name, value: location.id })),
  skills: state => Object.values(state.skills).map(skill => ({ name: skill.name, value: skill.id }))
};

export const mutations = {
  SAVE_LANGUAGE_PROFICIENCY_LEVELS(state, languageProficiencyLevels) {
    state.languageProficiencyLevels = languageProficiencyLevels;
  },
  SAVE_TIMEZONES(state, timezones) {
    state.timezones = timezones;
  },
  SAVE_EXPERTISES(state, expertises) {
    state.expertises = expertises;
  },
  SAVE_LOCATIONS(state, locations) {
    state.locations = locations;
  },
  SAVE_SKILLS(state, skills) {
    state.skills = skills;
  }
};

export const state = () => ({
  languageProficiencyLevels: [],
  timezones: [],
  expertises: [],
  locations: [
    { id: 'US', name: 'United States' },
    { id: 'IN', name: 'India' },
    { id: 'PH', name: 'Philippines' },
    { id: 'PK', name: 'Pakistan' },
    { id: 'PH', name: 'Philippines' },
    { id: 'UA', name: 'Ukraine' },
    { id: 'RU', name: 'Russian Federation' },
    { id: 'GB', name: 'United Kingdom' },
    { id: 'BD', name: 'Bangladesh' },
    { id: 'CA', name: 'Canada' }
  ],
  skills: []
});
