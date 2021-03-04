<template>
  <ModalForm v-if="showSyllabusModal" @close="setShowSyllabusModal(false)">
    <ConsultationForm />
  </ModalForm>
</template>

<script>
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  components: {
    ModalForm,
    ConsultationForm,
  },
  data() {
    return {
      showSyllabusModal: false,
    }
  },
  methods: {
    setShowSyllabusModal(value) {
      this.showSyllabusModal = value
    },
  },
}
</script>
