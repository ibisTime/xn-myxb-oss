$(function() {
	// 业务管理-积分管理-手动加积分
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
		field : 'orderNo',
		title : '角色',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '积分余额'
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