import postJob from './modules/postJob';
import dashboard from './modules/dashboard';
import freelancerDashboard from './modules/freelancerDashboard';
import notifications from './modules/notifications';
import about from './about';
import howItWorks from './howItWorks';

export default {
  navigation: {
    forClients: 'For Clients',
    forFreelancers: 'For Freelancers',
    signIn: 'sign in',
    signUp: 'sign up',
    logOut: 'Log Out',
    about: 'About',
    searchPlaceholder: 'Search for jobs or freelancers',
    whoWe: 'Who We Are',
    getInvolved: 'Get Involved',
    ourMission: 'Our Mission',
    community: 'Community',
    contacts: 'Contacts',
    main: 'Main',
    postJob: 'Post a Job',
    freelancers: 'Freelancers',
    freelancer: 'Freelancer',
    myJobs: 'My Jobs',
    finances: 'Finances',
    reports: 'Reports',
    messages: 'Messages',
    notifications: 'Notifications',
    client: 'Client',
    dashboard: 'Dashboard',
    myProfile: 'My Profile',
    settings: 'Settings',
    accountProfile: '{type} Profile',
    searchJobs: 'Search Jobs',
    proposals: 'Proposals',
    more: 'More...',
    account: 'Account'
  },
  homepage: {
    viewProfile: 'View Profile',
    verified: 'Verified Top Talent',
    impactful: 'Impactful Organizations',
    lowAndTransparent: 'Low & Transparent Fees',
    showCase: 'We only showcase freelancers that have verified skills.',
    workForVetted: 'Work for vetted organizations that make a positive impact on the world.',
    ourCharges: 'Our charges are simple and understandable, no hidden fees.',
    whoWe: 'Who We Are',
    introHeader: 'Work for Impact is a freelance platform designed specifically for non-profits and socially responsible organizations. Find a freelancer for your project, or apply for exciting paid work opportunities.',
    dontWork: "Don't Just Work.",
    makeImpact: 'Make an Impact.',
    workFor: 'work for',
    impact: 'impact',
    subheader: 'A freelance platform for hiring talented people and finding paid work opportunities.',
    findJob: 'Find a Job',
    findFreelancer: 'Find a Freelancer',
    offerHeader: 'Working together to make a better world',
    topFreelancers: 'Top Freelancers',
    newJobs: 'New Jobs',
    more: 'more',
    browseJobs: 'Browse Jobs',
    findProjectPassionate: 'Find a project you’re passionate about and start making a difference',
    howItWorks: 'How it works',
    clientsCreate: 'Clients Create Jobs',
    freelancerHired: 'Freelancers Get Hired',
    getToWork: 'Get to Work',
    recivePayments: 'Make and Receive Payments',
    describeProject: 'Describe your project and vision to attract potential freelancers.',
    connectWithQuality: 'Connect with quality clients and get hired by non-profits and socially responsible organizations.',
    useOurCustom: 'Use our custom workspace to track the progress of jobs, share files, send and receive feedback, and more.',
    projectCanBePaid: 'Projects can be paid for by the hour or per project. Only pay for work that you approve.',
    infoHeader: 'Work for Impact is dedicated to promoting positive change around the world by connecting talented freelancers with socially and environmentally responsible organizations. We donate {percent} of all our proceeds to charity.',
    percent: '1%',
    signUpInfo: 'Sign up as a client or freelancer today',
    signUp: 'Sign Up',
    transparentPricing: 'work for Impact is dedicated to being 100% transparent about our pricing. All costs and fees associated with our services are clearly detailed on our website. If you have any questions, please contact us.',
    transactionFee: 'Transaction Fee For Clients',
    projectFee: 'Project Fee For Freelancers',
    learnMore: 'Learn more about our fees',
    fixedPrice: 'Fixed Price:',
    perHour: 'Per Hour:',
    clientRating: 'Client Rating:',
    hire: 'hire',
    rating: '{number}% Rating',
    // eslint-disable-next-line no-template-curly-in-string
    fee: '${number} / hour',
    allCategory: 'All categories'
  },
  footer: {
    whoWe: 'Who we are',
    getInvolved: 'Get Involved',
    ourMission: 'Our Mission',
    community: 'Community',
    faq: 'FAQ',
    articlesFreelancers: 'Articles for Freelancers',
    articlesClients: 'Articles for Clients',
    bugsIdeas: 'Bugs & Ideas',
    terms: 'Terms of Use',
    legal: 'Legal Information',
    contacts: 'Contacts',
    subheader: 'Have any questions or concerns?',
    getHelp: 'Get Help'
  },
  auth: {
    signUp: 'Sign Up',
    signIn: 'Sign In',
    logIn: 'Log in',
    welcomeBack: 'Welcome Back',
    email: 'Email',
    sampleEmail: 'email@email.com',
    authSubheader: 'Let\'s start making a differance!',
    startAsClient: 'Start as a Client',
    startAsFreelancer: 'Start as a Freelancer',
    firstName: 'First Name',
    lastName: 'Last Name',
    password: 'Password',
    passwordConfirm: 'Confirm password',
    newPassword: 'Set new password',
    termsConfirm: 'Terms confirmation',
    continue: 'continue',
    getStarted: 'Get started',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot your password?',
    passwordRetrieval: 'Password Retrieval',
    rememberSign: 'Remembered? Sign in',
    resetPassword: 'Reset Password',
    emailConfirm: 'Hello! Your account has been activated succesfully.',
    toMainPage: 'Back to main page',
    emailPlaceholder: 'Add your Email',
    client: 'Client',
    freelancer: 'Freelancer',
    passwordNotValid: 'The Password should contains at least one capital letter, special character and number.'
  },
  setupAccount: {
    setup: 'Set Up your {type} account',
    basicInfo: 'Basic Information',
    portfolio: 'Portfolio',
    skills: 'Skills',
    identity: 'Identity',
    finance: 'Finance Account',
    uploadAvatar: 'Upload a profile picture',
    uploadLogo: 'Upload your company logo',
    speclialization: 'Specialization',
    expertise: 'Expertise',
    profileTitle: 'Profile Title',
    location: 'Your location',
    timezone: 'Your timezone',
    languageProficiency: 'Your {language} proficiency',
    hourlyRate: 'Hourly rate',
    availiability: 'Availiability',
    saveNgo: 'Save & go to next step',
    saveContinue: 'Save and Continue',
    continueLater: 'Continue set up later',
    addPortfolio: 'Add portfolio item',
    portfolioLater: 'Setup portfolio later',
    myCompany: 'My Company',
    paymentVerification: 'Payment Verification',
    gettingStarted: 'Getting started',
    individualType: 'Individual',
    nonProfitType: 'Non-Profit',
    forProfitType: 'For-Profit',
    companyName: 'Company name',
    yourName: 'Your name',
    nonProfitCategory: 'Non-Profit Category',
    organizationDescription: 'Describe Your Organization',
    roleTitle: 'Your title within ',
    aboutYourself: 'Tell Us About Yourself',
    url: 'URL',
    optional: 'optional',
    portfolioTitle: 'Portfolio Item Title',
    mainImage: 'Main Image',
    description: 'Description',
    cancel: 'cancel',
    addItem: 'Add Item',
    skillsLater: 'Verify your skills later',
    addSkills: 'Add skill verification',
    skill: 'Skill',
    finishTest: 'Finish test',
    finish: 'Finish',
    complete: 'Complete',
    identityVerification: 'Identity verification',
    verifyingSkills: 'Verifying your skills helps show potential clients that you�re a qualified for the jobs you�re applying for.',
    financeVerification: 'Finance account verification',
    hoursPerWeek: 'hours per week',
    letPotencialClients: 'Let potential clients see examples of your work by uploading items to your portfolio.',
    portfolioAdded: 'Portfolio Item Added',
    skillAdded: 'Skilll Verification Added',
    n: 'Suggested Actions',
    communityArticles: 'Community Articles',
    postJob: 'Post a job',
    searchFreelancers: 'Search for Freelancers',
    addFunds: 'Add Funds to Your Account',
    dashboardReturn: 'Return to dashboard',
    companyType: 'Company Type',
    suggestedActions: 'Suggested Actions',
    showAllLocations: 'Show all locations',
    impactAreas: 'Impact Areas'
  },
  uploads: {
    imageUploadSucceed: 'Image has been successful uploaded',
    imageUploadFailed: 'Your image upload has been failed. Please try again.'
  },
  dashboard,
  freelancerDashboard,
  notifications,
  postJob,
  about,
  howItWorks
};
