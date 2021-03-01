<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div class="width-limiter">
      <CardCarousel class="card">
        <MajorSuccessStoryCard
          :story="story"
          v-for="(story, index) in majorStories"
          :key="index"
        />
      </CardCarousel>

      <div class="mt-sm-100 mt-50">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 h-inherit mb-sm-50 mb-30"
            v-for="(story, index) in otherStories"
            :key="index"
          >
            <SuccessStoryCard :story="story" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import MajorSuccessStoryCard from '@/components/testimonials/MajorSuccessStoryCard.vue'
import SuccessStoryCard from '@/components/misc/SuccessStoryCard.vue'

export default {
  data() {
    return {
      majorStories: [
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
      ],
      otherStories: [
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          company_logo:
            'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
          student_name: 'Bipin',
          company_name: 'Target',
          student_college: 'IITD',
        },
      ],
    }
  },
  components: {
    CardCarousel,
    MajorSuccessStoryCard,
    SuccessStoryCard,
  },
}
</script>
