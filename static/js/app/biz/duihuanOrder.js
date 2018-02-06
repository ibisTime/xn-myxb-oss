$(function() {
	// 业务管理-积分管理-兑换订单处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '订单编号',
		search: true
	}, {
		field : 'url',
		title : '下单用户',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '商品名称'
	}, {
		field : 'orderNo',
		title : '积分价格'
	}, {
		field : 'orderNo',
		title : '下单时间',
		search: true
	}, {
		field : 'orderNo',
		title : '状态',
        search: true,
        type: 'select'
	},{
        field : 'orderNo',
        title : '收件人'
    }, {
        field : 'orderNo',
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