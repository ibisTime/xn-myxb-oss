$(function() {
	// 业务管理-品牌顾问管理
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
		title : '主荐品牌',
        search: true,
        type: 'select'
	}, {
		field : 'remark',
		title : '所辖区域',
        search: true,
        type: 'select'
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
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});