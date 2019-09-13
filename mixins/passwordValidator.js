import { Validator } from 'vee-validate';

export default {
  mounted() {
    const vm = this;

    const strongRgx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

    Validator.extend('strong', {
      getMessage: () => vm.$t('auth.passwordNotValid'),
      validate: value => strongRgx.test(value)
    });
  }
};
