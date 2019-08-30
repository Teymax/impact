export const actions = {
  fetchJobImpacts({ commit }) {
    const jobImpacts = {
      value1: '25',
      value2: '17'
    };
    commit('SAVE_JOB_IMPACTS', jobImpacts);
  },
  fetchFreelancerRating({ commit }) {
    const freelancerRating = {
      value1: '93%',
      value2: '56%'
    };
    commit('SAVE_FREELANCER_RATING', freelancerRating);
  }
};
export const mutations = {
  SAVE_JOB_IMPACTS(state, jobImpacts) {
    state.jobImpacts = jobImpacts;
  },
  SAVE_FREELANCER_RATING(state, freelancerRating) {
    state.freelancerRating = freelancerRating;
  }
};
export const state = () => ({
  jobImpacts: null,
  freelancerRating: null
});
