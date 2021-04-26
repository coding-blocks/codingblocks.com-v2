<template>
  <div class="card card--equal-height justify-content-start">
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div class="s-80x80 round">
          <img :src="story.img" />
        </div>
      </div>
      <div class="t-align-r">
        <div class="font-2 text-grey bold mb-10">Placed at</div>
        <img :src="story.company.logo" style="width: 60px" />
      </div>
    </div>
    <div>
      <div
        class="heading-5 bold mb-1 text-clamp-ellipses text-clamp-ellipses--2"
      >
        {{ `${story.name} placed at ${story.company.name}` }}
      </div>
      <div class="font-3 text-orange mb-20">{{ story.college }}</div>
      <div class="font-4 text-clamp-ellipses-description">
        {{ story.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['story'],
}
</script>

<style scoped>
.text-clamp-ellipses-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 8;
}
</style>
