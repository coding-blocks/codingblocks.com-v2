<template>
  <div>
    <div class="card p-sm-50 p-30 bg-grey-light-3 mt-sm-75 mt-50 pb-none">
      <div
        class="row no-gutters align-items-center justify-content-between pb-sm-50 pb-30"
      >
        <div class="heading-4 bold flex-1">
          Confused about which course to pick?
        </div>
        <button class="button-secondary" id="help-section-toggle">
          <span>Seek Help</span>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </button>
      </div>
      <div
        class="py-sm-50 py-30 d-none"
        style="border-top: solid 1px #dddddd"
        id="help-section"
      >
        <div v-if="hide_main_section === false">
          <div id="help-section">
            <div class="row">
              <div
                class="col-lg-3 flex-col justify-content-between h-inherit"
                id="help-section-status"
              >
                <div class="heading-5 bold mb-50 w-100">I am a ...</div>
                <div class="row">
                  <div
                    class="col-lg-12 col-md-3 col-6 h-inherit mb-lg-40 pb-md-none pb-40"
                  >
                    <div
                      class="h-100 option-div option-div--rect"
                      v-on:click="setCurrentStatus()"
                    >
                      <div class="font-5 bold flex-1 pr-2">
                        High School Student
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div
                    class="col-lg-12 col-md-3 col-6 h-inherit mb-lg-40 pb-md-none pb-40"
                  >
                    <div
                      class="h-100 option-div option-div--rect"
                      v-on:click="setCurrentStatus()"
                    >
                      <div class="font-5 bold flex-1 pr-2">College Fresher</div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-3 col-6 h-inherit mb-lg-40">
                    <div
                      class="h-100 option-div option-div--rect"
                      v-on:click="setCurrentStatus()"
                    >
                      <div class="font-5 bold flex-1 pr-2">Recent Graduate</div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-3 col-6 h-inherit">
                    <div
                      class="h-100 option-div option-div--rect"
                      v-on:click="setCurrentStatus()"
                    >
                      <div class="font-5 bold flex-1 pr-2">
                        Working Professional
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-9 flex-col justify-content-between h-inherit mt-lg-none mt-50"
                id="help-section-role"
              >
                <div class="row justify-content-between mb-50 no-gutters w-100">
                  <div class="heading-5 bold col-md-7 col-12 mb-sm-none mb-20">
                    ... &amp; I want to become a
                  </div>
                  <button class="button-primary d-md-block d-none">
                    Show me results
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                      class="ml-2"
                    />
                  </button>
                </div>
                <div class="row">
                  <div class="col-md-3 col-sm-4 col-6 h-inherit mb-40">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/ai-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Data Scientist
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6 h-inherit mb-40">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/node-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Full Stack Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6 h-inherit mb-40">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/android-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Android Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6 h-inherit mb-40">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/java-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Software Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div
                    class="col-md-3 col-sm-4 col-6 h-inherit pb-md-none pb-40"
                  >
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cpp-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Software Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div
                    class="col-md-3 col-sm-4 col-6 h-inherit pb-md-none pb-40"
                  >
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Frontend Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6 h-inherit">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/competitive-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Competitive Programmer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-6 h-inherit">
                    <div
                      class="option-div option-div--square h-100"
                      v-on:click="selectRole()"
                    >
                      <div>
                        <img
                          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python-grey.svg"
                        />
                      </div>
                      <div class="font-5 bold mt-4 t-align-c">
                        Python Developer
                      </div>
                      <img
                        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/option-div-icon-orange.svg"
                        class="option-div__icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-md-none d-block mt-40">
                <button class="button-primary">
                  Show me results
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                    class="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="heading-6 bold my-sm-50 my-30 t-align-c">OR</div>
        </div>
        <div class="card bg-white">
          <div
            class="row no-gutters justify-content-between align-items-center side-tag"
          >
            <div class="flex-1 pr-25">
              <div class="heading-5">CONTACT OUT TECH EXPERTS FOR</div>
              <div class="text-orange heading-2 bold mt-1">
                FREE COUNSELLING SESSION
              </div>
            </div>
            <div class="col-md-4 t-align-md-r t-align-l mt-md-none mt-40">
              <button class="button-secondary" v-on:click="setShowModal(true)">
                Schedule a Session
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                  class="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalForm v-if="showModal" @close="setShowModal(false)">
      <ConsultationForm />
    </ModalForm>
  </div>
</template>

<script>
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  props: {
    hide_main_section: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ModalForm,
    ConsultationForm,
  },
  mounted() {
    const toggleButton = document.querySelector('#help-section-toggle')
    const helpSection = document.querySelector('#help-section')

    toggleButton.addEventListener('click', function () {
      if (toggleButton.querySelector('span').innerHTML == 'Seek Help') {
        helpSection.classList.remove('d-none')
        toggleButton.querySelector('span').innerHTML = 'Close'
      } else {
        helpSection.classList.add('d-none')
        toggleButton.querySelector('span').innerHTML = 'Seek Help'
      }
    })
  },
  data() {
    return {
      showModal: false,
      professions: {},
      helpSectionStatus: null,
      helpSectionRole: null,
    }
  },
  methods: {
    setShowModal(value) {
      this.showModal = value
    },
    async fetch() {
      this.professions = await this.$repositories.courses.fetchProfessions
    },
  },
}
</script>

<style scoped>
fieldset {
  border: none !important;
  margin: 0 !important;
}
</style>
