$(function() {
	// 业务管理-评论管理-关键字设置
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'keyword',
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
		field : 'updater',
		title : '更新人'
	}, {
		field : 'updateTime',
		title : '更新时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});