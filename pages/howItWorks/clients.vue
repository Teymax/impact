<template>
  <div class="how-it-works">
    <div class="how-it-works__oranle-ellipse--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1368"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="how-it-works__oranle-ellipse--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1771"
        :width="1797"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="how-it-works__oranle-ellipse--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1368"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4 class="text-lg-center text-xs-center">
        <TopCard
          :header="howItWorksC.header"
          :content="howItWorksC.content"
        />
      </v-flex>
      <v-flex v-for="(card, index) in cards" :key="card.id" xs11 grow pa-4>
        <HowItWorksCard
          :card-number="index+1"
          :header="card.header"
          :description="card.description"
          :img="card.img"
          :img-height="card.imgHeight"
          :img-width="card.imgWidth"
          :content="card.content"
          :is-reverse="card.isReverse"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TopCard from '@/components/general/TopCard';
import HowItWorksCard from '@/components/howItWorks/HowItWorksCard';

import profileImg from '@/assets/images/howItWorks/clients/profileImg.png';
import postJobImg from '@/assets/images/howItWorks/clients/postJobImg.png';
import hireFreelancersImg from '@/assets/images/howItWorks/clients/hireFreelancersImg.png';
import getToWorkImg from '@/assets/images/howItWorks/clients/getToWorkImg.png';
import makePaymentsImg from '@/assets/images/howItWorks/clients/makePaymentsImg.png';

export default {
  name: 'Clients',
  components: {
    TopCard,
    HowItWorksCard
  },
  data: () => ({
    howItWorksC: {
      header: 'How it Works for Clients',
      content: [
        'Are you a socially and environmentally responsible business, or a nonprofit organization? Work for Impact can help you find the right freelancers so you can bring your projects to life.'
      ]
    },
    cards: [
      {
        header: 'Create Your Profile',
        description: 'When you sign up for Work for Impact, you’ll be able to customize your profile to let freelancers know more about your organization and what you stand for.',
        img: profileImg,
        imgHeight: 389,
        imgWidth: 465,
        content: [
          {
            title: 'Profile Picture:',
            text: 'Upload a photo or logo to personalize your profile.'
          },
          {
            title: 'About Your Organization:',
            text: 'Write a brief summary of your organization, explaining who you are and what you do.'
          },
          {
            title: 'Identify Your Causes:',
            text: 'Does your organization support any specific causes? (Animal rights, poverty, clean drinking water etc.) Include those here.'
          }
        ]
      },
      {
        header: 'Post Your Job',
        description: 'Once your profile is completed, you’re ready to advertise any available jobs you have to our pool of talented freelancers.',
        img: postJobImg,
        imgHeight: 326,
        imgWidth: 481,
        content: [
          {
            title: 'Describe Your Job:',
            text: 'Outline what the job is, the various tasks involved, and what you hope to achieve.'
          },
          {
            title: 'Define Your Requirements:',
            text: 'Describe the specific skills and types of experience you’re looking for.'
          },
          {
            title: 'Set Your Budget:',
            text: 'Decide on a budget and whether you want to pay per-hour or per-project.'
          }
        ],
        isReverse: true
      },
      {
        header: 'Hire Freelancers',
        description: 'After your job is posted you’ll be able to start evaluating potential candidates.',
        img: hireFreelancersImg,
        imgHeight: 312,
        imgWidth: 515,
        content: [
          {
            title: 'Review Freelancers:',
            text: 'Compare freelancers’ bids, proposals, skills, and experience levels to determine suitable applicants.'
          },
          {
            title: 'Interview Candidates:',
            text: 'Use Work for Impact’s built-in chat and video call functionality to interview freelances who you think would be a good fit.'
          },
          {
            title: 'Hire Your Freelancer:',
            text: 'Award the contract to the freelancer who you feel is most qualified.'
          }
        ]
      },
      {
        header: 'Get to Work',
        description: 'Work for Impact’s custom workspace allows you to easily collaborate with freelancers.',
        img: getToWorkImg,
        imgHeight: 304,
        imgWidth: 501,
        content: [
          {
            title: 'Share Files:',
            text: 'Upload and share any necessary files required for your freelancer to get started.'
          },
          {
            title: 'Track Job Progress:',
            text: 'Get updates on the progress of your project to ensure tasks are being completed on schedule.'
          },
          {
            title: 'Give Feedback:',
            text: 'Review completed work and leave notes and instructions for any necessary revisions.'
          }
        ],
        isReverse: true
      },
      {
        header: 'Make Payments',
        description: 'When your project has been completed you’ll be able to pay your freelancer safely and securely.',
        img: makePaymentsImg,
        imgHeight: 336,
        imgWidth: 452,
        content: [
          {
            title: 'Only Pay for Work You Authorize:',
            text: 'You will only be required to pay for work once it’s been approved by you.'
          },
          {
            title: 'Choose Your Preferred Payment Method:',
            text: 'Pay your freelancer via MasterCard, Visa, American Express, Discover, or PayPal.'
          },
          {
            title: 'Access Invoices and Payment History:',
            text: 'Download invoices and access your complete payment history at any time.'
          }
        ]
      }
    ]
  })
};
</script>
