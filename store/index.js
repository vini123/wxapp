import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		role: uni.getStorageSync('role') || 'role-1'
	},

	mutations: {
		mutation1(state, provider) {
			console.log('mutation1', provider);
		},

		update(state, provider) {
			let {
				key,
				value
			} = provider;

			if (!key || !value)
				return;

			uni.setStorageSync(key, value);
			state[key] = value;
		}
	},

	actions: {
		action1({
			commit
		}, value) {
			if (!value) {
				return;
			}

			commit('mutation1', value)
		}
	}
});

export default store;