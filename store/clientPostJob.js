export const mutations = {
  UPDATE_JOB(state, data) {
    Object.assign(state.newJob, data);
  },

  UPDATE_JOB_REQUIREMENTS(state, data) {
    if (state.newJob.requirements) {
      Object.assign(state.newJob.requirements, data);
    } else {
      state.newJob.requirements = data;
    }
  },

  UPDATE_CUSTOM_QUESTIONS(state, data) {
    state.customQuestions = data;
  },

  CLEAR_NEW_JOB_TERMS_DATA(state, jobType) {
    if (jobType === 'fixed_budget') {
      delete state.newJob.freelancersLevel;
      delete state.newJob.approximateLength;
    } else {
      delete state.newJob.budget;
      delete state.newJob.deadlineAt;
    }
  }
};

export const actions = {
  async createJobOffer(context, payload) {
    const { status } = await this.$axios.post('/job_offers', payload);

    return (status >= 200 && status < 211);
  }
};

export const state = () => ({
  jobCategories: ['Copywriting', 'Art', 'Software Development'],
  jobs: [{
    jobType: 'fixed_budget',
    category: 'Software Development',
    title: 'Looking for RoR Developer (WFI)',
    description: 'RoR develper is needed for big project.Lorem ipsum dolor sit amet.',
    budget: '10000',
    deadlineAt: '2019-08-10',
    visible: true,
    requirements: {
      prohibitedCountries: ['Afghanistan', 'Pakistan'],
      englishProficiency: 'Advanced',
      minimumRating: '80'
    },
    boosted: true
  }],
  newJob: {
    requirements: {}
  },
  customQuestions: []
});
