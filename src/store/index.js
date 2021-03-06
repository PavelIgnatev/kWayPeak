import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import header from './header'
import inbox from './inbox'
import hamburgerMenu from './HamburgerMenu'
import performed from './performed'
import stateModal from './stateModal'
import trash from './trash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    auth, info, header, inbox, hamburgerMenu, performed, trash, stateModal
  }
})
