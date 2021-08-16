<template>
  <div>
    <!-- Sub Nav -->
    <div class="py-15 border-bottom bg-background-main-2 px-25 d-md-block d-none">
      <div class="width-limiter">
        <div class="row no-gutters justify-content-end">
          <div
            class="row no-gutters align-items-center mr-30 font-4  pointer"
            id="mega-nav-toggle"
            @click="displayMegaNav = !displayMegaNav"
          >
            <span>Courses</span>
            <img
              src="https://minio.cb.lk/public/fa-5.13/svgs/solid/chevron-down.svg"
              class="ml-10"
              style="height: 15px"
            />
          </div>
          <div
            class="row no-gutters align-items-center mr-30 font-4  pointer"
          >
            <NuxtLink to="/events"> Events </NuxtLink>
          </div>
          <div
            class="row no-gutters align-items-center mr-30 font-4  pointer"
          >
            <a href="https://blog.codingblocks.com/" target="_blank">Blogs</a>
          </div>
          <div
            class="row no-gutters align-items-center mr-30 font-4  pointer"
          >
            <a href="https://superhero.codingblocks.com/" target="_blank"
              >Campus Superheroes</a
            >
          </div>
          <div
            class="row no-gutters align-items-center font-4  pointer"
          >
            <NuxtLink to="/contact"> Contact </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <MegaNav :show="displayMegaNav" @close="displayMegaNav = false" />
  </div>
</template>

<script>
import MegaNav from '@/components/MegaNav.vue'

export default {
  data() {
    return {
      displayMegaNav: false,
    }
  },
  components: {
    MegaNav,
  },
}
</script>
