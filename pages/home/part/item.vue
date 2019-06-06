<template>
	<view class="container" :class="transRole">
		<view class="nav-bar" :style="{ height: statusBarHeight + 44 + 'px', 'padding-top': statusBarHeight + 'px' }">
			<view class="content">
				<view class="iconfonts">
					<view @tap="goBack" class="iconfont icon-back"></view>
					<view @tap="goHome" class="iconfont icon-home"></view>
				</view>

				<text class="title">{{ title }}</text>
			</view>
		</view>

		<scroll-view scroll-y class="body" :style="{ 'margin-top': statusBarHeight + 44 + 'px' }"></scroll-view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			title: '',
			statusBarHeight: this.statusBarHeight
		};
	},
	computed: {
		...mapState(['role']),
		transRole() {
			return this.role;
		}
	},
	onLoad(value) {
		this.title = '我是 item' + value.id;
	},
	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		goHome() {
			uni.switchTab({
				url: '/pages/home/index'
			});
		}
	}
};
</script>

<style></style>
