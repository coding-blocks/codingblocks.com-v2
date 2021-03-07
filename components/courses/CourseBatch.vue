<template>
  <div class="card">
    <div class="heading-6 bold mb-30">Choose Batch</div>
    <div class="tabs-primary mb-20">
      <div class="tab active">Noida</div>
      <div class="tab">Pitampura</div>
    </div>
    <div class="row no-gutters align-items-center">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses-big.svg"
      />
      <div class="flex-1 pl-20">
        <div class="heading-6 bold text-gradient-orange-light">CLASSROOM</div>
        <div class="mt-2 font-2 text-grey">
          Batch starting <strong>{{batches[0].startDate}}</strong>
        </div>
      </div>
    </div>
    <div class="my-30">
      <div class="row no-gutters align-items-center">
        <div class="heading-6 bold mr-10">&#8377;&nbsp;{{batches[0].price}}</div>
        <del class="text-grey bold">&#8377;&nbsp;{{batches[0].Mrp}}</del>
      </div>
      <div class="mt-10 text-grey font-2">Enrollment ends {{batches[0].enrollmentEndDate}}</div>
    </div>
    <a :href="batches[0].buyLink" class="button-primary d-block">Buy Now</a>
  </div>
</template>

<script>
export default {
  props: {
    batches: {
      type:Array
    },
  },
}
</script>
