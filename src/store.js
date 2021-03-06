import Vue from 'vue'
import Vuex from 'vuex'
// import * as Cookies from "js-cookie"
import axios from 'axios'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '123',
    profile: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_PROFILE(state, profile) {
      firebase
        .database()
        .ref(`${process.env.NODE_ENV}/users/${profile.id}`)
        .once('value')
        .then((snapshot) => {
          if (snapshot.val() == null) {
            state.profile = profile
            firebase
              .database()
              .ref(`${process.env.NODE_ENV}/users/${profile.id}`)
              .set(profile)
          } else {
            console.log(snapshot.val())
            state.profile = snapshot.val()
          }
        })
    }
  },
  actions: {
    getProfile({ commit }) {
      axios.get('https://api.kkbox.com/v1.1/me', {
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      }).then((res) => {
        commit('SET_PROFILE', res.data)
      })
    }
  }
})
