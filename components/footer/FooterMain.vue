<template>
  <v-footer height="auto" class="main-footer pt-3 lightestGrey">
    <v-container fluid>
      <v-layout justify-center wrap>
        <v-flex lg9>
          <v-layout justify-space-between wrap>
            <v-flex
              v-for="(array, index) in footerElements"
              :key="index"
              :class="{ 'mb-5': breakpoint.smAndDown }"
              px-2
              mb-3
              xs12
              sm4
              md3
            >
              <div
                v-for="link in array"
                :key="link.id"
                class="pb-3 main-footer__link text-xs-center text-md-left"
              >
                <nuxt-link
                  :to="link.to"
                  class="text-capitalize"
                >
                  {{ link.name }}
                </nuxt-link>
              </div>
            </v-flex>
            <v-flex
              xs12
              md3
              class="column text-xs-center text-md-left"
            >
              <h5 class="mb-3 font-weight-regular main-footer__subheader">
                {{ t('subheader') }}
              </h5>
              <div>
                <nuxt-link
                  to="/"
                  class="azure--text main-footer__link"
                >
                  {{ t('getHelp') }}
                </nuxt-link>
              </div>
              <v-btn
                v-for="(btn, i) in socialBtns"
                :key="i"
                class="mr-3 mt-3 ml-0"
                :class="{ 'mt-5': breakpoint.smAndDown }"
                :href="btn.link"
                target="_blank"
                icon
              >
                <v-img
                  :src="require(`@/assets/images/icons/${btn.img}.svg`)"
                />
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div
      class="intercom__container--absolute hidden-md-and-down"
    >
      <IntercomComponent />
    </div>
    <div class="main-footer__block">
      © 2019 WFI® Inc.
    </div>
  </v-footer>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';
import IntercomComponent from '@/components/shared/IntercomComponent';

export default {
  components: { IntercomComponent },
  mixins: [textTranslations, watchBreakPoints],
  data() {
    return {
      translationScope: 'footer',
      socialBtns: [
        {
          img: 'fb',
          link: 'https://www.facebook.com/WorkForImpact/'
        },
        {
          img: 'twitter',
          link: 'https://twitter.com/workforimpact'
        },
        {
          img: 'linkedin',
          link: 'https://www.linkedin.com/company/workforimpact'
        },
        {
          img: 'yt',
          link: 'https://www.youtube.com/channel/UChnr75Gu1fsHQe6-TTvQQKA'
        }
      ]
    };
  },
  computed: {
    footerElements() {
      return {
        0: [
          {
            id: 1,
            name: this.t('whoWe'),
            to: '/'
          },
          {
            id: 2,
            name: this.t('getInvolved'),
            to: '/'
          },
          {
            id: 3,
            name: this.t('ourMission'),
            to: '/'
          }
        ],
        1: [
          {
            id: 1,
            name: this.t('community'),
            to: '/'
          },
          {
            id: 2,
            name: this.t('articlesFreelancers'),
            to: '/'
          },
          {
            id: 3,
            name: this.t('articlesClients'),
            to: '/'
          },
          {
            id: 4,
            name: this.t('bugsIdeas'),
            to: '/'
          }
        ],
        2: [
          {
            id: 1,
            name: this.t('terms'),
            to: '/'
          },
          {
            id: 2,
            name: this.t('legal'),
            to: '/'
          },
          {
            id: 3,
            name: this.t('contacts'),
            to: '/'
          }
        ]
      };
    }
  }
};
</script>
