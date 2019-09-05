<template>
  <div class="about">
    <v-layout justify-center align-center>
      <v-flex xs9>
        <card
          :header="aboutWorkImpact.header"
          :content="aboutWorkImpact.content"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Card from '@/components/about/Card';

export default {
  name: 'About',
  components: {
    Card
  },
  data() {
    return {
      aboutWorkImpact: {
        header: 'About Work for Impact',
        content: [
          'Work for Impact is a freelance platform designed specifically for socially, environmentally responsible and nonprofit organizations. We offer businesses access to a talented workforce, and provide exciting paid work opportunities to freelancers.',
          'By connecting these organizations with skilled individuals, we aim to bring life to meaningful projects that will have a positive impact on our world.'
        ]
      }
    };
  }
};
</script>

<style scoped>

</style>
