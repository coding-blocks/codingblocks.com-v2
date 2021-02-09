<template>
  <div class="slideshow-container mt-50" id="slideshow-container">
    <div
      class="slideshow-container__slide bg-purple-dark-2 p-xl-100 p-lg-75 p-md-50 p-sm-40 p-25 pb-100"
    >
      <div class="row align-items-center no-gutters">
        <div class="col-xl-6 col-lg-8 z-pos t-align-lg-l t-align-c">
          <div
            class="br-5 d-inline-block p-2 bg-gradient-orange-light mb-10 font-4 white"
          >
            New
          </div>
          <div class="heading-font stroke-font stroke-font--white">
            INDUSTRIAL.
          </div>
          <div class="heading-font white">
            TRAINING.
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
          />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/light-theme-vector.svg"
            class="d-lg-none d-block"
          />
          <div class="my-50">
            <div class="heading-2 bold text-orange">
              Get flat 50% off!
            </div>
            <div class="mt-2 white heading-5">
              Use Code - <strong>MONSOON</strong> | Valid till 01 Aug, 2020.
            </div>
          </div>
          <div>
            <button class="button-primary">
              Explore Now
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                class="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/light-theme-vector.svg"
        class="landing-page__section__vector d-lg-block d-none"
      />
    </div>

    <a class="slideshow-container__prev pulse" onclick="plusSlides(-1)">
      <span>&#10094;</span>
    </a>
    <a class="slideshow-container__next pulse" onclick="plusSlides(1)">
      <span>&#10095;</span>
    </a>

    <div class="slideshow-container__navigation-dots">
      <span class="dot" onclick="currentSlide(0)"></span>
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
    </div>
  </div>
</template>
