const isDevelopment = process.env.NODE_ENV === 'development';


export default {
  redirect: {
    login: '/auth/sign-in',
    logout: '/',
    callback: '/auth/sign-in',
    home: '/'
  },
  defaultStrategy: 'local',
  vuex: {
    namespace: 'auth'
  },
  localStorage: false,
  cookie: {
    prefix: 'auth.',
    options: {
      path: '/',
      maxAge: 1209600,
      secure: !isDevelopment
    }
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/auth/sign_in', method: 'post', propertyName: 'token' },
        user: { url: '/auth/user', method: 'get', propertyName: false },
        logout: { url: '/auth/sign_out', method: 'delete', propertyName: false }
      }
    }
  }
};
