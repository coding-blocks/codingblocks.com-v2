<template>
  <div class="col-12 carousel__slide">
    <div
      class="success-story row no-gutters align-items-center justify-content-between t-align-sm-l t-align-c h-100"
    >
      <div class="col-12 d-md-none d-block mb-40">
        <div class="row no-gutters align-items-center">
          <div class="col-sm-6 col-12 mb-sm-none mb-40">
            <img :src="story.img" class="success-story__image" />
          </div>
          <div class="flex-1 pl-sm-20">
            <div
              class="heading-2 bold text-orange mb-3 text-clamp-ellipses text-clamp-ellipses--3"
            >
              {{ `${story.name} placed at ${story.company_name}` }}
            </div>
            <div class="heading-4 bold">{{ story.subtitle }}</div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="d-md-block d-none">
          <div
            class="heading-2 bold text-orange mb-3 text-clamp-ellipses text-clamp-ellipses--3"
          >
            {{ `${story.name} placed at ${story.company_name}` }}
          </div>
          <div class="heading-4 bold mb-40">
            {{ story.subtitle }}
          </div>
        </div>
        <div class="heading-5 text-grey">
          {{ story.body }}
        </div>
      </div>
      <img
        :src="story.img"
        class="success-story__image d-md-block d-none ml-lg-50 ml-md-30"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['story'],
}
</script>

<style scoped>
.success-story__image {
  margin-right: 0 !important;
}
</style>
