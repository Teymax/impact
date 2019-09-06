<template>
  <div class="how-it-works">
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <TopCard
          :header="howItWorksF.header"
          :content="howItWorksF.content"
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

import profileImg from '@/assets/images/howItWorks/freelancers/profileImg.png';
import applyForJobsImg from '@/assets/images/howItWorks/freelancers/applyForJobsImg.png';
import getHiredImg from '@/assets/images/howItWorks/freelancers/getHiredImg.png';
import startWorkingImg from '@/assets/images/howItWorks/freelancers/startWorkingImg.png';
import getPaidImg from '@/assets/images/howItWorks/freelancers/getPaidImg.png';

export default {
  name: 'freelancers',
  components: {
    TopCard,
    HowItWorksCard
  },
  data: () => ({
    howItWorksF: {
      header: 'How it Works for Freelancers',
      content: [
        'Are you a talented freelancer who’s looking for projects that will make a difference? Work for Impact offers paid freelance jobs solely from socially, environmentally responsible and nonprofit organizations.'
      ]
    },
    cards: [
      {
        header: 'Create Your Profile',
        description: 'When you sign up for Work for Impact, you’ll be able to customize your profile to let potential clients know your skills, qualifications, interests, and more.',
        img: profileImg,
        imgHeight: 351,
        imgWidth: 488,
        content: [
          {
            title: 'Your Bio:',
            text: 'Describe your background, including your education, work history, and any other information organizations should know.'
          },
          {
            title: 'Verify Your Skills:',
            text: 'Take Work for Impact’s unique verification tests so you can show off your skills to clients.'
          },
          {
            title: 'Items:',
            text: 'Upload Portfolio Items: Upload samples of your previous work and display them on your profile.'
          }
        ]
      },
      {
        header: 'Apply for Jobs',
        description: 'Once your profile is completed, you’re ready to start looking for new and exciting projects.',
        img: applyForJobsImg,
        imgHeight: 369,
        imgWidth: 403,
        content: [
          {
            title: 'Filter Available Jobs:',
            text: 'Use a variety of different filters to find jobs that match your skills, experience, and desired pay.'
          },
          {
            title: 'Find Jobs You’re Passionate About:',
            text: 'Search for jobs that support causes you’re interested in.'
          },
          {
            title: 'Submit Proposals:',
            text: 'Once you find a project you’re interested in, answer the required questions and submit a cover letter.'
          }
        ],
        isReverse: true
      },
      {
        header: 'Get Hired',
        description: 'After your proposals have been submitted, you’ll be able to speak with clients who are interested in your services.',
        img: getHiredImg,
        imgHeight: 319,
        imgWidth: 480,
        content: [
          {
            title: 'Get Notified of Potential Jobs:',
            text: 'Recieve notifications if clients want to speak to you further about a potential job.'
          },
          {
            title: 'Set-Up Interview:',
            text: 'Use Work for Impact’s built-in chat and video call functionality to schedule and conduct interviews with clients.'
          },
          {
            title: 'Receive Job Offers:',
            text: 'Job offers will be sent to you through the site, which you can either accept or decline.'
          }
        ]
      },
      {
        header: 'Start Working',
        description: 'Work for Impact’s custom workspace allows you to easily collaborate with clients.',
        img: startWorkingImg,
        imgHeight: 400,
        imgWidth: 371,
        content: [
          {
            title: 'Share Files:',
            text: 'Recieve and share files that are necessary to complete the project.'
          },
          {
            title: 'Give Updates:',
            text: 'Provide clients with updates on your work to let them know that everything is on schedule.'
          },
          {
            title: 'Receive Feedback on Your Work:',
            text: 'Quickly and easily receive feedback on completed tasks to allow you to make any necessary changes.'
          }
        ],
        isReverse: true
      },
      {
        header: 'Get Paid',
        description: 'Once the client has approved your work you’ll receive prompt and timely payment, thanks to our payment protection services.',
        img: getPaidImg,
        imgHeight: 319,
        imgWidth: 471,
        content: [
          {
            title: 'Choose Your Preferred Payment Method:',
            text: 'Get paid via direct deposit, PayPal, or wire transfer.'
          },
          {
            title: 'Always Get Paid:',
            text: 'Our payment protection services help ensure you get paid for all projects you complete successfully.'
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
