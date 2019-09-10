<template>
  <div class="cookie-notice">
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <h1 class="cookie-notice__header">
          {{ header }}
        </h1>
      </v-flex>
      <v-flex xs9 grow pa-4>
        <h3>{{ whatAreTitle }}</h3>
        <div v-for="item in whatAreItems" :key="item.id" class="cookie-notice__item">
          <div v-for="contentItem in item.content" :key="contentItem.id">
            {{ contentItem.text }}
            <ul v-if="contentItem.list" class="cookie-notice__item-list">
              <li v-for="listItem in contentItem.list" :key="listItem.id">
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
        <h3>{{ controlTitle }}</h3>
        <div v-for="item in controlItems" :key="item.id" class="cookie-notice__item">
          <div v-for="contentItem in item.content" :key="contentItem.id">
            {{ contentItem.text }}
            <ul v-if="contentItem.list" class="cookie-notice__item-list">
              <li v-for="(listItem, index) in contentItem.list" :key="listItem.id">
                <a :href="linkArr[index]" class="cookie-notice__item-list--link">{{ listItem }}</a>
              </li>
            </ul>
          </div>
        </div>
        <h3>{{ useTitle }}</h3>
        <v-img
          :src="tableTop"
        />
        <v-img
          :src="tableBottom"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import tableTop from '@/assets/images/cookies/tableTop.png';
import tableBottom from '@/assets/images/cookies/tableBottom.png';

export default {
  name: 'CookieNotice',
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'cookieNotice',
    tableTop,
    tableBottom,
    header: '',
    whatAreTitle: '',
    controlTitle: '',
    useTitle: '',
    whatAreItems: [],
    controlItems: [],
    linkArr: [
      'https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en',
      'https://support.microsoft.com/sr-latn-rs/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy',
      'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences',
      'https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies',
      'https://help.opera.com/en/latest/',
      'https://support.apple.com/en-gb/safari'
    ]
  }),
  created() {
    this.header = this.t('header');
    this.whatAreTitle = this.t('whatAreTitle');
    this.controlTitle = this.t('controlTitle');
    this.useTitle = this.t('useTitle');
    this.whatAreItems = this.t('whatAreItems');
    this.controlItems = this.t('controlItems');
  }
};
</script>
