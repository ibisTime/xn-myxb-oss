$(function() {
	// 业务管理-专家管理-成果录入
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
		title: '专家',
		formatter: function(v, data) {
			return data.user ? data.user.realName : '-';
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
			'1': '待排班',
			'2': '已排班待上门',
			'3': '无档期',
			'4': '已上门待下课',
			'5': '已下课待录入',
			'6': '已录入'
		}
	}];

	var searchParams = {
		type: 'S',
		status: '5'
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
});