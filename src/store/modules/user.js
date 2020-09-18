import { setToken,removeToken } from '@/utils/auth'
import { apiUserInfo } from "@/api"
import storage from '@/assets/js/storage'

const user = {
	state: {
		//存储用户信息
		userInfo: {}
	},

	mutations: {
		//登陆保存用户信息
		vuex_setUserInfo: function(state, res) {
			state.userInfo = res;
			setToken(res.access_token)
			storage.set('userInfo', res);
		},
		//刷新保存本地用户信息到vuex
		vuex_chengeUserInfo: function(state, res) {
			state.userInfo = res;
		},
		// 更新接口获取的用户信息
		vuex_updateUserInfo: function(state,res) {
			apiUserInfo().then((res) => {
				state.userInfo.member = res.data.member;
				storage.set('userInfo', state.userInfo);
			})
		},
		//清空用户信息
		vuex_clearUserInfo: function(state, res) {
			state.userInfo = [];
			removeToken();
			storage.remove('userInfo');
		}
	},

	actions: {

	}
}

export default user
