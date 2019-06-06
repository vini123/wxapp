import Vue from 'vue'
import App from './App'
import store from './store'
import tabbar from '@/common/tabbar.js';

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

try {
	const res = uni.getSystemInfoSync();
	if (res) {
		Vue.prototype.statusBarHeight = res.statusBarHeight;
	}
} catch(e) {
	Vue.prototype.statusBarHeight = 20;
}

const app = new Vue({
    ...App
})
app.$mount()

