<template>
  <client-only>
    <div
      class="universe"
      :class="[size === 'small' ? 'universe--small mx-auto' : '']"
    >
      <div class="universe__star p-20">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js-cyan.svg"
        />
      </div>
      <div v-for="(orbit, index) in orbits" :key="index">
        <UniverseOrbit 
          :orbit="orbit"
        />
      </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import UniverseOrbit from "@/components/home/UniverseOrbit";

export default {
  components: {
    UniverseOrbit,
  },
  data () {
    return {
      orbits: [
        {
          index: 0,
          planets: [
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          ]
        },        
        {
          index: 1,
          planets: [
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          ]
        },        
        {
          index: 2,
          planets: [
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg",
            "https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg"
          ]
        },
      ],
    isPlaced: false,
    }
  },
  props: ["size"],
  mounted() {
    // document.querySelectorAll(".universe").forEach((universe) => {
    //   const orbitList = universe.querySelectorAll(".universe__orbit");
    //   let reduceAngle = 60;
    //   orbitList.forEach((orbit) => {
    //     let planets = orbit.querySelectorAll(".universe__orbit__planet");
    //     let angle = 360 - 90;
    //     let dangle = 360 / planets.length;
    //     for (let i = 0; i < planets.length; ++i) {
    //       let planet = planets[i];
    //       angle += dangle;
    //       planet.style.transform = `rotate(${angle -
    //         reduceAngle}deg) translate(${orbit.clientWidth /
    //         2}px) rotate(-${angle - reduceAngle}deg)`;
    //       // planet.style.rotate = `${angle - reduceAngle}deg`;
    //       // planet.style.translate = `${orbit.clientWidth / 2}px`;
    //       // planet.style.rotate = `-${angle - reduceAngle}deg`;
    //     }

    //     reduceAngle += 45;
    //   });

    //   // setInterval(function () {
        
    //     // }, 20)
    // });
  },
};
</script>

<style scoped>

/* .rotenPotato{
  animation: rotatePlanet 1s ease infinite;
  transform-origin: center;
}

@keyframes rotatePlanet{
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
} */

</style>
