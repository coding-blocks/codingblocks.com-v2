<template>
  <client-only>
    <div v-if="user" :class="hamburgerMenu ? 't-align-c py-20' : 'ml-20'">
      <a
        class="user-text position-relative bold font-4"
        href="https://account.codingblocks.com/logout"
      >
        <div class="text-gradient-orange">Hi, {{ user.firstname }}</div>
        <div
          class="card p-10 font-2 text-grey-light-1 user-text-tooltip bg-white t-align-c"
        >
          <div>Click to Logout</div>
        </div>
      </a>
    </div>
    <div v-else :class="hamburgerMenu ? 't-align-c py-20' : ''">
      <a
        href="https://account.codingblocks.com/login"
        class="button-primary"
        :class="hamburgerMenu ? '' : 'ml-20 d-md-block d-none'"
      >
        Login / Signup
      </a>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    hamburgerMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: null,
    }
  },
  async fetch() {
    this.user = await fetch('https://account.codingblocks.com/api/users/me', {
      credentials: 'include',
    }).then((res) => {
      if (res.status === 200) {
        return res.json()
      }
    })
  },
}
</script>

<style scoped>
.user-text-tooltip {
  position: absolute !important;
  display: none;
}

.user-text:hover .user-text-tooltip {
  display: block;
  bottom: -100px;
}

/* .user-text::after {
  content: 'Click To Logout';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  display: none;
}

.user-text:hover .user-text::after {
  display: block;
} */
</style>
