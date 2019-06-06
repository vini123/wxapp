let tabbars = [
	[{
			text: '首页',
			iconPath: '/static/image/tabbar/home.png',
			selectedIconPath: '/static/image/tabbar/homeR1.png'
		},
		{
			text: '首页',
			iconPath: '/static/image/tabbar/home.png',
			selectedIconPath: '/static/image/tabbar/homeR2.png'
		},
		{
			text: '首页',
			iconPath: '/static/image/tabbar/home.png',
			selectedIconPath: '/static/image/tabbar/homeR3.png'
		}
	],
	[
		[{
				text: '发布',
				iconPath: '/static/image/tabbar/publish.png',
				selectedIconPath: '/static/image/tabbar/publishR1.png'
			},
			{
				text: '发布',
				iconPath: '/static/image/tabbar/publish.png',
				selectedIconPath: '/static/image/tabbar/publishR2.png'
			},
			{
				text: '发布',
				iconPath: '/static/image/tabbar/publish.png',
				selectedIconPath: '/static/image/tabbar/publishR3.png'
			}
		],
		[{
				text: '订单',
				iconPath: '/static/image/tabbar/order.png',
				selectedIconPath: '/static/image/tabbar/orderR1.png'
			},
			{
				text: '订单',
				iconPath: '/static/image/tabbar/order.png',
				selectedIconPath: '/static/image/tabbar/orderR2.png'
			},
			{
				text: '订单',
				iconPath: '/static/image/tabbar/order.png',
				selectedIconPath: '/static/image/tabbar/orderR3.png'
			}
		]
	],
	[{
			text: '消息',
			iconPath: '/static/image/tabbar/message.png',
			selectedIconPath: '/static/image/tabbar/messageR1.png'
		},
		{
			text: '消息',
			iconPath: '/static/image/tabbar/message.png',
			selectedIconPath: '/static/image/tabbar/messageR2.png'
		},
		{
			text: '消息',
			iconPath: '/static/image/tabbar/message.png',
			selectedIconPath: '/static/image/tabbar/messageR3.png'
		}
	],
	[{
			text: '我的',
			iconPath: '/static/image/tabbar/mine.png',
			selectedIconPath: '/static/image/tabbar/mineR1.png'
		},
		{
			text: '我的',
			iconPath: '/static/image/tabbar/mine.png',
			selectedIconPath: '/static/image/tabbar/mineR2.png'
		},
		{
			text: '我的',
			iconPath: '/static/image/tabbar/mine.png',
			selectedIconPath: '/static/image/tabbar/mineR3.png'
		}
	]
];

let tabcolors = [
	'#036db7', '#fa5276', '#5ac792'
];

let tabbar = {
	tabbars: tabbars,
	tabcolors: tabcolors,
	change(value) {
		let barIndex = 0;
		let barSecondIndex = 0;
		switch (value) {
			case 'role-1':
				barIndex = 0;
				break;
			case 'role-2':
				barIndex = 1;
				break;
			case 'role-3':
				barIndex = 2;
				barSecondIndex = 1;
				break;
			default:
				break;
		}

		uni.setTabBarStyle({
			selectedColor: this.tabcolors[barIndex]
		});

		this.tabbars.forEach((item, index) => {
			if (index == 1) {
				uni.setTabBarItem({
					index: index,
					text: item[barSecondIndex][barIndex]['text'],
					iconPath: item[barSecondIndex][barIndex]['iconPath'],
					selectedIconPath: item[barSecondIndex][barIndex]['selectedIconPath']
				});
			} else {
				uni.setTabBarItem({
					index: index,
					text: item[barIndex]['text'],
					iconPath: item[barIndex]['iconPath'],
					selectedIconPath: item[barIndex]['selectedIconPath']
				});
			}
		});
		console.log(barIndex, barSecondIndex);
	}
}

export default tabbar;
