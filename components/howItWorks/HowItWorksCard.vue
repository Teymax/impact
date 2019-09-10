<template>
  <div class="how-it-works-card base-card base-card-shadow">
    <v-layout :reverse="isReverse" row wrap justify-center align-center>
      <v-flex xs12>
        <h3 v-if="header" class="how-it-works-card__header">
          <span class="primary--text">{{ `${cardNumber}.` }}</span> {{ header }}
        </h3>
        <p v-if="description" class="how-it-works-card__description">
          {{ description }}
        </p>
      </v-flex>
      <v-flex v-if="img" xs12 sm12 md12 lg6>
        <v-img
          :src="img"
          :max-height="imgHeight"
          :max-width="imgWidth"
          class="how-it-works-card__img"
        />
      </v-flex>
      <v-flex xs12 sm12 md12 lg6>
        <div v-if="content" class="how-it-works-card__content">
          <p v-for="contentItem in content" :key="contentItem.id" class="how-it-works-card__content--txt">
            <span class="primary--text how-it-works-card__content--title">
              {{ contentItem.title }}</span> {{ contentItem.text }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HowItWorksCard',
  props: {
    cardNumber: {
      type: Number,
      default: 0
    },
    header: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: [String, Number],
      default: 0
    },
    imgWidth: {
      type: [String, Number],
      default: 0
    },
    isReverse: {
      type: Boolean,
      default: false
    },
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>
