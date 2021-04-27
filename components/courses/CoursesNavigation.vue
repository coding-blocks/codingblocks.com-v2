<template>
  <div>
    <div class="mt-50 px-xl-75 px-lg-60 px-md-50 px-sm-40 px-25">
      <div class="width-limiter">
        <div
          class="row no-gutters align-items-center justify-content-sm-end justify-content-center pb-30 navigation-row"
        >
          <div class="tabs-secondary justify-content-end">
            <div
              class="tab"
              v-for="tab in tabs"
              :key="tab"
              :class="{ active: activeTab === tab }"
              v-on:click="switchTab(tab)"
            >
              {{ tab.toUpperCase() }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot :name="tabPanelSlotName"></slot>
  </div>
</template>

<script>
export default {
  props: {
    initialTab: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.initialTab,
    }
  },
  computed: {
    tabPanelSlotName() {
      let tabName = (this.activeTab ?? 'online')
        .toLowerCase()
        .split(' ')
        .join('-')
      return `body-${tabName}`
    },
  },
  methods: {
    switchTab(tabName) {
      this.activeTab = tabName
    },
  },
}
</script>

<style scoped>
.navigation-row {
  border-bottom: 1px solid #cccccc;
}
</style>
