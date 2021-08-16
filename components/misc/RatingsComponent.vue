<template>
  <div class="row no-gutters align-items-center">
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
      class="mr-xl-10 mr-1"
      v-for="(num, index1) in numberPositiveStars"
      :key="index1"
    />
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_unfilled.svg"
      class="mr-xl-10 mr-1"
      v-for="num in numberNegativeStars"   
      />
    <div class="font-3  ml-xl-10 ml-2 flex-1">
      <strong>{{ rating }}/5,</strong>
      &nbsp;
      {{ num_ratings }}
      ratings
    </div>
  </div>
</template>

<script>
export default {
  props: ['rating', 'num_ratings'],
  computed: {
    numberPositiveStars() {
      return Math.floor(this.rating)
    },
    numberNegativeStars() {
      return 5 - this.numberPositiveStars
    },
  },
}
</script>
