import Vuex from 'vuex'
import Vue from 'vue'
import {getToken, setToken, removeToken} from '@/request/token'
import {login, getUserInfo,register} from '@/api/login'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: '',
    account: '',
    name: '',
    avatar: '',
    token: getToken(),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ID: (state, id) => {
      state.id = id
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        // console.log(login(user.account, user.password))
        login(user.account, user.password).then(data => {
          // console.log(data)
          if(data.success){
            commit('SET_TOKEN', data.data)
            setToken(data.data)
            resolve()
          }else{
            reject(data.msg)
          }
        }).catch(error => {

          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo({commit, state}) {

      let that = this
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(data => {
          if (data.success) {
            commit('SET_ACCOUNT', data.data.account)
            commit('SET_NAME', data.data.nickname)
            commit('SET_AVATAR', data.data.avatar)
            commit('SET_ID', data.data.id)
            resolve(data)
          } else {
            commit('SET_ACCOUNT', '')
            commit('SET_NAME', '')
            commit('SET_AVATAR', '')
            commit('SET_ID', '')
            removeToken()
            resolve(data)
          }

        }).catch(error => {
          commit('SET_ACCOUNT', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_ID', '')
          removeToken()
          reject(error)
        })
      })
    },
    register({commit}, user) {
      console.log(user)
      return new Promise((resolve, reject) => {
        register(user.account, user.nickname, user.password).then((data) => {
          console.log(data)
          if(data.success){
            commit('SET_TOKEN', data.data)
            setToken(data.data)
            resolve()
          }else{

            reject(data.msg)
          }
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
})
