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
  props: ['size'],
}
</script>
