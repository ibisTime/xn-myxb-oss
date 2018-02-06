$(function() {
	// 业务管理-讲师管理-资料审核
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '姓名',
		search: true
	}, {
		field : 'url',
		title : '手机号'
	}, {
		field : 'remark',
		title : '专长领域'
	}, {
		field : 'remark',
		title : '授课风格'
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