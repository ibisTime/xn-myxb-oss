$(function() {
	// 业务管理-销售天团管理-成果录入
	var columns = [{
		field: '',
		title: '',
		checkbox: true
	}, {
		field: 'code',
		title: '编号'
	}, {
		field: 'url',
		title: '预约人',
		formatter: function(v, data) {
			return data.mryUser ? data.mryUser.realName : '-';
		}
	}, {
		field: 'mobile',
		title: '预约人手机号',
		formatter: function(v, data) {
			return data.mryUser ? data.mryUser.mobile : '-';
		}
	}, {
		field: 'remark',
		title: '店铺',
		formatter: function(v, data) {
			return data.mryUser ? data.mryUser.storeName : '-';
		}
	}, {
		field: 'expert',
		title: '服务商',
		formatter: function(v, data) {
			return data.user ? data.user.realName?data.user.realName+"("+data.user.mobile+")" :data.user.mobile : '-';
		}

	}, {
		field: 'appointDatetime',
		title: '预约时间',
		formatter: dateTimeFormat
	}, {
		field: 'appointDays',
		title: '预约天数'
	}, {
		field: 'planDatetime',
		title: '排班时间',
		formatter: dateTimeFormat
	}, {
		field: 'planDays',
		title: '排班天数'
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		data: {
            '1':'已预约待排班',
            '2':'已排班待上门',
            '3':'无档期',
            '4':'已上门待下课',
            '5':'已下课待成果录入',
            '6':'已录入待经销商审核',
            '7':'经销商已审核',
            '8':'经销商审核不通过',
            '9':'已支付待后台复核',
            '10':'后台审核通过',
            '11':'后台审核不通过'
		}
	}];

	var searchParams = {
		type: 'T',
		status: '7'
	}
	if(sessionStorage.getItem('loginKind') == 'M') {
		searchParams.handler = getUserId()
	}
	buildList({
		columns: columns,
		searchParams: searchParams,
		pageCode: '805520',
		deleteCode: '805004'
	});
	
	// 审核
	$('#checkBtn').off("click").click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		
		window.location.href = "../biz-manager/chengguo1_addedit.html?code=" + selRecords[0].code;
	});
});