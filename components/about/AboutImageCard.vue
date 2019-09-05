<template>
  <div class="about-image-card base-card base-card-shadow">
    <v-layout :reverse="isReverse" row wrap justify-center align-center>
      <v-flex v-if="img" xs12 sm12 md6 lg6>
        <v-img
          :src="img"
          :height="imgHeight"
          :width="imgWidth"
          class="about-image-card__img"
        />
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <div v-if="content" class="about-image-card__content">
          <h3 v-if="title" class="about-image-card__title text-xs-center text-md-left">
            {{ title }}
          </h3>
          <p v-for="contentTxt in content" :key="contentTxt.id" class="about-image-card__content--txt">
            {{ contentTxt }}
          </p>
        </div>
      </v-flex>
      <v-flex xs12>
        <p v-if="description" class="about-image-card__description">
          {{ description }}
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: {
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
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>
