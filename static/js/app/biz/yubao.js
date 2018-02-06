$(function() {
	// 业务管理-喜报预报管理-预报
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '标题'
	}, {
		field : 'url',
		title : '状态',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '序号'
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