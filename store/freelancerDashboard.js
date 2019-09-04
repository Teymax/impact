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
          status: '1 day left',
          id: 1
        },
        {
          type: 'Proposal',
          title: 'Some proposal name, it can be long',
          status: '2 new messages',
          id: 2
        },
        {
          type: 'Proposal',
          title: 'Some proposal name',
          status: '',
          id: 3
        },
        {
          type: 'Job',
          title: 'Some proposal name',
          status: '1 day left',
          id: 4
        },
        {
          type: 'Proposal',
          title: 'Some proposal name, it can be long',
          status: '2 new messages',
          id: 5
        }
      ]
    };
    commit('FETCH_MY_JOBS_AND_PROPOSALS', myJobsAndProposals);
  },
  fetchFinances({ commit }) {
    const freelancerFinances = {
      value1: '$100',
      value2: '$500',
      profit: '+$25',
      point1: '$345',
      interval1: 'May 15 - May 21'
    };
    commit('FETCH_FINANCES', freelancerFinances);
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
  },
  FETCH_FINANCES(state, freelancerFinances) {
    state.freelancerFinances = freelancerFinances;
  }
};
export const state = () => ({
  jobImpacts: null,
  freelancerRating: null,
  myJobsAndProposals: null,
  freelancerFinances: null
});
