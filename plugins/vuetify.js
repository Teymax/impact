import Vue from 'vue';
import Vuetify, {
  VApp,
  VContainer,
  VLayout,
  VFlex,
  VNavigationDrawer,
  VFadeTransition,
  VCheckbox,
  VToolbar,
  VToolbarSideIcon,
  VIcon,
  VCard,
  VBtn,
  VBtnToggle,
  VToolbarItems,
  VImg,
  VList,
  VListTile,
  VListTileTitle,
  VDivider,
  VMenu,
  VWindow,
  VWindowItem
} from 'vuetify/lib';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  components: {
    VApp,
    VContainer,
    VLayout,
    VFlex,
    VNavigationDrawer,
    VFadeTransition,
    VCheckbox,
    VToolbar,
    VToolbarSideIcon,
    VIcon,
    VCard,
    VBtn,
    VBtnToggle,
    VToolbarItems,
    VImg,
    VListTile,
    VDivider,
    VListTileTitle,
    VMenu,
    VList,
    VWindow,
    VWindowItem
  },
  theme: {
    primary: '#FF6A00',
    baseGrey: '#495057',
    azure: '#0A91FF',
    lightestGrey: '#F8F9FA',
    error: '#FF0000',
    success: '#20F583'
  }
});
