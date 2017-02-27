import Vue from 'vue'
import Router from 'vue-router'
import model from 'components/model/model'
import effect from 'components/effect/effect'
import applique from 'components/applique/applique'
import voice from 'components/voice/voice'
import common from 'components/common/common'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/model',
      component: model
    },{
      path: '/effect',
      component: effect
    },{
      path: '/applique',
      component: applique
    },{
      path: '/voice',
      component: voice
    },{
      path: '/common',
      component: common
    }
  ]
})
