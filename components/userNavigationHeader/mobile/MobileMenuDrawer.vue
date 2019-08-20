<template>
  <v-navigation-drawer
    :value="menuState"
    app
    right
    disable-resize-watcher
    :width="drawerWidth"
    class="main-navbar__drawer pt-3 pl-5"
    @input="closeDrawer"
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-list>
          <v-list-tile
            v-for="item in userCustomLinks"
            :key="item.name"
            to="item.to"
            nuxt
            class="main-navbar__drawer-list-item"
          >
            <span
              v-if="item.icon"
              class="menu-badge transparent"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </span>
            {{ item.name }}
          </v-list-tile>
          <v-list-tile
            v-for="item in mainLinks"
            :key="item.name"
            to="item.to"
            nuxt
            class="main-navbar__drawer-list-item"
          >
            {{ item.name }}
          </v-list-tile>
          <v-list-tile
            v-for="item in notificationLinks"
            :key="item.name"
            to="item.to"
            nuxt
            class="main-navbar__drawer-list-item with-badges"
          >
            <!-- TODO: Here should goes notifications from backend -->
            <span class="menu-badge">3</span>
            {{ item.name }}
          </v-list-tile>
          <v-list-group
            append-icon="keyboard_arrow_down"
          >
            <template v-slot:activator>
              <v-list-tile
                class="main-navbar__drawer-list-item"
              >
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ t('more') }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="item in moreMenuItems"
              :key="item.name"
              to="item.to"
              nuxt
              class="main-navbar__drawer-list-item"
            >
              {{ item.name }}
            </v-list-tile>
          </v-list-group>
          <v-list-group
            append-icon="keyboard_arrow_down"
          >
            <template v-slot:activator>
              <v-list-tile
                class="main-navbar__drawer-list-item"
              >
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ t('account') }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="item in moreMenuItems"
              :key="item.name"
              to="item.to"
              nuxt
              class="main-navbar__drawer-list-item"
            >
              {{ item.name }}
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import mobileDrawer from '@/mixins/mobileDrawer';

export default {
  mixins: [mobileDrawer],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    isFreelancer: {
      required: true
    }
  },
  computed: {
    userCustomLinks() {
      if (this.isFreelancer) {
        return [
          {
            name: this.t('postJob'),
            to: this.localePath('index'),
            icon: 'add_circle_outline'
          },
          {
            name: this.t('proposals'),
            to: this.localePath('index')
          }
        ];
      }

      return [
        {
          name: this.t('searchJobs'),
          to: this.localePath('index'),
          icon: 'search'
        },
        {
          name: this.t('freelancers'),
          to: this.localePath('index')
        }
      ];
    },
    mainLinks() {
      return [
        {
          name: this.t('myJobs'),
          to: this.localePath('index')
        },
        {
          name: this.t('finances'),
          to: this.localePath('index')
        },
        {
          name: this.t('reports'),
          to: this.localePath('index')
        }
      ];
    },
    notificationLinks() {
      return [
        {
          name: this.t('messages'),
          to: this.localePath('index')
        },
        {
          name: this.t('notifications'),
          to: this.localePath('index')
        }
      ];
    },
    // TODO: moreMenuItems is copied from main navbar, should be changed to proper ones.
    moreMenuItems() {
      return [
        {
          name: this.t('getInvolved'),
          to: this.localePath('index')
        },
        {
          name: this.t('ourMission'),
          to: this.localePath('index')
        }
      ];
    }
  }
};
</script>
