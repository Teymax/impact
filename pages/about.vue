<template>
  <div class="about">
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <card
          :header="aboutWorkImpact.header"
          :content="aboutWorkImpact.content"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <image-card
          :title="evolvingWorkforce.title"
          :content="evolvingWorkforce.content"
          :img="evolvingWorkforce.img"
          :img-height="342"
          :img-width="440"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import evolvingImg from '@/assets/images/about/evolvingImg.png';
import Card from '@/components/about/Card';
import imageCard from '@/components/about/imageCard';

export default {
  name: 'About',
  components: {
    Card, imageCard
  },
  data() {
    return {
      aboutWorkImpact: {
        header: 'About Work for Impact',
        content: [
          'Work for Impact is a freelance platform designed specifically for socially, environmentally responsible and nonprofit organizations. We offer businesses access to a talented workforce, and provide exciting paid work opportunities to freelancers.',
          'By connecting these organizations with skilled individuals, we aim to bring life to meaningful projects that will have a positive impact on our world.'
        ]
      },
      evolvingWorkforce: {
        img: evolvingImg,
        title: 'The Evolving Workforce ',
        content: [
          'The way people are working is changing. Thanks to technology, geography is no longer a barrier that determines who you can and can’t work with. As a result, over a third of the world’s workforce is now freelancing, and this number is continually growing.',
          'The opportunities for today’s workforce are endless, and more and more people are taking advantage of the new gig economy in order to pursue their interests and find projects they’re passionate about around the globe.'
        ]
      }
    };
  }
};
</script>
