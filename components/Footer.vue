<template>
  <div
    class="landing-page__section landing-page__section--footer bg-grey-light-3"
  >
    <div class="width-limiter">
      <div
        class="row no-gutters pb-50"
        style="border-bottom: 1px solid #cccccc"
      >
        <div
          class="col-lg-9 col-12 pr-lg-20 pb-lg-none pb-50 landing-page__section--footer__main-section"
        >
          <div class="row no-gutters">
            <div class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
              <div class="flex-col justify-content-between h-100">
                <div class="font-4 bold w-100">PRODUCTS</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a href="https://online.codingblocks.com/" class="font-4">
                      Online Coding Blocks
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://hack.codingblocks.com/" class="font-4">
                      Hacker Blocks
                    </a>
                  </div>
                  <div class="mb-30">
                    <a
                      href="https://hire.codingblocks.com/applicants"
                      class="font-4"
                    >
                      Hiring Blocks
                    </a>
                  </div>
                  <div>
                    <a href="https://ide.codingblocks.com/" class="font-4">
                      Online IDE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
              <div class="flex-col justify-content-between h-100">
                <div class="font-4 bold w-100">COMPANY</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <NuxtLink to="/company" class="font-4">About Us</NuxtLink>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/company" class="font-4">
                      Meet the Team
                    </NuxtLink>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/testimonials" class="font-4">
                      Success Stories
                    </NuxtLink>
                  </div>
                  <!-- <div class="mb-30">
                    <a href="#" class="font-4">Become a TA/Mentor</a>
                  </div> -->
                  <div>
                    <a href="https://blog.codingblocks.com/" class="font-4">
                      Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50"
            >
              <div class="flex-col justify-content-between h-100">
                <div class="font-4 bold w-100">RESOURCES</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a
                      href="https://www.youtube.com/channel/UCICWIYEx2mo4wYZzLwJ7wVw"
                      class="font-4"
                    >
                      Watch Youtube Videos
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://blog.codingblocks.com/" class="font-4">
                      Blogs
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://t.me/CodingBlocksIN" class="font-4">
                      Telegram Channel
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="#" class="font-4">Study Material</a>
                  </div>
                  <div>
                    <a href="#" class="font-4" v-on:click="setShowModal(true)">
                      Career Advice
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50"
            >
              <div class="flex-col justify-content-between h-100">
                <div class="font-4 bold w-100">COMMUNITY</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a
                      href="https://superhero.codingblocks.com/"
                      class="font-4"
                    >
                      Campus Ambassador
                    </a>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/events" class="font-4">
                      Events and Workshops
                    </NuxtLink>
                  </div>
                  <div class="mb-30">
                    <a
                      href="http://boss.codingblocks.com/"
                      target="_blank"
                      class="font-4"
                    >
                      BOSS 2020
                    </a>
                  </div>
                  <div>
                    <a href="https://ide.codingblocks.com/" class="font-4">
                      Online IDE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12 mt-lg-none mt-50 pl-xl-70 pl-lg-50">
          <div class="row no-gutters">
            <div class="col-lg-12 col-sm-6 col-12 mb-lg-50">
              <div class="bold font-4 mb-sm-40 mb-30">CONTACT</div>
              <div class="font-4 mb-lg-30 mb-sm-20 mb-15">
                admissionscodingblocks.com
              </div>
              <div class="font-4">1800 274 4504</div>
            </div>
            <div class="col-lg-12 col-sm-6 col-12 mt-sm-none mt-50">
              <div class="bold font-4 mb-sm-40 mb-30">TECHNICAL SUPPORT</div>
              <div class="font-4 mb-lg-30 mb-sm-20 mb-15">
                supportcodingblocks.com
              </div>
              <div class="font-4">+91 964 333 9747</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row no-gutters align-items-center justify-content-sm-between justify-content-center mt-50"
      >
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cblogo-black.png"
          style="height: 90px"
        />
        <div
          class="flex-1 t-align-xl-c t-align-r pl-xl-none pl-20 d-sm-block d-none"
        >
          <div class="font-4 mb-10">
            <a href="/privacypolicy.html">Privacy Policy</a>
            |
            <a href="/tos.html">Terms of Service</a>
          </div>
          <div class="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
        </div>
        <div class="col-12 t-align-c d-sm-none d-block mt-50">
          <div class="font-4 mb-10">
            <a href="/privacypolicy.html">Privacy Policy</a>
            |
            <a href="/tos.html">Terms of Service</a>
          </div>
          <div class="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
        </div>
        <div
          class="row no-gutters align-items-center justify-content-end d-xl-flex d-none"
        >
          <a href="https://cb.lk/twon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/twitter-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/fbon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/facebook-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/inon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/instagram-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/lion">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/linkedin-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/yton">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/ghon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/github-black.svg"
            />
          </a>
        </div>
      </div>
      <div
        class="row no-gutters align-items-center justify-content-center d-xl-none d-flex mt-50"
      >
        <a href="https://cb.lk/twon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/twitter-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/fbon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/facebook-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/inon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/instagram-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/lion">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/linkedin-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/yton">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/ghon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/github-black.svg"
          />
        </a>
      </div>
    </div>
    <ModalForm v-if="showModal" @close="setShowModal(false)">
      <ConsultationForm />
    </ModalForm>
  </div>
</template>

<script>
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    ModalForm,
    ConsultationForm,
  },
  methods: {
    setShowModal(value) {
      this.showModal = value
    },
  },
}
</script>

<style scoped>
fieldset {
  border: none !important;
  margin: 0 !important;
}
</style>
