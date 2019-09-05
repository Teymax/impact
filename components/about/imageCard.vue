<template>
  <div class="about-image-card base-card_default base-card-shadow">
    <v-layout row wrap justify-center align-center>
      <v-flex v-if="img" xs6>
        <v-img
          :src="img"
          :height="imgHeight"
          :width="imgWidth"
          class=""></v-img>
      </v-flex>
      <v-flex xs6>
        <div v-if="content" class="about-image-card__content">
          <h3 v-if="title" class="about-image-card__title">
            {{ title }}
          </h3>
          <p v-for="contentTxt in content" :key="contentTxt.id" class="about-image-card__content--txt">
            {{ contentTxt }}
          </p>
        </div>
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
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>
