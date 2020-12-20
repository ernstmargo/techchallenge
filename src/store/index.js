import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import  {uuid}  from 'vue-uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    newsentry: {},
    searchWord: null,
    filteredNews: null,
  },
  getters: {
    allNews: (state) => state.news,
    getNewsentry: (state) => state.newsentry,
    getSearchWord: (state) => state.searchWord,
    getFilteredNews: (state) => state.filteredNews,
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news =  news.map((item) => {
            return {
              id: uuid.v4(),
              title: item.title,
              body: item.body,
              author: item.author,
            }})
    },
    EDIT_NEWSENTRY (state, data) {
    let newentry=state.news.find(a => a.id === data.id)
         newentry.title=data.title
          newentry.body=data.body
          newentry.author=data.author
    },
    ADD_NEWSENTRY (state, data){
        state.news.push(data)
    },
    FILTERED_NEWS (state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredCourses = null
        return
      }
        state.searchWord = word
        word = word.trim().toLowerCase()
        state.filteredNews = state.news.filter((newsentry) => {
          return  newsentry.title.toLowerCase().includes(word)
        })
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
  },
  modules: {
  }
})
