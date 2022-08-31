import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
// eslint-disable-next-line no-unused-vars
import DataBindingHtml from '../views/DataBindingHtml.vue'
// eslint-disable-next-line no-unused-vars
import DataBindingInputText from '../views/DataBindingInputText.vue'
// eslint-disable-next-line no-unused-vars
import EventBinding from '../views/EventBinding.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route 이 라우트에 대한 청크파일이 분리되어 생성됨
    // which is lazy-loaded when the route is visited. 이 라우트에 방문했을때 지연로드 됨.
    component: () => import(/* webpackPrefetrch: true */ '../views/AboutView.vue') // 두번째 라우터 : 해당 path 접속시, vue import
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/eventBinding',
    name: 'EventBinding',
    component: EventBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
