<template>
  <div>
    <div class="mt-50 px-xl-100 px-lg-85 px-md-60 px-sm-50 px-25">
      <div class="width-limiter">
        <div class="tabs-primary w-100 justify-content-between">
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
