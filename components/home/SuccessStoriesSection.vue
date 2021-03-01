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
            story_title="Nilesh placed at Apple, 72LPA"
            story_subtitle="(B.Tech | ME, DTU)"
            description="Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!"
            image_link="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1"
          />
          <SuccessStory
            story_title="Bipin placed at Tesla, 90LPA"
            story_subtitle="(B.Tech | IT, MAIT)"
            description="Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!"
            image_link="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1"
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
  components: {
    CardCarousel,
    SuccessStory,
  },
}
</script>
