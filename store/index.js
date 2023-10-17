import home from '@/store/Home/index.js'
import detail from '@/store/Detail/index.js'
import favorite from '@/store/Favorite/index.js'
import newest from '@/store/Newest/index.js'
import rank from '@/store/Rank/index.js'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
	detail,
	favorite,
	newest,
	rank
  },
});