import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Origin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: 