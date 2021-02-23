<template>
  <div class="card card--equal-height card--course" :class="theme">
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div
          class="s-90x90 br-5 p-15 all-center position-relative card--course__logo theme-background"
        >
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js_white.svg"
          />
          <div class="card--course__logo__tag">Beginner</div>
        </div>
      </div>
      <div class="t-align-r">
        <div class="font-2">Starting from</div>
        <div class="heading-4 bold">&#8377; 9499</div>
        <del class="font-4 text-grey-light-1">&#8377; 12999</del>
      </div>
    </div>
    <div>
      <div class="heading-5 theme-text bold mb-10">CODEWARS</div>
      <div class="row no-gutters align-items-center">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_unfilled.svg"
          class="mr-xl-10 mr-1"
        />
        <div class="font-3 text-grey ml-xl-10 ml-2 flex-1">
          <strong>4.15/5,</strong>&nbsp;65 ratings
        </div>
      </div>
    </div>
    <div class="mt-50">
      <div class="row no-gutters">
        <div>
          <div>NEXT BATCH</div>
          <div class="font-5 bold mt-2">12th Feb, Monday</div>
        </div>
      </div>
    </div>
    <div class="card__footer card__footer--border-highlight">
      <div class="flex-1 pr-15">
        <div class="font-4">
          <strong class="theme-text">1175+ </strong>
          Students Enrolled
        </div>
      </div>
      <button class="button-tertiary">
        Explore
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
          class="ml-2"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
};
</script>
