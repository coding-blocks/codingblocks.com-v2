<template>
  <div class="super-navbar border-bottom">
    <!-- Main Nav -->
    <div class="h-100 width-limiter">
      <div
        class="row no-gutters align-items-center justify-content-between h-100"
      >
        <NuxtLink to="/">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cblogo-black.png"
            style="height: 60px"
          />
        </NuxtLink>
        <div class="flex-1 h-100">
          <div
            class="row no-gutters align-items-center justify-content-end h-100"
          >
            <div class="super-navbar__link">
              <a href="https://online.codingblocks.com/" target="_blank">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-learn.svg"
                />
                <div class="font-3 mt-10 d-md-block d-none">Learn</div>
              </a>
            </div>
            <div class="super-navbar__link">
              <a href="https://hack.codingblocks.com/" target="_blank">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-practice.svg"
                />
                <div class="font-3 mt-10 d-md-block d-none">Practice</div>
              </a>
            </div>
            <div class="super-navbar__link">
              <a
                href="https://hire.codingblocks.com/applicants"
                target="_blank"
              >
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-hire.svg"
                />
                <div class="font-3 mt-10 d-md-block d-none">Get<br />Hired</div>
              </a>
            </div>
            <div class="super-navbar__link">
              <a href="https://ide.codingblocks.com/" target="_blank">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-ide.svg"
                />
                <div class="font-3 mt-10 d-md-block d-none">IDE</div>
              </a>
            </div>
            <div
              class="hamburger-menu d-md-none d-block ml-25"
              id="hamburger-open"
              @click="displayHamburgerNav = !displayHamburgerNav"
            >
              <div class="ham-toggle">
                <div class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div v-if="user">
              {{ user.firstname }}
            </div>
            <div v-else>
              <a
                href="https://account.codingblocks.com/login"
                class="button-primary ml-20 d-md-block d-none"
                target="_blank"
              >
                Login / Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HamburgerNav
      :show="displayHamburgerNav"
      @closeHamburger="displayHamburgerNav = false"
      :user="user"
    />
  </div>
</template>

<script>
import HamburgerNav from '@/components/HamburgerNav.vue'

export default {
  data() {
    return {
      classroomCoursesPayload: [],
      liveCoursesPayload: [],
      user: null,
      displayHamburgerNav: false,
    }
  },
  components: {
    HamburgerNav,
  },
  mounted() {
    const hamburgerOpenToggle = document.querySelector('#hamburger-open')
    const hamburgerCloseToggle = document.querySelector('#hamburger-close')
    const hamburgerNav = document.querySelector('#hamburger-nav')

    hamburgerOpenToggle.addEventListener('click', () => {
      hamburgerNav.classList.remove('hamburger-nav--hidden')
    })

    hamburgerCloseToggle.addEventListener('click', () => {
      hamburgerNav.classList.add('hamburger-nav--hidden')
    })
  },
  async fetch() {
    this.classroomCoursesPayload = await this.$repositories.courses.fetchClassroomCourses()
    this.liveCoursesPayload = await this.$repositories.courses.fetchLiveCourses()
    this.user = await fetch('https://account.codingblocks.com/api/users/me', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        res.json()
      }
    })
  },
}
</script>
