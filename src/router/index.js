import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top'
import About from '../components/About'
import Skills from '../components/Skills'
import Links from '../components/Links'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portfolio/',
      name: 'Top',
      component: Top
    },
    {
      path: '/portfolio/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/portfolio/links',
      name: 'Links',
      component: Links
    },
  ]
})
