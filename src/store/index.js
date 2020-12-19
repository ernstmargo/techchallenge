import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    newsentry: {},
    searchWord: null,
    filteredNews: null,
    sortedNews: null,
    sortOrder: null,
    sortBy: null,

  },
  getters: {
    allNews: (state) => state.news,

    getNewsentry: (state) => state.newsentry,

    getSearchWord: (state) => state.searchWord,

    getFilteredNews: (state) => state.filteredNews,

    getSortedNews: (state) =>  state.sortedNews,
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news

    },
    ADD_NEWSENTRY (state, data){
      state.news.push(data)
     // state.news = Object.assign({}, data)


    },

    FILTERED_NEWS (state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredCourses = null
      } else {
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredNews = state.news.filter((newsentry) => {
          return  newsentry.title.toLowerCase().includes(word)
        })
      }
    },

    SORT_NEWS (state,  {order, attr}){

      state.filteredNews = _.orderBy(state.news, attr , order);
    },
  },
  actions: {
    getNews({ commit }) {
      axios.get('news.json')
          .then(response => {
            commit('SET_NEWS', response.data)
          })
    },
    FILTERED_NEWS ({ commit }, word) {
      commit('FILTERED_NEWS', word)
      console.log('action filtered news')
    },
    SORT_NEWS ({commit}, payload) {
      commit('SORT_NEWS',  payload);
      console.log('action ')

    },
    ADD_NEWSENTRY ({ commit }, data ) {
      commit('ADD_NEWSENTRY ', data )
    }
  },
  modules: {
  }
})
