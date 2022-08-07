interface IUserState {
  name: string,
  [propName: string]: any
}

const state: IUserState = {
  name: '', // 用户名 
}

const mutations = {
  setUserInfo(state: IUserState, playload: any){
    Object
      .keys(playload)
      .forEach((key: string) => {
        state[key] = playload[key]
      })
    state.name = playload.name
  }
}

export default {
  namespaced: true, // 为每个模块添加一个前缀名，保证模块命明不冲突 
  state,
  mutations
}