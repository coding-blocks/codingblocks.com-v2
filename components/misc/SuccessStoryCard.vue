<template>
  <div class="card card--equal-height">
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div class="s-80x80 round">
          <img :src="story.img" />
        </div>
      </div>
      <div class="t-align-r">
        <div class="font-2 text-grey bold mb-10">Placed at</div>
        <img :src="story.company_logo" style="height: 40px" />
      </div>
    </div>
    <div>
      <div class="heading-5 bold mb-1">{{ story.title }}</div>
      <div class="font-3 text-orange mb-20">{{ story.college }}</div>
      <div class="font-4">
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
