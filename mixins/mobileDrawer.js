import { mapState, mapMutations } from 'vuex';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  props: {
    drawerWidth: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      translationScope: 'navigation'
    };
  },
  computed: {
    ...mapState({
      menuState: state => state.homepage.isMenuShow
    })
  },
  methods: {
    ...mapMutations('homepage', ['TOGGLE_MENU']),
    closeDrawer(value) {
      if (!value) this.TOGGLE_MENU(value);
    }
  }
};
