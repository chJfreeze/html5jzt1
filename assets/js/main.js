/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body');

	// 浏览器特性检测模块 - 响应式断点设置
	// 作用：定义不同设备宽度的响应式断点
	// 断点参数说明：
	// xlarge: 1281px-1680px（大屏设备）
	// large: 981px-1280px（桌面设备）
	// medium: 737px-980px（平板设备）
	// small: 小于736px（手机设备）
	breakpoints({
		xlarge: [ '1281px', '1680px' ],
		large: [ '981px', '1280px' ],
		medium: [ '737px', '980px' ],
		small: [ null, '736px' ]
	});

	// 移动端菜单切换机制 - 标题栏创建
	// 执行流程：
	// 1. 创建包含toggle按钮和标题的标题栏
	// 2. 将标题栏插入页面body末尾
	$(
		'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	).appendTo($body);

	// 导航面板初始化模块
	// 功能：创建响应式导航面板并配置交互参数
	// 配置参数说明：
	// delay: 500ms 交互延迟
	// hideOnClick: 点击外部区域自动隐藏
	// resetScroll: 打开时重置滚动位置
	// side: 'left' 左侧滑出菜单
	$(
		'<div id="navPanel">' +
			'<nav>' +
				$('#nav').navList() +
			'</nav>' +
		'</div>'
	)
	.appendTo($body)
	.panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $body,
		visibleClass: 'navPanel-visible'
	});

})(jQuery);