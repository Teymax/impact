<template>
  <div class="terms-of-use">
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <h1 class="terms-of-use__header">
          {{ header }}
        </h1>
      </v-flex>
      <v-flex xs9 grow pa-4>
        <ol class="terms-of-use__list">
          <li
            v-for="item in items"
            :key="item.id"
            class="terms-of-use__list-item"
          >
            <b>{{ item.title }}</b>
            <ol class="terms-of-use__list">
              <li
                v-for="subItem in item.list"
                :key="subItem.id"
                :class="[item.list.length<=1?
                  'terms-of-use__list-sub-item--without-marker' :
                  'terms-of-use__list-sub-item']"
              >
                {{ subItem.listTitle }}
                <ul :class="[subItem.type!=='letter'?'terms-of-use__list-deep':'terms-of-use__list-letter']">
                  <li
                    v-for="subListItem in subItem.subList"
                    :key="subListItem.id"
                    :class="[subListItem.withoutMarker?'terms-of-use__list-item--without-marker':'']"
                  >
                    <span><b>{{ subListItem.subTitle }} </b>{{ subListItem.content }}</span>
                    <ul v-if="subListItem.contentList" class="terms-of-use__list-roman">
                      <li
                        v-for="contentListItem in subListItem.contentList"
                        :key="contentListItem.id"
                      >
                        {{ contentListItem }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'TermsOfUse',
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'termsOfUse',
    header: '',
    items: []
  }),
  created() {
    this.header = this.t('header');
    this.items = this.t('items');
  }
};
</script>

<style scoped>

</style>
