<template>
  <div class="community-discussions-articles">
    <v-layout>
      <v-flex>
        <h2 v-if="listTitle">
          {{ listTitle }}
        </h2>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.id"
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.content }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CommunityDiscussionsArticles',
  props: {
    listTitle: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
