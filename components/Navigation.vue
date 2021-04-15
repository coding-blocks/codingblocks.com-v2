<template>
  <div>
    <MainNav />

    <SubNavMegaNav />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import SubNavMegaNav from '@/components/SubNavMegaNav.vue'

export default {
  components: {
    MainNav,
    SubNavMegaNav,
  },
}
</script>
