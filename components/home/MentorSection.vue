<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-md-l t-align-c">
          <div class="heading-font stroke-font">OUR EXPERT</div>
          <div class="heading-font">MENTORS</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_events.svg"
          />
        </div>
        <div class="col-3 t-align-r d-md-block d-none">
          <NuxtLink to="/company" class="button-secondary">
            Learn more about us
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
              class="ml-2"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <div class="row no-gutters justify-content-center">
          <div v-for="(member, index) in teamMembers" :key="index">
            <div
              class="t-align-c px-20 mb-25"
              v-if="member.member_type === 'Mentor'"
            >
              <img :src="member.member_image" class="big-photo" />
              <div class="mt-25 heading-4 bold d-sm-block d-none">
                {{ member.member_name }}
              </div>
              <div class="mt-25 heading-6 bold d-sm-none d-block">
                {{ member.member_name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-align-c d-md-none d-block">
        <NuxtLink to="/company" class="button-secondary">
          Learn more about us
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          member_image: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          member_type: 'Mentor',
          member_name: 'Arnav Gupta',
          member_description: 'Champion Swimmer Gupta!',
          member_contact: 'a@cb.lk',
        },
        {
          member_image: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          member_type: 'Developer',
          member_name: 'Arnav Gupta',
          member_description: 'Champion Swimmer Gupta!',
          member_contact: 'a@cb.lk',
        },
        {
          member_image: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          member_type: 'Mentor',
          member_name: 'Arnav Gupta',
          member_description: 'Champion Swimmer Gupta!',
          member_contact: 'a@cb.lk',
        },
        {
          member_image: 'https://minio.codingblocks.com/amoeba/arnva-min.webp',
          member_type: 'Management',
          member_name: 'Arnav Gupta',
          member_description: 'Champion Swimmer Gupta!',
          member_contact: 'a@cb.lk',
        },
      ],
    }
  },
}
</script>
