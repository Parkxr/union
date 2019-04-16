import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import design from '@/components/design/design.vue'
import source from '@/components/source/source.vue'
import share from '@/components/share/share.vue'
import aboutus from '@/components/aboutus/aboutus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/design',
      name: 'design',
      component: design
    },
    {
      path: '/source',
      name: 'source',
      component: source
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    
  ]
})
