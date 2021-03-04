<template>
  <div class="col-12">
    <div
      class="success-story row no-gutters align-items-center justify-content-between t-align-sm-l t-align-c"
    >
      <div class="col-12 d-md-none d-block mb-40">
        <div class="row no-gutters align-items-center">
          <div class="col-sm-6 col-12 mb-sm-none mb-40">
            <img :src="story.image_link" class="success-story__image" />
          </div>
          <div class="flex-1 pl-20">
            <div class="heading-2 bold text-orange mb-3">
              {{ story.story_title }}
            </div>
            <div class="heading-4 bold">{{ story.story_subtitle }}</div>
          </div>
        </div>
      </div>
      <img
        :src="story.image_link"
        class="success-story__image d-md-block d-none"
      />
      <div class="flex-1">
        <div class="d-md-block d-none">
          <div class="heading-2 bold text-orange mb-3">
            {{ story.story_title }}
          </div>
          <div class="heading-4 bold mb-40">
            {{ story.story_subtitle }}
          </div>
        </div>
        <div class="heading-5 text-grey">
          {{ story.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['story'],
}
</script>
