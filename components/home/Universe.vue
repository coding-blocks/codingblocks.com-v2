<template>
  <client-only>
    <div
      class="universe"
      :class="[size === 'small' ? 'universe--small mx-auto' : '']"
    >
      <div class="universe__star p-20">
        <img :src="star[counter]" />
      </div>
      <div v-for="(orbit, index) in orbits" :key="index">
        <UniverseOrbit :orbit="orbit" />
      </div>
    </div>
  </client-only>
</template>

<script>
import UniverseOrbit from '@/components/home/UniverseOrbit'

export default {
  components: {
    UniverseOrbit,
  },
  data() {
    return {
      counter: 0,
      star: [
        'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js-cyan.svg',
        'https://www.freepnglogos.com/uploads/target-png/target-logo-png-transparent-svg-vector-bie-supply-35.png',
        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
      ],
      orbits: [
        {
          index: 0,
          planets: [
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
          ],
        },
        {
          index: 1,
          planets: [
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
          ],
        },
        {
          index: 2,
          planets: [
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
            [
              'https://news.artnet.com/app/news-upload/2017/10/Taylor-Dafoe_Head-Shot-256x256.jpg',
              'https://minio.codingblocks.com/amoeba/arnva-min.webp',
              'https://minio.codingblocks.com/amoeba/prateek-min.webp',
            ],
          ],
        },
      ],
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter < this.star.length - 1) {
        this.counter++
      } else {
        this.counter = 0
      }
    }, 4000)
  },
  props: ['size'],
}
</script>
