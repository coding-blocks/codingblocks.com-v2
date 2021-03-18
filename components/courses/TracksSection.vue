<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="t-align-sm-l t-align-c">
        <div class="heading-4 bold">Learning Tracks</div>
        <div class="mt-2 text-grey">
          Boost your skills! Stay sharp. Get Ahead!
        </div>
      </div>
      <div class="mt-50 row align-items-center justify-content-center">
        <div class="col-lg-4 col-md-5 col-sm-8">
          <div class="card p-0" id="track-buttons-section">
            <div
              v-for="(track, index) in tracks"
              :key="index"
              :id="`batch-${index + 1}`"
              v-on:click="setSelectedTrack(track.id, index)"
            >
              <div
                class="track-button p-30 bg-gradient-blue-light white br-10"
                :style="{ background: `url(${track.background})` }"
              >
                <div class="row no-gutters align-items-center">
                  <img :src="track.logo" class="s-60x60" />
                  <div class="flex-1 pl-20 heading-6 bold">
                    {{ track.name }}
                  </div>
                </div>
                <div class="mt-10 t-align-r bold">
                  {{ track.courses }} Courses
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-7 mt-md-none mt-50 pl-md-50">
          <TracksListComponent :id="selectedTrackID" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TracksListComponent from '@/components/courses/TracksListComponent.vue'

export default {
  components: {
    TracksListComponent,
  },
  data() {
    return {
      tracks: [],
      selectedTrackID: null,
    }
  },
  async fetch() {
    this.tracks = await this.$repositories.courses.fetchTracks()
  },
  methods: {
    setSelectedTrack(trackID, trackIndex) {
      this.selectedTrackID = trackID
      const trackButton = document.getElementById(`batch-${trackIndex + 1}`)

      trackButton.querySelector('.track-button').classList.add('active')
    },
  },
}
</script>

<style></style>
