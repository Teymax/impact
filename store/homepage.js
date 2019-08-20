export const actions = {
  fetchTestimonials({ commit }) {
    // fetching stuff
    const testimonials = [
      {
        description: 'Work for impact enabled us to reach a global pool of talented freelancers and form amazing collaborations.',
        author: 'Mr. Robot',
        company: 'Galaxy Invadors',
        img: '@/assets/images/home/WWF.png'
      },
      {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem corporis tempora veniam consequuntur, optio forrupti sed inventore placeat, facere eveniet, alias perferendis nisi assumenda rem.',
        author: 'yoda',
        company: 'bright side',
        img: '@/assets/images/home/WWF.png'
      }
    ];
    commit('SAVE_TESTIMONIALS', testimonials);
  },

  fetchCategories({ commit }) {
    // fetching categories
    const categories = [
      'all categories',
      'ux design',
      'web development',
      'admin support',
      'water',
      'education',
      'animals'
    ];

    commit('SAVE_JOBS_CATEGORIES', categories);
  },

  fetchFreelancersCategories({ commit }) {
    // fetching
    const categories = [
      'all categories',
      'ux design',
      'painting',
      'no support',
      'fire',
      'breaking the wall',
      'animals'
    ];

    commit('SAVE_FREELANCERS_CATEGORIES', categories);
  },

  // eslint-disable-next-line no-unused-vars
  fetchJobsPerCategory({ commit }, category) {
    const jobsOffers = [
      {
        id: 242,
        header: 'Digital Performance channel audits',
        ammount: '$200',
        payForm: 'hour',
        localization: 'UK',
        review: '80%',
        description: 'We are looking for a digital marketing specialist in performance who can audit the business right now - AdWords, paid social, SEO...',
        img: 'catLogo1.png'
      },
      {
        id: 52352,
        header: 'Marketing Assistant/Project Manager',
        ammount: '$30',
        payForm: 'hour',
        localization: 'Remote',
        review: '95%',
        description: 'We need one or two people who know ZOHO and its suite of marketing applications to implement our marketing strategy and build',
        img: 'catLogo2.png'
      },
      {
        id: 523523,
        header: 'UX Designer',
        ammount: '$1500',
        payForm: 'fixed',
        localization: 'AUS',
        review: '90%',
        description: 'We are looking for an expert UX designer to assist in improving the customer journey of potential borrowers and b2b business partners.',
        img: 'WWF.png'
      }
    ];

    commit('SAVE_JOB_OFFERS', jobsOffers);
  },

  // eslint-disable-next-line no-unused-vars
  fetchFreelancerPerCategory({ commit }, category) {
    // fetching
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
  SAVE_TESTIMONIALS(state, testimonials) {
    state.testimonials = testimonials;
  },

  SAVE_JOBS_CATEGORIES(state, categories) {
    state.allJobsCategories = categories;
  },

  SAVE_FREELANCERS_CATEGORIES(state, categories) {
    state.allFreelancersCategories = categories;
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
  testimonials: null,
  allJobsCategories: null,
  allFreelancersCategories: null,
  jobsOffers: null,
  freelancersOffers: null,
  isMenuShow: false
});
