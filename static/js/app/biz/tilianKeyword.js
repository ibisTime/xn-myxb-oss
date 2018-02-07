$(function() {
	// 业务管理-评论管理-提炼关键字
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'keyword',
		title : '关键字',
		search:true
	}, {
		field : 'type',
		title : '类型',
        search: true,
		type:'select'
	}, {
		field : 'updater',
		title : '更新人'
	},{
		field : 'updateTime',
		title : '更新时间',
		formatter : dateTimeFormat
	},{
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});