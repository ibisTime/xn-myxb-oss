$(function() {
	// 品牌顾问-品牌管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '品牌名称',
		search: true
	},{
		field : 'name',
		title : '联系人姓名'
	}, {
		field : 'mobile',
		title : '联系人手机号'
	}, {
		field : 'orderNo',
		title : '品牌顾问'
	}, {
		field : 'remark',
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