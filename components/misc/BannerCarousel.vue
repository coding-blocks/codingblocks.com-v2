<template>
  <div class="slideshow-container mt-50" id="slideshow-container">
    <div v-if="banner.length"
      class="slideshow-container__slide p-xl-100 p-lg-75 p-md-50 p-sm-40 p-25 pb-100"
      :class="banner[0].bg_color"
    >
      <div class="row align-items-center no-gutters">
        <div class="col-xl-6 col-lg-8 z-pos t-align-lg-l t-align-c">
          <div
            class="br-5 d-inline-block p-2 bg-gradient-orange-light mb-10 font-4 white"
          >
            {{banner[0].tag}}
          </div>
          <div class="heading-font stroke-font stroke-font--white">
            {{banner[0].heading1}}
          </div>
          <div class="heading-font white">
            {{banner[0].heading2}}
          </div>
          <img
          
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
          />
          <img
            :src="banner[0].img_url"
            class="d-lg-none d-block"
          />
          <div class="my-50">
            <div class="heading-2 bold text-orange">
              {{banner[0].tagline}}
            </div>
            <div class="mt-2 white heading-5">
              {{banner[0].subText}}
            </div>
          </div>
          <div>
            <button class="button-primary">
              {{banner[0].cta}}
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

<script>
export default {

  mounted() {
    var sliderContainer = document.getElementById("slideshow-container");
    var slideIndex = 1;

    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n + 1));
    }

    window.currentSlide = currentSlide;

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName(
        "slideshow-container__slide"
      );
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

    var prev = sliderContainer.getElementsByClassName(
      "slideshow-container__prev"
    )[0];
    var next = sliderContainer.getElementsByClassName(
      "slideshow-container__next"
    )[0];

    prev.addEventListener("click", function() {
      plusSlides(-1);
    });
    next.addEventListener("click", function() {
      plusSlides(1);
    });

    [...sliderContainer.getElementsByClassName("dot")].forEach(function(
      dot,
      i
    ) {
      dot.addEventListener("click", function() {
        window.currentSlide(i);
      });
    });
  },
  data(){
    return {
      banner: [],
      courses:[]
    }
  },
  async fetch(){
    this.banner = await this.$repositories.home.banners();
    this.courses = await this.$repositories.home.fetchCourses();
  }
};
</script>
