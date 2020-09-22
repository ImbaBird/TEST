import {routes} from '../router'

const getters = {
  token: state => state.user.userInfo.access_token,
  menuList: (state, getters, rootState) => getMenuByRouter(routes),
}
export default getters
