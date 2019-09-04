<template>
  <v-container class="dashboard__card base-card-shadow">
    <v-layout column>
      <h3 class="jobs-proposal--orange-txt">
        My Jobs and Proposals
      </h3>
      <v-flex xs12>
        <v-layout>
          <v-flex xs6 class="jobs-proposal__count">
            <span class="jobs-proposal__number jobs-proposal--darkest-grey-txt">{{ jobsNumber }}</span>
            <br>
            <span class="jobs-proposal__number-description">{{ jobsDescription }}</span>
          </v-flex>
          <v-flex xs6 class="jobs-proposal__count">
            <span class="jobs-proposal__number jobs-proposal--darkest-grey-txt">{{ proposalsNumber }}</span>
            <br>
            <span class="jobs-proposal__number-description">{{ proposalsDescription }}</span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-divider />
      <v-flex xs12>
        <div class="jobs-proposal__list">
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item.id"
            >
              <div
                class="jobs-proposal__block-type"
                :class="blockType(item.type)"
              >
                {{ item.type }}
              </div>
              <v-list-tile-content>
                <span class="jobs-proposal__type-content">
                  {{ item.content }}
                  <span class="jobs-proposal__type-content--comment">
                    {{ checkMessage(item.lastSeen, item.messagesNum) }}
                  </span>
                </span>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </div>
      </v-flex>
      <v-flex />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MyJobsAndProposals',
  props: {
    jobsNumber: {
      type: Number,
      default: 0
    },
    proposalsNumber: {
      type: Number,
      default: 0
    },
    jobsDescription: {
      type: String,
      default: ''
    },
    proposalsDescription: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({

  }),
  methods: {
    blockType(type) {
      if (type === 'job') {
        return 'jobs-proposal--orange-block';
      }
      if (type === 'proposal') {
        return 'jobs-proposal--azure-tint-block';
      }
      return '';
    },
    checkMessage(lastSeen, messageNum) {
      if (lastSeen) {
        return lastSeen + (lastSeen > 1 ? ' days ago' : ' day ago');
      }
      if (messageNum) {
        return messageNum + (messageNum > 1 ? ' new messages' : ' new message');
      }
      return '';
    }
  }
};
</script>
