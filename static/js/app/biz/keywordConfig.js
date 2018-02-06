$(function() {
	// 业务管理-评论管理-关键字设置
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '关键字',
		search: true
	}, {
		field : 'url',
		title : '权重'
	}, {
		field : 'orderNo',
		title : '作用等级'
	}, {
		field : 'remark',
		title : '反应'
	}, {
		field : 'remark',
		title : '更新人'
	}, {
		field : 'remark',
		title : '更新时间'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		router: 'menu',
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});