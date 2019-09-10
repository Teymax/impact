<template>
  <div class="privacy-policy">
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <h1 class="privacy-policy__header">
          {{ header }}
        </h1>
      </v-flex>
      <v-flex xs9 grow pa-4>
        <div v-for="(item, index) in items" :key="item.id" class="privacy-policy__item">
          <span>{{ index+1 }}. {{ item.title }}</span>
          <div v-for="contentItem in item.content" :key="contentItem.id">
            {{ contentItem.text }}
            <ul v-if="contentItem.list" class="privacy-policy__item-list">
              <li v-for="listItem in contentItem.list" :key="listItem.id">
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-img
          class="privacy-policy__img img"
          :src="privacyPolicyImg"
          min-height="157"
          min-width="257"
          max-height="157"
          max-width="257"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import privacyPolicyImg from '@/assets/images/privacyPolicy/privacyPolicy.jpg';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'PrivacyPolicy',
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'privacyPolicy',
    privacyPolicyImg,
    header: '',
    items: []
  }),
  created() {
    this.header = this.t('header');
    this.items = this.t('items');
  }
};
</script>
