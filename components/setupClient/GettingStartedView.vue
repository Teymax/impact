<template>
  <v-layout
    justify-center
    wrap
  >
    <v-flex
      class="step__final-card"
      text-xs-left
      xs12
      md8
      lg6
    >
      <h3 class="step__card-title-text">
        {{ t('suggestedActions') }}
      </h3>
      <v-list>
        <v-list-tile
          v-for="action in actions"
          :key="action.id"
          class="step__card-list-item"
        >
          <v-list-tile-action>
            <v-btn
              icon
              color="azure--text"
              to="/"
              large
            >
              <v-icon
                class="azure--text step__final-card__icon"
              >
                {{ action.icon }}
              </v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-content>
            <p class="ma-0 step__action-text">
              {{ action.name }}
            </p>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>

    <v-flex
      class="step__final-card"
      text-xs-left
      xs12
      md8
      lg6
    >
      <h3 class="step__card-title-text">
        {{ t('communityArticles') }}
      </h3>
      <v-list two-lin>
        <v-list-tile
          v-for="article in articles"
          :key="article.id"
          class="step__card-list-item article mb-2"
        >
          <v-list-tile-content>
            <v-layout align-center>
              <v-btn
                icon
                large
                to="/"
                class="text-none pl-0 ml-0 primary--text"
              >
                <Avatar
                  name="Some Article"
                  size="xxs"
                />
              </v-btn>
              <p class="step__article-title-text">
                {{ article.title }}
              </p>
            </v-layout>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';
import Avatar from '@/components/shared/AvatarComponent';

export default {
  components: { Avatar },
  mixins: [textTranslations, watchBreakPoints],
  data() {
    return {
      translationScope: 'setupAccount'
    };
  },
  computed: {
    ...mapState('setupClient', ['articles']),
    actions() {
      return [
        {
          id: 0,
          name: this.t('postJob'),
          icon: 'add_circle_outlined',
          path: 'client-post-job'
        },
        {
          id: 1,
          name: this.t('searchFreelancers'),
          icon: 'search',
          path: 'path'
        },
        {
          id: 2,
          name: this.t('addFunds'),
          icon: 'account_balance_wallet',
          path: 'path'
        },
        {
          id: 3,
          name: this.t('dashboardReturn'),
          icon: 'arrow_back',
          path: 'path'
        }
      ];
    }
  }
};
</script>
