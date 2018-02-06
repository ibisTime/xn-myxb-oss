$(function() {
	// 业务管理-积分管理-兑换商品管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '名称',
		search: true
	}, {
		field : 'url',
		title : '积分'
	}, {
		field : 'orderNo',
		title : '库存'
	}, {
		field : 'orderNo',
		title : '查看对象',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '次序'
	}, {
		field : 'orderNo',
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