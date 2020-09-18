// 项目前缀，避免冲突
const _FIX = 'z039_';

var storage = {
	// 设置存储
	set(key,value) {
		localStorage.setItem(_FIX + key, JSON.stringify(value));
	},
	// 获取存储
	get(key) {
		return JSON.parse(localStorage.getItem(_FIX + key))
	},
	// 删除指定存储
	remove(key) {
		localStorage.removeItem(_FIX + key);
	},
	// 删除所有存储
	clear() {
		localStorage.clear();
	}
}

export default storage;