<script>
import { mapState, mapMutations } from 'vuex';
import tabbar from '@/common/tabbar.js';

export default {
	computed: {
		...mapState(['role'])
	},
	onLaunch: function() {
		console.log('App Launch');
		tabbar.change(this.role);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import 'common/icon.scss';
@import 'common/common.scss';
</style>
