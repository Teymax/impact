<template>
  <v-layout class="new-job-impact dashboard__card base-card-shadow" row nowrap align-center justify-space-around>
    <v-flex xs3>
      <v-img
        :class="{'avatar': isAvatar}"
        :src="img"
        :height="imgH"
        :width="imgW"
      ></v-img>
    </v-flex>
    <v-flex xs8>
      <v-layout column>
        <v-flex v-for="item in info" :key="item.id">
          <v-layout row nowrap justify-center align-center>
            <v-flex xs5>
              <span class="new-job-impact--num">
                {{ item.number }}
              </span>
            </v-flex>
            <v-flex xs7>
              <div class="new-job-impact__description">
                <span class="new-job-impact__title new-job-impact-darkest-grey">
                  {{ item.title }}
                </span>
                <br>
                <span class="new-job-impact__content new-job-impact__txt-darkest-grey" v-html="item.description"></span>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'NewJobsImpact',
  props: {
    img: {
      type: String,
      default: ''
    },
    imgH: {
      type: [String, Number],
      default: 0
    },
    imgW: {
      type: [String, Number],
      default: 0
    },
    info: {
      type: Array,
      default: () => []
    },
    isAvatar: {
      type: Boolean,
      default: false
    }
  }
};
</script>
