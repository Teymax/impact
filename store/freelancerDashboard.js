export const actions = {
  fetchJobImpacts({ commit }) {
    const jobImpacts = {
      jobsRatingsCount: '25',
      impactsProposalsCount: '17'
    };
    commit('SAVE_JOB_IMPACTS', jobImpacts);
  },
  fetchFreelancerRating({ commit }) {
    const freelancerRating = {
      jobsRatingsCount: '93%',
      impactsProposalsCount: '56%'
    };
    commit('SAVE_FREELANCER_RATING', freelancerRating);
  },
  fetchMyJobsAndProposals({ commit }) {
    const myJobsAndProposals = {
      currentJobs: '0',
      activeProposals: '12',
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
      balance: '$100',
      earnedLastWeek: '$500',
      profit: '+$25',
      maxProfit: '$345',
      interval: 'May 15 - May 21'
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
