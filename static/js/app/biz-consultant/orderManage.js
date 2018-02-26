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
		field : 'realName',
		title : '下单用户',
        // search: true,
        // type: 'select',
        // listCode: '805120',
        // keyName : 'realName',
        // searchName :'realName',
        // valueName: 'realName',
		// params : {
		// 	start : 1,
		// 	limit : 10
		// }
	}, {
		field : 'productName',
		title : '产品名称'
	}, {
		field : 'amount',
		title : '订单价格',
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
	},  {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
		data :{'0':'待审核','1':'审核未通过','2':'待发货','3':'待评价','4':'已完成'}
	},  {
		field : 'receiver',
		title : '收件人'
	},  {
		field : 'reMobile',
		title : '收件人手机'
	}, {
		field : 'approveNote',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805273'
	});

    // 审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length >0) {

            window.location.href = "../biz-consultant/orderManage_addedit.html?code=" + selRecords[0].code + "&check=1";

        }

    });
    // 发货
    $('#fahuoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '2') {
        	// 发货
            window.location.href = "../biz-consultant/orderManage_addedit.html?fahuo=true&code=" + selRecords[0].code;

        }else {
        	toastr.info('该订单不是待发货状态')
		}

    });
});