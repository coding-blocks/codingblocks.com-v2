export { default as StatsCard } from '../../components/StatsCard.vue'

export const LazyStatsCard = import('../../components/StatsCard.vue' /* webpackChunkName: "components/StatsCard" */).then(c => c.default || c)
