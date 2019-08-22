export const actions = {
  fetchOpenJobs({ commit }) {
    const openJobsList = {
      currentJobs: 2,
      activeProposals: 12,
      impactsLeft: 30,
      jobs: [
        {
          title: 'A job with a sort name',
          proposals: 5,
          new: 3
        },
        {
          title: 'Some longer job name, it can be long',
          proposals: 7,
          new: 0
        }
      ]
    };
    commit('SAVE_OPEN_JOBS', openJobsList);
  },
  fetchJobsInProgress({ commit }) {
    const jobsInProgressList = {
      inProgress: 5,
      currentHours: 17,
      jobs: [
        {
          title: 'A job with a sort name',
          hours: 8,
          price: 45,
          author: 'Roman Brown'
        },
        {
          title: 'Some longer job name, it can be...',
          hours: 3,
          price: 50,
          author: 'Joanna Pierce'
        },
        {
          title: 'Urgent job redesigning marketi...',
          hours: 10,
          price: 35,
          author: 'Tim Baker'
        }
      ]
    };
    commit('SAVE_JOBS_IN_PROGRESS', jobsInProgressList);
  },
  fetchCommunityArticles({ commit }) {
    const communityArticlesList = [
      {
        title: 'Best ways to increase your rating?',
        comments: 117,
        new: 2
      },
      {
        title: 'How to get your first client as a new freelanc...',
        comments: 100,
        new: 3
      },
      {
        title: 'Best positive impact stories so far?',
        comments: 98,
        new: 5
      },
      {
        title: 'I need help with some developement issues.',
        comments: 95,
        new: 1
      },
      {
        title: 'Social Impact opportunities for a Writer?',
        comments: 80,
        new: 1
      }
    ];
    commit('SAVE_COMMUNITY_ARTICLES', communityArticlesList);
  },
  fetchMyFreelancers({ commit }) {
    const myFreelancersList = [
      {
        name: 'Julie Knowles',
        speciality: 'Writer / Translator',
        hours: 15,
        img: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
      },
      {
        name: 'Ben Henderson',
        speciality: 'Full Stack Developer',
        hours: 12,
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
      {
        name: 'Karen Chen',
        speciality: 'VR / AR Developer',
        hours: 12,
        img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
      }
    ];
    commit('SAVE_MY_FREELANCERS', myFreelancersList);
  }
};
export const mutations = {
  SAVE_OPEN_JOBS(state, openJobsList) {
    state.openJobsList = openJobsList;
  },
  SAVE_JOBS_IN_PROGRESS(state, jobsInProgressList) {
    state.jobsInProgressList = jobsInProgressList;
  },
  SAVE_COMMUNITY_ARTICLES(state, communityArticlesList) {
    state.communityArticlesList = communityArticlesList;
  },
  SAVE_MY_FREELANCERS(state, myFreelancersList) {
    state.myFreelancersList = myFreelancersList;
  }
};
export const state = () => ({
  openJobsList: null,
  jobsInProgressList: null,
  communityArticlesList: null,
  myFreelancersList: null
});
