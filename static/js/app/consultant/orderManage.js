$(function() {
	// 品牌顾问-订单管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'code',
		title : '订单编号',
		search: true
	}, {
		field : 'url',
		title : '下单用户',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '产品名称'
	}, {
		field : 'price',
		title : '订单价格',
		formatter : moneyFormat
	}, {
		field : 'remark',
		title : '下单时间',
        search: true,
		formatter : dateTimeFormat
	},  {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select'
	},  {
		field : 'remark',
		title : '收件人'
	},  {
		field : 'mobile',
		title : '收件人手机'
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