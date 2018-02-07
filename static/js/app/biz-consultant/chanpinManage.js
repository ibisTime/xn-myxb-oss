$(function() {
	// 业务管理-品牌管理-产品管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '产品名称',
		search: true
	}, {
		field : 'url',
		title : '所属品牌',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '是否推荐',
        search: true,
        type: 'select'
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '次序'
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