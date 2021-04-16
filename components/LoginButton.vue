<template>
  <client-only>
    <div v-if="user" :class="hamburgerMenu ? 't-align-c py-20' : ''">
      {{ user.firstname }}
    </div>
    <div v-else :class="hamburgerMenu ? 't-align-c py-20' : ''">
      <a
        href="https://account.codingblocks.com/login"
        class="button-primary"
        :class="hamburgerMenu ? '' : 'ml-20 d-md-block d-none'"
        target="_blank"
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
