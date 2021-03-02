<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-lg-l t-align-c">
          <div class="heading-font stroke-font">HALL OF FAME</div>
          <div class="heading-font">SUCCESS STORIES</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_success.svg"
          />
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <CardCarousel>
          <SuccessStory
            :story="story"
            v-for="(story, index) in majorStories"
            :key="index"
          />
        </CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import SuccessStory from '@/components/misc/SuccessStory.vue'

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
    }
  },
  components: {
    CardCarousel,
    SuccessStory,
  },
}
</script>
