<template>
  <div class="about">
    <div class="about__oranle-ellipse">
      <v-img
        :src="require('@/assets/images/about/orangeEllipse.png')"
        :height="494"
        :width="403"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <AboutCard
          :header="aboutWorkImpact.header"
          :content="aboutWorkImpact.content"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="evolvingWorkforce.title"
          :content="evolvingWorkforce.content"
          :img="evolvingWorkforce.img"
          :img-height="342"
          :img-width="440"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="socialEnvironmental.title"
          :content="socialEnvironmental.content"
          :img="socialEnvironmental.img"
          :img-height="363"
          :img-width="479"
          :is-reverse="true"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="bringingTogether.title"
          :content="bringingTogether.content"
          :img="bringingTogether.img"
          :img-height="415"
          :img-width="415"
          :description="bringingTogether.description"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutSignUp
          :title="signUpTitle"
        />
      </v-flex>
    </v-layout>
    <div class="about__blue-ellipse hidden-sm-and-down">
      <v-img
        :src="require('@/assets/images/about/blueEllipse.png')"
        :height="292"
        :width="233"
      />
    </div>
  </div>
</template>

<script>
import evolvingImg from '@/assets/images/about/evolvingImg.png';
import wild from '@/assets/images/about/wild.png';
import multiCircle from '@/assets/images/about/multiCircle.png';
import AboutCard from '@/components/about/AboutCard';
import AboutImageCard from '@/components/about/AboutImageCard';
import AboutSignUp from '@/components/about/AboutSignUp';

export default {
  name: 'About',
  components: {
    AboutCard,
    AboutImageCard,
    AboutSignUp
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
        title: 'The Evolving Workforce',
        content: [
          'The way people are working is changing. Thanks to technology, geography is no longer a barrier that determines who you can and can’t work with. As a result, over a third of the world’s workforce is now freelancing, and this number is continually growing.',
          'The opportunities for today’s workforce are endless, and more and more people are taking advantage of the new gig economy in order to pursue their interests and find projects they’re passionate about around the globe.'
        ]
      },
      socialEnvironmental: {
        img: wild,
        title: 'Social and Environmental Awareness is on the Rise',
        content: [
          'More than ever before, organizations are considering their effect on the world as a whole and are looking for ways to make a difference. Companies are adopting social and environmental programs, and nonprofits promoting a wide range of amazing causes are on the rise.',
          'Never have there been more projects aimed at changing the world for the better. But these initiatives need the right people in order to reach their full potential.'
        ]
      },
      bringingTogether: {
        img: multiCircle,
        title: 'Bringing it All Together',
        content: [
          'Trends don’t lie. Today’s workers aren’t just looking to get paid. They’re looking for work with a purpose. They want to make an IMPACT.',
          ' Combine this with a growing and talented freelancer base and you have a workforce that is able and eager to get involved in all kinds of positive initiatives.',
          'The Work for Impact platform is designed to connect this workforce with impactful organizations. We believe that by pairing the right people with the right project, we can start fostering positive change throughout the world.'
        ],
        description: 'Remember, when we all work together anything is possible.'
      },
      signUpTitle: 'Sign up as a client or freelancer today'
    };
  }
};
</script>
