<template>
  <client-only>
    <div v-if="user" :class="hamburgerMenu ? 't-align-c py-20' : 'ml-20'">
      <a
        class="user-text position-relative bold font-4 text-gradient-orange"
        href="https://account.codingblocks.com/logout"
      >
        Hi, {{ user.firstname }}
        <div
          class="card p-10 font-2 text-grey-light-1 user-text-tooltip bg-white"
        >
          Click to Logout
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
.user-text {
  position: absolute !important;
  display: none;
}

.user-text:hover .user-text-tooltip {
  display: block;
  bottom: -80px;
}
</style>
