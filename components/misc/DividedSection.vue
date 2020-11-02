<template>
  <div class="landing-page__section landing-page__section--divided-section">
    <div class="row c-card-carousel-lg">
      <div
        class="col-lg-6 col-12 landing-page__section--divided-section__left-section"
      >
        <slot name="left_section"></slot>
      </div>
      <div
        class="col-lg-6 col-12 landing-page__section--divided-section__right-section"
      >
        <slot name="right_section"></slot>
      </div>
    </div>
  </div>
</template>
