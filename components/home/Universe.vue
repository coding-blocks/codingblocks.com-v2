<template>
  <div class="universe" :class="[size === 'small' ? 'universe--small mx-auto' : '']">
    <div class="universe__star p-20">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js-cyan.svg"
      />
    </div>
    <div class="universe__orbit universe__orbit--1">
      <div class="position-relative h-100 w-100">
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
      </div>
    </div>
    <div class="universe__orbit universe__orbit--2">
      <div class="position-relative h-100 w-100">
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
      </div>
    </div>
    <div class="universe__orbit universe__orbit--3">
      <div class="position-relative h-100 w-100">
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
        <div class="universe__orbit__planet">
          <img
            src="https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["size"],
  mounted() {
    document.querySelectorAll(".universe").forEach((universe) => {
      let reduceAngle = 60;
      universe.querySelectorAll(".universe__orbit").forEach((orbit) => {
        let planets = orbit.querySelectorAll(".universe__orbit__planet");
        let angle = 360 - 90;
        let dangle = 360 / planets.length;
        for (let i = 0; i < planets.length; ++i) {
          let planet = planets[i];
          angle += dangle;
          planet.style.transform = `rotate(${angle -
            reduceAngle}deg) translate(${orbit.clientWidth /
            2}px) rotate(-${angle - reduceAngle}deg)`;
        }

        reduceAngle += 45;
      });
    });
  },
};
</script>
