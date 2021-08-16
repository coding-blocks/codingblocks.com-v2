<template>
  <div class="card card--equal-height">
    <div class="row no-gutters align-items-center">
      <img :src="icon" class="mb-sm-3" style="height: 50px" />
      <div class="flex-1 d-sm-none d-block pl-20">
        <div class="text-gradient-orange-light bold heading-font">
          {{ stat_number }}
        </div>
        <div class="mt-1 font-4">{{ stat_title }}</div>
      </div>
    </div>
    <div class="d-sm-block d-none">
      <div class="text-gradient-orange-light bold heading-font">
        {{ stat_number }}
      </div>
      <div class="mt-1 font-4">{{ stat_title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stat_number', 'stat_title', 'icon'],
}
</script>
