<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 pr-xl-40 pr-lg-20 t-align-lg-l t-align-c">
          <div class="heading-font stroke-font">
            IN THE
          </div>
          <div class="heading-font">
            NEWS
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
          />
        </div>
        <div class="col-lg-9 mt-lg-none mt-50">
          <CardCarousel>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </CardCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from "@/components/misc/CardCarousel.vue";
import NewsCard from "@/components/misc/NewsCard.vue";

export default {
  components: {
    CardCarousel,
    NewsCard,
  },
};
</script>
