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
  },
  fetchMyJobsAndProposals({ commit }) {
    const myJobsAndProposals = {
      value1: '0',
      value2: '12',
      items: [
        {
          type: 'Job',
          title: 'Some proposal name',
          status: '1 day left'
        },
        {
          type: 'Proposal',
          title: 'Some proposal name, it can be long',
          status: '2 new messages'
        },
        {
          type: 'Proposal',
          title: 'Some proposal name',
          status: ''
        },
        {
          type: 'Job',
          title: 'Some proposal name',
          status: '1 day left'
        },
        {
          type: 'Proposal',
          title: 'Some proposal name, it can be long',
          status: '2 new messages'
        }
      ]
    };
    commit('FETCH_MY_JOBS_AND_PROPOSALS', myJobsAndProposals);
  }
};
export const mutations = {
  SAVE_JOB_IMPACTS(state, jobImpacts) {
    state.jobImpacts = jobImpacts;
  },
  SAVE_FREELANCER_RATING(state, freelancerRating) {
    state.freelancerRating = freelancerRating;
  },
  FETCH_MY_JOBS_AND_PROPOSALS(state, myJobsAndProposals) {
    state.myJobsAndProposals = myJobsAndProposals;
  }
};
export const state = () => ({
  jobImpacts: null,
  freelancerRating: null
});
