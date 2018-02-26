$(function() {
	// 业务管理-美导管理-预约处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'code',
		title : '编号'
	}, {
		field : 'url',
		title : '预约人',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.realName:'-';
        }
	}, {
		field : 'mobile',
		title : '预约人手机号',
		formatter : function (v, data) {
			return data.mryUser?data.mryUser.mobile:'-';
        }
	}, {
		field : 'remark',
		title : '店铺',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.storeName:'-';
        }
	}, {
		field : 'remark',
		title : '美导',
        formatter : function (v, data) {
            return data.user?data.user.realName:'-';
        }
	}, {
		field : 'appointDatetime',
		title : '预约时间',
		formatter : dateTimeFormat
	}, {
		field : 'appointDays',
		title : '预约天数'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
		data : {
            '1':'待排班',
			'2':'已排班待上门',
			'3':'无档期',
			'4':'已上门待下课',
			'5':'已下课待录入',
			'6':'已录入'
		}
	}];

	buildList({
		columns: columns,
		pageCode: '805520',
		deleteCode: '805004'
	});
	// 排班
    $('#paibanBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        window.location.href = "../biz-manager/yuyuechuli_paiban.html?v=1&code=" + selRecords[0].code + "&check=1";
    });
});