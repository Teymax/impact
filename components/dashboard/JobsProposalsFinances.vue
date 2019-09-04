<template>
  <v-container class="dashboard__card base-card-shadow">
    <v-layout column>
      <h3 class="jobs-proposal--orange-txt jobs-proposal--cart-header">
        {{ title }}
      </h3>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12 sm6 class="jobs-proposal__count">
            <v-layout row wrap align-center>
              <v-flex xs6 sm12>
                <span class="jobs-proposal__number jobs-proposal--darkest-grey-txt">{{ balance||jobsNumber }}</span>
              </v-flex>
              <v-flex xs6 sm12>
                <v-layout class="jobs-proposal__number-description" align-center justify-center>
                  <span>{{ jobsDescription }}</span>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6 class="jobs-proposal__count">
            <v-layout row wrap align-center>
              <v-flex xs6 sm12>
                <span class="jobs-proposal__number jobs-proposal--darkest-grey-txt">{{ earned||proposalsNumber }}</span>
              </v-flex>
              <v-flex xs6 sm12>
                <v-layout class="jobs-proposal__number-description" align-center justify-center>
                  <span>{{ proposalsDescription }}</span>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-divider v-if="!graph" />
      <v-flex v-if="graph">
        <v-layout row wrap justify-space-around>
          <v-flex xs12 sm6>
            <v-btn
              flat
              round
              class="text-none azure base homepage__btn white--text ml-0"
            >
              Withdrow
            </v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-layout class="jobs-proposal--links" row wrap justify-space-around align-center>
              <v-flex xs12 sm6>
                <div class="jobs-proposal--azure-txt">
                  Statistics
                </div>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="jobs-proposal--azure-txt">
                  Profits
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <div v-if="items" class="jobs-proposal__list">
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
        <div v-if="graph" class="jobs-proposal__list">
          <v-sparkline
            :fill="graph.fill"
            :gradient="graph.gradient"
            :line-width="graph.width"
            :padding="graph.padding"
            :smooth="graph.false"
            :value="graph.value"
            auto-draw
          />
        </div>
      </v-flex>
      <v-flex />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'JobsProposalsFinances',
  props: {
    title: {
      type: String,
      default: ''
    },
    jobsNumber: {
      type: Number,
      default: 0
    },
    proposalsNumber: {
      type: Number,
      default: 0
    },
    balance: {
      type: Number,
      default: 0
    },
    earned: {
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
    },
    graph: {
      type: Object,
      default: () => {}
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
