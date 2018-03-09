$(function() {
	// 业务管理-积分管理-兑换订单处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'code',
		title : '订单编号'
	}, {
		field : 'realName',
		title : '下单用户',
        // search: true,
        // type: 'select'
	}, {
		field : 'productName',
		title : '商品名称'
	}, {
		field : 'amount',
		title : '积分价格',
        formatter : moneyFormat
	}, {
		field : 'applyDatetime',
		title : '下单时间',
		title1 : '下单时间',
		search: true,
        type : 'date',
        field1: 'applyStartDatetime',
        field2: 'applyEndDatetime',
        twoDate: true,
		formatter: dateTimeFormat
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
		data :{'0':'待发货','1':'待收货','2':'待评价','3':'已完成','4':'无货取消'}
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
		pageCode: '805294'
	});
    // 发货
    $('#fahuoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '0') {
            // 发货
            window.location.href = "../biz/duihuanOrder_addedit.html?fahuo=true&code=" + selRecords[0].code;

        }else {
            toastr.info('该订单不是待发货状态')
        }

    });
    // 取消
    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '0') {
            // 取消
            confirm('确认取消订单？').then(function () {
                reqApi({
                    code: '805292',
                    json: {
                        code:selRecords[0].code,
                        updater : getUserName()
                    }
                }).done(function() {
                    sucList();
                });
            })

        }else {
            toastr.info('该订单不能取消')
        }

    });
});