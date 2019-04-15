import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import Posts from '@/components/Posts'
import UserProfile from '@/components/UserProfile'
import HomeFeed from '@/components/HomeFeed'
import Explore from '@/components/Explore'
import PostPage from '@/components/PostPage'
import ExplorerPage from '@/components/ExplorerPage'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import TermsOfUse from '@/components/TermsOfUse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/Profile',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/UserProfile/:id',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/HomeFeed',
      name: 'HomeFeed',
      component: HomeFeed
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/PostPage/:id',
      name: 'PostPage',
      component: PostPage
    },
    {
      path: '/ExplorerPage',
      name: 'ExplorerPage',
      component: ExplorerPage
    },
    {
      path: '/TermsOfUse',
      name: 'TermsOfUse',
      component: TermsOfUse
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    }
  ]
})
