<template>
	<view class="container" :class="transRole">
		<view class="bg-color-1 header">
			<view class="bg-color-2 tab">
				<text class="text-size-7 text-color-1">仅仅测试测试</text>
			</view>
		</view>

		<view class="bg-color-2 content content-1">
			<view class="border-color-2 item" @tap="changRole(item)" v-for="(item, index) in roles" :key="index">
				<text class="text-size-5 text-color-1">{{ item.name }}</text>
				<view v-if="role != item.value" class="text-color-1 iconfont icon-arrow-right"></view>
			</view>
		</view>

		<view class="bg-color-2 content content-2">
			<view @tap="goItem" class="border-color-2 item">
				<text class="text-size-5 text-color-1">看看 item</text>
				<view class="text-color-1 iconfont icon-arrow-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import tabbar from '@/common/tabbar.js';

export default {
	data() {
		return {
			roles: [
				{
					name: '混合方',
					value: 'role-1',
					selectedColor: '#036db7'
				},
				{
					name: '需求方',
					value: 'role-2',
					selectedColor: '#fa5276'
				},
				{
					name: '技能方',
					value: 'role-3',
					selectedColor: '#5ac792'
				}
			]
		};
	},
	computed: {
		...mapState(['role']),
		transRole() {
			return this.role;
		}
	},
	methods: {
		changRole(value) {
			this.update({
				key: 'role',
				value: value.value
			});

			tabbar.change(value.value);
		},

		goItem() {
			uni.navigateTo({
				url: '/pages/home/part/item?id=' + 10
			});
		},

		...mapMutations(['update'])
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 240upx;
	position: relative;

	.tab {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 700upx;
		height: 100upx;
		bottom: -50upx;
		border-radius: 6upx;
	}
}

.content-1 {
	margin-top: 70upx;
}

.content-2 {
	margin-top: 10upx;
}

.content {
	display: flex;
	flex-direction: column;
	width: 100%;
	box-sizing: border-box;
	padding: 0 28upx;

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 96upx;
		border-bottom: 1upx solid;
	}

	.item:last-child {
		border: none;
	}
}
</style>
