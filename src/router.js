import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import design from '@/components/design/design.vue'
import source from '@/components/source/source.vue'
import share from '@/components/share/share.vue'
import aboutus from '@/components/aboutus/aboutus.vue'
import myworks from '@/components/share/myworks.vue'
import matter from  '@/components/design/matter.vue'
import online from  '@/components/design/online.vue'
import vi from  '@/components/design/vi.vue'

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
      path: '/matter',
      name: 'matter',
      component: matter
    },
    {
      path: '/online',
      name: 'online',
      component: online
    },
    {
      path: '/vi',
      name: 'vi',
      component: vi
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
    {
      path: '/myworks',
      name: 'myworks',
      component: myworks
    },
    
  ]
})
