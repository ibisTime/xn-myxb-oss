$(function() {
	// 业务管理-积分管理-积分规则
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '规则名称'
	}, {
		field : 'url',
		title : '规则分类'
	}, {
		field : 'orderNo',
		title : '数值'
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