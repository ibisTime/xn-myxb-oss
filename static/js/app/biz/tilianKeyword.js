$(function() {
	// 业务管理-评论管理-提炼关键字
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'word',
		title : '关键字',
		search:true
	}, {
		field : 'updater',
		title : '更新人'
	},{
		field : 'updateDatetime',
		title : '更新时间',
		formatter : dateTimeFormat
	},{
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
        searchParams : {
            type : '1'
        },
		pageCode: '805413',
		deleteCode: '805411'
	});
});