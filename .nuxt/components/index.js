export { default as StatsCard } from '../../components/home/StatsCard.vue'

export const LazyStatsCard = import('../../components/home/StatsCard.vue' /* webpackChunkName: "components/home/StatsCard" */).then(c => c.default || c)
