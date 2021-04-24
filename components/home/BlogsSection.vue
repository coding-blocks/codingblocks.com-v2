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
          <a
            class="button-primary"
            href="https://blog.codingblocks.com/"
            target="_blank"
          >
            Read All Blogs
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
              class="ml-2"
            />
          </a>
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <div class="row no-gutters c-card-carousel-md">
          <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />
        </div>
      </div>
      <div class="d-md-none d-block mt-25 t-align-c">
        <a
          class="button-primary"
          href="https://blog.codingblocks.com/"
          target="_blank"
        >
          Read All Blogs
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </a>
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
          title: 'Machine Learning Predictions for 2021',
          body:
            'The greatest benefit of machine learning may ultimately be not what the machines learn but what we learn by teaching them.',
          image:
            'https://blog.codingblocks.com/content/images/size/w2000/2021/04/ml-predictions-2021.jpg',
          link:
            'https://blog.codingblocks.com/2021/machine-learning-predictions-for-2021/',
        },
        {
          title: 'A thorough guide to Android Development for Beginners',
          body:
            'In the 21st century, mobile applications have become quite a significant enabler of global engagement in various creative ways.',
          image:
            'https://blog.codingblocks.com/content/images/size/w2000/2020/08/Android-Blog.jpg',
          link:
            'https://blog.codingblocks.com/2020/a-thorough-guide-to-android-development-for-beginners/',
        },
        {
          title: 'A thorough guide to C++ for Beginners',
          body:
            'Whenever a tech-enthusiast thinks of exploring the field of programming, the first major question is about the language s/he should learn.',
          image:
            'https://blog.codingblocks.com/content/images/size/w2000/2020/07/c---guide.jpg',
          link:
            'https://blog.codingblocks.com/2020/a-thorough-guide-to-c-for-beginners/',
        },
      ],
    }
  },
  components: {
    BlogCard,
  },
}
</script>
