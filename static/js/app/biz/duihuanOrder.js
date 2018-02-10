$(function() {
	// 业务管理-积分管理-兑换订单处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'code',
		title : '订单编号',
		search: true
	}, {
		field : 'applyUser',
		title : '下单用户',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '商品名称'
	}, {
		field : 'price',
		title : '积分价格'
	}, {
		field : 'applyDatetime',
		title : '下单时间',
		search: true,
		formatter: dateTimeFormat
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
		data :{'0':'待审核','1':'无库存已取消','2':'待发货','3':'待评价','4':'已完成'}
	},{
        field : 'receiver',
        title : '收件人'
    }, {
        field : 'reMobile',
        title : '收件人手机'
    }, {
		field : 'remark',
		title : '备注'
	}];


	buildList({
		columns: columns,
		pageCode: '805293'
	});
    // 取消
    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定取消？').then(function () {
            reqApi({
                code: 805292,
                json: {
                    code: selRecords[0].code,
                    updater : getUserName()
                }
            }).then(function(){
                sucList();
            });
        })

    });
    // 发货
});