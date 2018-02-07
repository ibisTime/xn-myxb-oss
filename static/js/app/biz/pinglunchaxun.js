$(function() {
	// 业务管理-评论管理-评论查询
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '内容'
	}, {
		field : 'status',
		title : '状态',
        search: true,
		type:'select'
	}, {
		field : 'orderNo',
		title : '评论人'
	}, {
		field : 'remark',
		title : '评论对象',
        search: true,
        type:'select'
	},{
		field : 'remark',
		title : '评论时间',
		formatter : dateTimeFormat
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});