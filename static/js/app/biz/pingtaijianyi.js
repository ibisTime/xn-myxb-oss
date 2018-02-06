$(function() {
	// 业务管理-评论管理-平台建议
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '内容'
	}, {
		field : 'url',
		title : '状态',
        search: true,
		type:'select'
	}, {
		field : 'orderNo',
		title : '评论人'
	},{
		field : 'remark',
		title : '评论时间'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});