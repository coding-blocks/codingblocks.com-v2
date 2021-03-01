<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="mt-sm-50 mt-25">
        <CardCarousel>
          <MajorSuccessStoryCard
            :story="story"
            v-for="(story, index) in stories"
            :key="index"
          />
        </CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import MajorSuccessStoryCard from '@/components/testimonials/MajorSuccessStoryCard.vue'

export default {
  data() {
    return {
      stories: [
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link:
            'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1',
        },
        {
          story_title: 'Bipin placed at Tesla, 90LPA',
          story_subtitle: '(B.Tech | IT, MAIT)',
          description:
            'Hi, I am Nilesh from Delhi technology university. I have done competitive boot camp from coding blocks. This gave me a great exposure to problem solving mindset and helped me crack Apple interview. Thanks to Coding blocks!',
          image_link:
            'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1',
        },
      ],
    }
  },
  components: {
    CardCarousel,
    MajorSuccessStoryCard,
  },
}
</script>
