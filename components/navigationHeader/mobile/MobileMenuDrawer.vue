<template>
  <v-navigation-drawer
    :value="menuState"
    app
    right
    disable-resize-watcher
    :width="drawerWidth"
    class="main-navbar__drawer"
    @input="closeDrawer"
  >
    <v-layout column fill-height>
      <v-flex shrink mb-4>
        <v-layout justify-center>
          <v-btn
            flat
            round
            outline
            class="text-capitalize azure--text main-navbar__drawer-btn"
            :to="localePath('auth-sign-in')"
          >
            {{ t('signIn') }}
          </v-btn>
          <v-btn
            flat
            round
            class="text-capitalize white--text azure main-navbar__drawer-btn"
            :to="localePath('auth-sign-up')"
          >
            {{ t('signUp') }}
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-list>
          <v-list-tile
            v-for="item in mainLinks"
            :key="item.id"
            to="item.to"
            nuxt
            class="main-navbar__drawer-list-item"
          >
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
                    {{ t('whoWe') }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="item in menuLinks"
              :key="item.id"
              to="item.to"
              nuxt
              class="main-navbar__drawer-list-item"
            >
              {{ item.name }}
            </v-list-tile>
          </v-list-group>
          <v-list-tile
            v-for="item in contactsLink"
            :key="item.id"
            to="item.to"
            nuxt
            class="main-navbar__drawer-list-item"
          >
            {{ item.name }}
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-spacer />
      <v-flex>
        <div class="hidden-lg-and-up intercom__container--drawer">
          <IntercomComponent />
        </div>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import mobileDrawer from '@/mixins/mobileDrawer';
import IntercomComponent from '@/components/shared/IntercomComponent';

export default {
  components: { IntercomComponent },
  mixins: [mobileDrawer],
  computed: {
    mainLinks() {
      return [
        {
          id: 0,
          name: this.t('main'),
          to: this.localePath('index')
        },
        {
          id: 1,
          name: this.t('forClients'),
          to: this.localePath('index')
        },
        {
          id: 2,
          name: this.t('forFreelancers'),
          to: this.localePath('index')
        }
      ];
    },
    menuLinks() {
      return [
        {
          id: 0,
          name: this.t('getInvolved'),
          to: this.localePath('index')
        },
        {
          id: 1,
          name: this.t('ourMission'),
          to: this.localePath('index')
        }
      ];
    },
    contactsLink() {
      return [
        {
          id: 11,
          name: this.t('community'),
          to: this.localePath('index')
        },
        {
          id: 12,
          name: this.t('contacts'),
          to: this.localePath('index')
        }
      ];
    }
  }
};
</script>
