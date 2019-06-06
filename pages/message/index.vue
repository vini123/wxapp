<template>
	<view class="container" :class="transRole">
		<view class="nav-bar" :style="{ height: statusBarHeight + 44 + 'px', 'padding-top': statusBarHeight + 'px' }">
			<view class="content">
				<text class="title text-size-10 text-color-2">{{ title }}</text>
			</view>
		</view>

		<scroll-view scroll-y class="frame" :style="{ 'margin-top': statusBarHeight + 44 + 'px' }"></scroll-view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			title: '消息',
			statusBarHeight: this.statusBarHeight,
			sq: 'role-1'
		};
	},
	onLoad() {

	},
	computed: {
		...mapState(['role']),
		transRole() {
			return this.role;
		}
	},
	methods: {}
};
</script>

<style lang="scss"></style>
