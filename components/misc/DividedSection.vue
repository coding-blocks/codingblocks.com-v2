<template>
  <div class="landing-page__section landing-page__section--divided-section">
    <div class="row">
      <div
        class="col-lg-6 col-12 landing-page__section--divided-section__left-section"
      >
        <slot name="left_section"></slot>
      </div>
      <div class="divider-h d-lg-none d-block my-50"></div>
      <div
        class="col-lg-6 col-12 landing-page__section--divided-section__right-section"
      >
        <slot name="right_section"></slot>
      </div>
    </div>
  </div>
</template>
