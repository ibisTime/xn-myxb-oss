$(function() {
	// 业务管理-品牌管理-订单管理
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
		field : 'productName',
		title : '产品名称'
	}, {
		field : 'price',
		title : '订单价格',
		formatter : moneyFormat
	}, {
		field : 'applyDatetime',
		title : '下单时间',
        search: true,
		formatter : dateTimeFormat
	},  {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select'
	},  {
		field : 'receiver',
		title : '收件人'
	},  {
		field : 'reMobile',
		title : '收件人手机'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805273'
	});

    // 审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-consultant/orderManage_addeddit.html?accountCode=" + selRecords[0].accountNumber + "&check=1";

    });
});