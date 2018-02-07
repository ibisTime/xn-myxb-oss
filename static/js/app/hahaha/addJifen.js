$(function() {
	// 心情管理-按照日期查询
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'date',
		title : '日期',
		search: true
	}, {
		field : 'mobile',
		title : '手机号'
	}, {
		field : 'role',
		title : '角色',
		search: true,
		type: 'select'
	}, {
		field : 'schedule',
		title : '事务'
	}, {
		field : 'mind',
		title : '心情'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});