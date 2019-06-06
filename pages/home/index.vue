<template>
	<view class="container" :class="transRole">
		<view class="nav-bar" :style="{ height: statusBarHeight + 44 + 'px', 'padding-top': statusBarHeight + 'px' }">
			<view class="content"><text class="title text-size-10 text-color-2">首页</text></view>
		</view>

		<scroll-view scroll-y class="frame" :style="{ 'margin-top': statusBarHeight + 44 + 'px' }">
			<view @tap="goItem({ id: item })" class="item" v-for="(item, index) of 12" :key="index">
				<text class="text-size-3 text-color-3">{{ role + ' ' + item }}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			title: 'Hello',
			statusBarHeight: this.statusBarHeight,
			sq: 'role-1'
		};
	},
	computed: {
		...mapState(['role']),
		transRole() {
			return this.role;
		}
	},
	onLoad() {},
	methods: {
		goItem(value) {
			uni.navigateTo({
				url: '/pages/home/part/item?id=' + value.id
			});
		}
	}
};
</script>

<style lang="scss">
.frame {
	display: flex;
	flex-direction: column;
	height: 100%;

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120upx;
	}
}
</style>
