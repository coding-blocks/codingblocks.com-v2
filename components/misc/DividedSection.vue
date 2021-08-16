<template>
  <div class="landing-page__section landing-page__section--divided-section">
    <div class="width-limiter">
      <div class="row" :class="showFormCard ? 'mb-60' : ''">
        <div
          class="col-lg-6 col-12 landing-page__section--divided-section__left-section"
        >
          <slot name="left_section"></slot>
        </div>
        <div class="divider-h d-lg-none d-block my-50 bg-grey-light-1"></div>
        <div
          class="col-lg-6 col-12 landing-page__section--divided-section__right-section"
        >
          <slot name="right_section"></slot>
        </div>
      </div>

      <div v-if="showFormCard">
        <div class="card">
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

        <ModalForm v-if="showModal" @close="setShowModal(false)">
          <ConsultationForm />
        </ModalForm>
      </div>
    </div>
  </div>
</template>

<script>
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  props: {
    showFormCard: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ModalForm,
    ConsultationForm,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    setShowModal(value) {
      this.showModal = value
    },
  },
}
</script>
