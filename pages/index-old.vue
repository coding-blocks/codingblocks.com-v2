<template>
  <div class="a-cbm">
    <div class="landing-page">
      <!-- Welcome Section -->
      <WelcomeSection />

      <!-- Learn Section -->
      <div class="landing-page__section">
        <div class="row align-items-center no-gutters">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-black">LEARN.</div>
            <div class="heading-font">LEARN.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">Learning from the best!</div>
              <div class="mt-2 text-blue-light-1 heading-4">
                Mentors with <strong>100Yr+</strong> collective experience.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore our courses
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </button>
              <br class="d-sm-none d-block" />
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                Get career advice
              </button>
            </div>
          </div>
          <div class="col-12 d-lg-none d-block t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learn.svg"
              class="landing-page__section__vector"
            />
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learn.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>

      <!-- Practice Section -->
      <div class="landing-page__section">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-grey-dark-2">
              PRACTICE.
            </div>
            <div class="heading-font">PRACTICE.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_practice.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">For Developers, By Developers!</div>
              <div class="mt-2 text-pink-light-1 heading-4">
                Over <strong>5M+</strong> code submissions done.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore Hacker Blocks
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
                <br class="d-sm-none d-block" />
              </button>
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                View discuss forum
              </button>
            </div>
            <div class="col-12 d-lg-none d-block t-align-c">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/practice.svg"
                class="landing-page__section__vector"
              />
            </div>
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/practice.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>

      <!-- Hiring Section -->
      <div class="landing-page__section">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-black">GET HIRED.</div>
            <div class="heading-font">GET HIRED.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_hire.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">Land your dream job!</div>
              <div class="mt-2 text-green-light-1 heading-4">
                We have over <strong>200+</strong> hiring partners onboard.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore Hiring Blocks
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </button>
              <br class="d-sm-none d-block" />
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                View success stories
              </button>
            </div>
            <div class="col-12 d-lg-none d-block t-align-c">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/hire.svg"
                class="landing-page__section__vector"
              />
            </div>
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/hire.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>

      <!-- Community Section -->
      <!-- <CommunityAndSuperheroSection /> -->

      <!-- Events Section -->
      <div class="landing-page__section">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="flex-1">
            <div
              class="row no-gutters align-items-center justify-content-between"
            >
              <div class="flex-1">
                <div class="heading-font stroke-font text-black">LATEST</div>
                <div class="heading-font">EVENTS</div>
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_events.svg"
                />
              </div>
              <div
                class="col-xl-12 col-4 t-align-xl-l t-align-r d-sm-block d-none"
              >
                <button class="button-primary mt-xl-50">
                  View all
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                    class="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <CardCarousel>
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </CardCarousel>
          <div class="col-12 d-sm-none d-block">
            <button class="button-primary mt-50">
              View all
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                class="ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Colleges and Companies Section -->
      <CollegesAndCompaniesSection />

      <!-- News Section -->
      <div class="landing-page__section">
        <div class="row no-gutters justify-content-between align-items-center">
          <div class="flex-1 pr-5">
            <div class="heading-font stroke-font text-black">IN THE</div>
            <div class="heading-font">NEWS</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
            />
          </div>
          <CardCarousel>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </CardCarousel>
        </div>
      </div>

      <!-- Success Stories Section -->
      <SuccessStoriesSection />

      <!-- Help Section -->
      <HelpSection />

      <!-- Blogs Section -->
      <BlogsSection />

      <!-- Footer Section -->
      <Footer />
    </div>
  </div>
</template>

<script>
import WelcomeSection from "@/components/home/WelcomeSection.vue";
import CardCarousel from "@/components/misc/CardCarousel.vue";
import EventsCard from "@/components/misc/EventsCard.vue";
import NewsCard from "@/components/misc/NewsCard.vue";
import DividedSection from "@/components/misc/DividedSection.vue";
// import CommunityAndSuperheroSection from "@/components/home/CommunityAndSuperheroSection.vue";
import CollegesAndCompaniesSection from "@/components/home/CollegesAndCompaniesSection.vue";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection.vue";
import HelpSection from "@/components/courses/HelpSection.vue";
import BlogsSection from "@/components/home/BlogsSection";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    WelcomeSection,
    CardCarousel,
    EventsCard,
    NewsCard,
    DividedSection,
    // CommunityAndSuperheroSection,
    CollegesAndCompaniesSection,
    SuccessStoriesSection,
    HelpSection,
    BlogsSection,
    Footer,
  },
};
</script>
