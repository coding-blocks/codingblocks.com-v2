<template>
  <DividedSection>
    <template v-slot:left_section>
      <div class="t-align-lg-l t-align-c">
        <div class="heading-font stroke-font">PITAMPURA</div>
        <div class="heading-font">PITAMPURA</div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_colleges.svg"
        />
        <div class="my-sm-50 my-25">
          <a href="https://g.page/coding-blocks?share" target="_blank">
            <div class="row no-gutters align-items-center mb-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/venue_small.svg"
                style="height: 30px"
              />
              <div class="heading-4 bold text-gradient-orange px-10">
                Location
              </div>
            </div>
          </a>
          <div class="heading-6 ">
            1st Floor, 47 - Nishant Kunj, Main Pitampura Road, New Delhi <br />
            Near Kohat Enclave Metro Station - Exit from Gate #2 (Opposite
            Pillar #337)
          </div>
          <div class="divider-h my-40"></div>
          <div class="row no-gutters align-items-center mb-20">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/phone-call.svg"
              style="height: 30px"
            />
            <div class="heading-4 bold text-gradient-orange px-10">Contact</div>
          </div>
          <div class="heading-6 ">
            +91&nbsp;-&nbsp;9599586446<br />
            +91&nbsp;-&nbsp;9643339705<br />
            011&nbsp;-&nbsp;47052584<br />
            011&nbsp;-&nbsp;27354126<br />
          </div>
        </div>
        <NuxtLink to="/company" class="button-primary">
          Meet Our Team
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </template>
    <template v-slot:right_section>
      <div class="t-align-lg-l t-align-c">
        <div class="heading-font stroke-font">NOIDA</div>
        <div class="heading-font">NOIDA</div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
        />
        <div class="my-sm-50 my-25">
          <a href="https://g.page/codingblocksnoida?share" target="_blank">
            <div class="row no-gutters align-items-center mb-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/venue_small.svg"
                style="height: 30px"
              />
              <div class="heading-4 bold text-gradient-orange px-10">
                Location
              </div>
            </div>
          </a>
          <div class="heading-6 ">
            1st Floor, A - 73, Sector - 2, Noida - 201301<br />
            Near Noida Sector - 15 Metro Station
          </div>
          <div class="divider-h my-40"></div>
          <div class="row no-gutters align-items-center mb-20">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/phone-call.svg"
              style="height: 30px"
            />
            <div class="heading-4 bold text-gradient-orange px-10">Contact</div>
          </div>
          <div class="heading-6 ">
            +91&nbsp;-&nbsp;9999579111<br />
            +91&nbsp;-&nbsp;9999579222<br />
          </div>
        </div>
        <NuxtLink to="/company" class="button-primary">
          Meet Our Team
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </template>
  </DividedSection>
</template>

<script>
import DividedSection from '@/components/misc/DividedSection.vue'

export default {
  components: {
    DividedSection,
  },
}
</script>
