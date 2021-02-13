<template>
  <div class="super-navbar border-bottom">
    <!-- Hamburger Nav -->
    <div
      class="hamburger-nav hamburger-nav--hidden border-left"
      id="hamburger-nav"
    >
      <div
        class="row no-gutters justify-content-end align-items-center border-bottom position-sticky tl bg-white z-pos"
        style="height: 89px;"
      >
        <img
          src="https://minio.codingblocks.com/amoeba/wrong-close.png"
          alt="#"
          class="mr-4 hamburger-nav__cross pointer"
          id="hamburger-close"
        />
      </div>
      <div class="t-align-c py-20">
        <button class="button-primary">Login / Signup</button>
      </div>
      <div class="px-40">
        <div class="mb-15 hamburger-nav__menu-element">
          <div style="width: 50px;">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-learn.svg"
            />
          </div>
          <div class="font-5 ml-15">Learn</div>
        </div>
        <div class="mb-15 hamburger-nav__menu-element">
          <div style="width: 50px;">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-practice.svg"
            />
          </div>
          <div class="font-5 ml-15">Practice</div>
        </div>
        <div class="mb-15 hamburger-nav__menu-element">
          <div style="width: 50px;">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-hire.svg"
            />
          </div>
          <div class="font-5 ml-15">Get Hired</div>
        </div>
        <div class="mb-15 hamburger-nav__menu-element">
          <div style="width: 50px;">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-ide.svg"
            />
          </div>
          <div class="font-5 ml-15">IDE</div>
        </div>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check1" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check1"
        >
          <div class="flex-1 pr-20 font-5">
            Courses
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          />
        </label>
        <div class="hamburger-nav__accordion-menu-element__content">
          <div class="mb-50">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-courses.svg"
              style="height: 40px;"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">
              ONLINE COURSES
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer mr-20" href="#">
                  C++ Master Course
                </a>
                <div
                  class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                  style="border-radius: 2px;"
                >
                  NEW
                </div>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Python for Developers
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Web Dev with Python - Django
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Data Science
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Competitive Programming
                </a>
              </div>
            </div>
            <button class="button-tertiary mt-15">
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </button>
          </div>
          <div class="mb-50">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses.svg"
              style="height: 40px;"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">
              CLASSROOM COURSES
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  C++ Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Python for Developers
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Web Dev with Python - Django
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer mr-20" href="#">
                  Data Science
                </a>
                <div
                  class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                  style="border-radius: 2px;"
                >
                  NEW
                </div>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Competitive Programming
                </a>
              </div>
            </div>
            <button class="button-tertiary mt-15">
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </button>
          </div>
          <div class="mb-50">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
              style="height: 40px;"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">
              LIVE COURSES
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  C++ Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Python for Developers
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Web Dev with Python - Django
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Data Science
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Competitive Programming
                </a>
              </div>
            </div>
            <button class="button-tertiary mt-15">
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </button>
          </div>
          <div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
              style="height: 40px;"
            />
            <div class="row no-gutters align-items-center mt-15">
              <div class="font-3 bold text-grey-light-1 mr-20">
                INDUSTRIAL TRAINING
              </div>
              <div
                class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                style="border-radius: 2px;"
              >
                NEW
              </div>
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  C++ Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Python for Developers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check2" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check2"
        >
          <div class="flex-1 pr-20 font-5">
            Events
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          />
        </label>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check3" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check3"
        >
          <div class="flex-1 pr-20 font-5">
            Blog
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          />
        </label>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check4" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check4"
        >
          <div class="flex-1 pr-20 font-5">
            Campus Superheros
          </div>
        </label>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check5" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check5"
        >
          <div class="flex-1 pr-20 font-5">
            Contact
          </div>
        </label>
      </div>
    </div>

    <!-- Main Nav -->
    <div class="h-100 width-limiter">
      <div
        class="row no-gutters align-items-center justify-content-between h-100"
      >
        <NuxtLink to="/">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-logo.svg"
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
              <a href="https://hire.codingblocks.com/applicants" target="_blank">
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
            >
              <div class="ham-toggle">
                <div class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <button class="button-primary ml-20 d-md-block d-none">
              Login / Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const hamburgerOpenToggle = document.querySelector("#hamburger-open");
    const hamburgerCloseToggle = document.querySelector("#hamburger-close");
    const hamburgerNav = document.querySelector("#hamburger-nav");

    hamburgerOpenToggle.addEventListener("click", () => {
      hamburgerNav.classList.remove("hamburger-nav--hidden");
    });

    hamburgerCloseToggle.addEventListener("click", () => {
      hamburgerNav.classList.add("hamburger-nav--hidden");
    });
  },
};
</script>
