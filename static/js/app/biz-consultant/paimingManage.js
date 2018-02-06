$(function() {
	// 业务管理-品牌管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '期数',
		search: true,
        type: 'select'
	}, {
		field : 'url',
		title : '品牌',
        search: true
	}, {
		field : 'orderNo',
		title : '排名'
	}, {
		field : 'remark',
		title : '业绩额'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});