<template>
  <div class="card" id="buy-card-section">
    <div class="heading-6 bold mb-30">Choose Batch</div>
    <div class="tabs-primary mb-20">
      <div
        class="tab"
        v-for="(batch, index) in batches"
        :key="index"
        :id="`batch-${index + 1}`"
      >
        {{ batch.centre.name.toUpperCase() }}
      </div>
    </div>
    <div class="no-gutters c-card-carousel row" id="batches-carousel">
      <div class="col-12" v-for="(batch, index) in batches" :key="index">
        <div class="row no-gutters align-items-center">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses-big.svg"
          />
          <div class="flex-1 pl-20">
            <div class="heading-6 bold text-gradient-orange-light">
              CLASSROOM
            </div>
            <div class="mt-2 font-2 ">
              Batch starting
              <strong>{{ getDateString(batch.startDate) }}</strong>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="row no-gutters align-items-center">
            <div class="heading-6 bold mr-10">
              &#8377;&nbsp;{{ batch.price }}
            </div>
            <del class=" bold">&#8377;&nbsp;{{ batch.mrp }}</del>
          </div>
          <div class="mt-10  font-2">
            Enrollment ends {{ getDateString(batch.enrollmentEndDate) }}
          </div>
        </div>
        <a :href="batch.buyLink" class="button-primary d-block t-align-c">
          Buy Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'

export default {
  props: {
    batches: {
      type: Array,
    },
  },
  mounted() {
    const batch_1 = document.querySelector('#batch-1')
    const batch_2 = document.querySelector('#batch-2')
    const batch_3 = document.querySelector('#batch-3')
    const carousel = document.querySelector('#batches-carousel')

    if (batch_1) {
      batch_1.classList.add('active')

      batch_1.addEventListener('click', () => {
        carousel.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })

        batch_1.classList.add('active')
        batch_2.classList.remove('active')
        batch_3.classList.remove('active')
      })
    }

    if (batch_2) {
      batch_2.addEventListener('click', () => {
        carousel.scrollTo({
          top: 0,
          left: carousel.clientWidth,
          behavior: 'smooth',
        })

        batch_2.classList.add('active')
        batch_1.classList.remove('active')
        batch_3.classList.remove('active')
      })
    }

    if (batch_3) {
      batch_3.addEventListener('click', () => {
        carousel.scrollTo({
          top: 0,
          left: 2 * carousel.clientWidth,
          behavior: 'smooth',
        })

        batch_3.classList.add('active')
        batch_2.classList.remove('active')
        batch_1.classList.remove('active')
      })
    }
  },
  methods: {
    getDateString(dateString) {
      return formatTimestamp(dateString)
    },
  },
}
</script>
