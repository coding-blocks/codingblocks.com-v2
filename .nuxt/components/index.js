export { default as WelcomeSection } from '../../components/home/WelcomeSection.vue'
export { default as CardCarousel } from '../../components/misc/CardCarousel.vue'
export { default as StatsCard } from '../../components/misc/StatsCard.vue'

export const LazyWelcomeSection = import('../../components/home/WelcomeSection.vue' /* webpackChunkName: "components/home/WelcomeSection" */).then(c => c.default || c)
export const LazyCardCarousel = import('../../components/misc/CardCarousel.vue' /* webpackChunkName: "components/misc/CardCarousel" */).then(c => c.default || c)
export const LazyStatsCard = import('../../components/misc/StatsCard.vue' /* webpackChunkName: "components/misc/StatsCard" */).then(c => c.default || c)
