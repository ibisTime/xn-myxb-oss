$(function() {
	// 业务管理-评论管理-关键字设置
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'word',
		title : '关键字',
		search: true
	}, {
		field : 'updater',
		title : '更新人'
	}, {
		field : 'updateDatetime',
		title : '更新时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		searchParams : {
			type : '0'
		},
		pageCode: '805413',
        deleteCode : '805411'
	});

});