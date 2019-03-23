import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inventory from '@/components/Inventory';
import Registration from '@/components/Registration';
import Access from '@/components/Access';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/access/:token',
      name: 'Access',
      component: Access
    },
    {
      path: '/inventory/:id',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
