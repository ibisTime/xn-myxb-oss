$(function() {
	// 业务管理-经纪人管理
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
		title : '级别'
	}, {
		field : 'remark',
		title : '服务对象'
	}, {
		field : 'remark',
		title : '状态',
		search: true,
		type: 'select'
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