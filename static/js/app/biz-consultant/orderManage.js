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
		formatter: function(v, data) {
			var kindData = {
				'C': '经销商',
				'B': '合伙人',
				'A': '品牌顾问',
				'M': '经纪人',
				"S": "销售天团",
				'T': '服务商',
			}
			return data.user.mobile + "(" + kindData[data.user.kind] + ")";
		}
	}, {
		field: 'totalAmount',
		title: '订单价格',
		formatter: moneyFormat
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
		field: 'status',
		title: '状态',
		search: true,
        type: 'select',
        key: 'order_status',
        formatter: Dict.getNameForList('order_status')
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

		if(selRecords[0].status != '1') {
			toastr.info('该订单不是可取消状态')
			return;
		}

		confirm("确定取消订单？").then(function() {
			reqApi({
				code: '805526',
				json: {
					updater: getUserId(),
					code: selRecords[0].code
				}
			}).then(function() {
				sucList();
			});

		}, function() {})
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
			return;
		}
		window.location.href = "../biz-consultant/orderManage_addedit.html?code=" + selRecords[0].code + "&status=" + selRecords[0].status;
	});

	// 详情
	$('#detailBtn').off("click").click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		window.location.href = "../biz-consultant/orderManage_addedit.html?code=" + selRecords[0].code + "&v=1&status=" + selRecords[0].status+"&kind="+selRecords[0].user.kind;
	});

	// 厂家转账
	$('#cjzzBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}

		if(selRecords[0].user.kind != 'C') {
			toastr.info('该订单不是经销商的订单')
			return;
		}
		if(selRecords[0].status != '5' && selRecords[0].status != '6') {
			toastr.info('该订单不是可转账的状态')
			return;
		}
		var dw = dialog({
			content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
				'<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">厂家转账</li></ul>' +
				'</form>'
		});

		dw.showModal();

		buildDetail({
            container: $('#formContainer'),
			fields: [{
				field: 'transferAmount',
				title: '转账金额',
				amount: true,
				required: true,
			}],
			buttons: [{
				title: '确定',
				handler: function() {
					var data = $('#popForm').serializeObject();
					data.code = selRecords[0].code;
					reqApi({
						code: '805525',
						json: data
					}).done(function(data) {
						sucList();
						dw.close().remove();
					});
				}
			}, {
				title: '取消',
				handler: function() {
					dw.close().remove();
				}
			}]
		});

		dw.__center();
	});
});