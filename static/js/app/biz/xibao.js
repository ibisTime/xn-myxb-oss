$(function() {
	// 业务管理-喜报预报管理-喜报
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'title',
		title : '标题'
	}, {
		field : 'status',
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