export { default as StatsCard } from '../../components/home/StatsCard.vue'
export { default as WelcomeSection } from '../../components/home/WelcomeSection.vue'

export const LazyStatsCard = import('../../components/home/StatsCard.vue' /* webpackChunkName: "components/home/StatsCard" */).then(c => c.default || c)
export const LazyWelcomeSection = import('../../components/home/WelcomeSection.vue' /* webpackChunkName: "components/home/WelcomeSection" */).then(c => c.default || c)
