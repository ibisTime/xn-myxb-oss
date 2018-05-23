$(function() {
	// 业务管理-品牌管理-订单管理
	var columns = [{
		field: '',
		title: '',
		checkbox: true
	}, {
		field: 'code',
		title: '订单编号'
	}, {
		field: 'applyUser',
		title: '下单用户',
		formatter: function(v, data){
			return data.user.mobile
		}
	}, {
		field: 'applyDatetime',
		title: '下单时间',
		title1: '下单时间',
		search: true,
		type: 'date',
		field1: 'applyStartDatetime',
		field2: 'applyEndDatetime',
		twoDate: true,
		formatter: dateTimeFormat
	}, {
		field: 'totalAmount',
		title: '订单价格',
		formatter: moneyFormat
	}, {
		field: 'amount',
		title: '实际支付',
		formatter: moneyFormat
	}, {
		field: 'paytype',
		title: '支付方式',
		type: 'select',
		key: 'user_level_service',
		formatter: Dict.getNameForList('user_level_service')
	}, {
		field: 'status',
		title: '状态',
		search: true,
		type: 'select',
		data: {
			'0': '待付款',
			'1': '已付款',
			'2': '用户取消',
			'3': '平台取消',
			'4': '待评价',
			'5': '已完成'
		}
	}, {
		field: 'receiver',
		title: '收件人'
	}, {
		field: 'reMobile',
		title: '收件人手机'
	}];
	var searchParamsField = {};
	if(sessionStorage.getItem('loginKind') == 'A') {
		searchParamsField = {
			adviser: getUserId()
		}
	}
	buildList({
		columns: columns,
		searchParams: searchParamsField,
		pageCode: '805275'
	});

	// 取消订单
	$('#cancelBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		
		if(selRecords[0].status != '0') {
			toastr.info('该订单不是可取消状态')
			return ;
		}
		
		confirm("确定取消订单？").then(function() {
            reqApi({
                code: '805273',
                json: {
                    userId: getUserId(),
                    code: selRecords[0].code
                }
            }).then(function() {
                sucList();
            });

        },function() {})
	});
	// 发货
	$('#fahuoBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		if(selRecords[0].status != '1') {
			toastr.info('该订单不是待发货状态')
			return ;
		}
		window.location.href = "../biz-consultant/orderManage_addedit.html?code=" + selRecords[0].code+ "&status="+ selRecords[0].status;
	});
	
	// 详情
	$('#detailBtn').off("click").click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "../biz-consultant/orderManage_addedit.html?code=" + selRecords[0].code + "&v=1&status="+ selRecords[0].status;
	});
});