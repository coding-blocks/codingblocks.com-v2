<template>
  <div class="row align-items-center justify-content-between no-gutters">
    <div class="flex-1 pr-xl-75 pr-25 d-lg-block d-none">
      <div class="heading-3 bold text-grey mb-30">
        Become a
        <div
          class="d-inline-block text-black underline-highlight underline-highlight--gradient-orange"
        >
          {{ goalsList[careerNumber] }}
        </div>
      </div>
      <div class="heading-font stroke-font">LEARN THE MOST</div>
      <div class="heading-font">WANTED SKILLS.</div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
      />
      <div class="mt-30 mb-40">
        <div class="row no-gutters align-items-center">
          <button class="button-primary">Get Started</button>
          <div class="ml-30 heading-5 text-grey">Learn. Practice. Ace.</div>
        </div>
      </div>
      <div class="mini-banner position-relative br-5" v-if="miniBanner">
        <img :src="miniBanner.img_url" style="height: 110px" />
        <div class="mini-banner__tag">
          <div class="font-2">{{ miniBanner.tag }}</div>
        </div>
      </div>
    </div>
    <div class="col-12 d-lg-none d-block t-align-c">
      <div class="heading-3 bold text-grey mb-30">
        Become a
        <div
          class="d-inline-block text-black underline-highlight underline-highlight--gradient-orange"
        >
          {{ goalsList[careerNumber] }}
        </div>
      </div>
      <div class="heading-font stroke-font">LEARN THE MOST</div>
      <div class="heading-font">WANTED SKILLS.</div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
      />
      <div class="t-align-c" style="margin: 0 -2.5rem">
        <Universe size="small" />
        <div class="heading-6 mt-30">Helping people get their dream job.</div>
        <button class="button-tertiary mt-10">
          View all our Alumni
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </button>
      </div>
      <div class="mt-30 mb-40">
        <div class="mb-15">
          <div class="heading-5 text-grey d-xl-none d-block">
            Learn. Practice. Ace.
          </div>
        </div>
        <div class="row no-gutters align-items-center justify-content-center">
          <button class="button-primary">Get Started</button>
          <div class="ml-30 heading-5 text-grey d-xl-block d-none">
            Learn. Practice. Ace.
          </div>
        </div>
      </div>
      <div class="mini-banner position-relative br-5">
        <div class="bg-purple br-5" style="height: 110px"></div>
        <div class="mini-banner__tag">
          <div class="font-2">Offer valid till 30th Jan</div>
        </div>
      </div>
    </div>
    <div class="t-align-c mx-auto d-lg-block d-none">
      <Universe />
      <div class="heading-6 mt-30">Helping people get their dream job.</div>
      <button class="button-tertiary mt-10">
        View all our Alumni
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
          class="ml-2"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Universe from '@/components/home/Universe.vue'

export default {
  data() {
    return {
      careerNumber: 0,
      goalsList: [
        'App Developer',
        'Web Developer',
        'Data Scientist',
        'Competitive Programmer',
      ],
      miniBanner: null,
    }
  },
  mounted() {
    setInterval(() => {
      if (this.careerNumber < this.goalsList.length - 1) {
        this.careerNumber++
      } else {
        this.careerNumber = 0
      }
    }, 2000)
  },
  components: {
    Universe,
  },
  async fetch() {
    this.miniBanner = await this.$repositories.home.miniBanner()
  },
}
</script>

<style scoped>
.underline-highlight {
  transition: all 500ms ease-in-out;
}
</style>
