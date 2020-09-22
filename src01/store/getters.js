import router from '../router'
const routers = router.routes
const getters = {
  token: state => state.user.userInfo.access_token,
  menuList: (state, getters, rootState) => getMenuByRouter(routers),
}
export default getters
