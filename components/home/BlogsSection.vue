<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-md-l t-align-c">
          <div class="heading-font stroke-font">LATEST</div>
          <div class="heading-font">FROM THE BLOG</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_blog.svg"
          />
        </div>
        <div class="col-3 d-md-block d-none t-align-r">
          <button class="button-secondary">
            Read All Blogs
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
              class="ml-2"
            />
          </button>
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <div class="row no-gutters c-card-carousel-md">
          <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />
        </div>
      </div>
      <div class="d-md-none d-block mt-25 t-align-c">
        <button class="button-secondary">
          Read All Blogs
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '@/components/home/BlogCard.vue'

export default {
  data() {
    return {
      blogs: [
        {
          title: 'AI to take over jobs?',
          body:
            'Something just like this is hampering my head space and fucking up! Something just like this is hampering my head space and fucking up! Something just like this is hampering my head space and fucking up! Something just like this is hampering my head space and fucking up!',
          image: 'https://scx1.b-cdn.net/csz/news/800/2018/hack.jpg',
          link: '',
        },
      ],
    }
  },
  components: {
    BlogCard,
  },
}
</script>
