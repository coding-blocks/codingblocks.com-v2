export { default as CollegesAndCompaniesSection } from '../../components/home/CollegesAndCompaniesSection.vue'
export { default as WelcomeSection } from '../../components/home/WelcomeSection.vue'
export { default as CardCarousel } from '../../components/misc/CardCarousel.vue'
export { default as EventsCard } from '../../components/misc/EventsCard.vue'
export { default as StatsCard } from '../../components/misc/StatsCard.vue'

export const LazyCollegesAndCompaniesSection = import('../../components/home/CollegesAndCompaniesSection.vue' /* webpackChunkName: "components/home/CollegesAndCompaniesSection" */).then(c => c.default || c)
export const LazyWelcomeSection = import('../../components/home/WelcomeSection.vue' /* webpackChunkName: "components/home/WelcomeSection" */).then(c => c.default || c)
export const LazyCardCarousel = import('../../components/misc/CardCarousel.vue' /* webpackChunkName: "components/misc/CardCarousel" */).then(c => c.default || c)
export const LazyEventsCard = import('../../components/misc/EventsCard.vue' /* webpackChunkName: "components/misc/EventsCard" */).then(c => c.default || c)
export const LazyStatsCard = import('../../components/misc/StatsCard.vue' /* webpackChunkName: "components/misc/StatsCard" */).then(c => c.default || c)
