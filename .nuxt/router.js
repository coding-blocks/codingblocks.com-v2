import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _061798d3 = () => interopDefault(import('../pages/community/index.vue' /* webpackChunkName: "pages/community/index" */))
const _0310f427 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _b16c27ec = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _57249e45 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _3f9d5793 = () => interopDefault(import('../pages/index-old.vue' /* webpackChunkName: "pages/index-old" */))
const _337eea39 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/community",
    component: _061798d3,
    name: "community"
  }, {
    path: "/company",
    component: _0310f427,
    name: "company"
  }, {
    path: "/contact",
    component: _b16c27ec,
    name: "contact"
  }, {
    path: "/events",
    component: _57249e45,
    name: "events"
  }, {
    path: "/index-old",
    component: _3f9d5793,
    name: "index-old"
  }, {
    path: "/",
    component: _337eea39,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
