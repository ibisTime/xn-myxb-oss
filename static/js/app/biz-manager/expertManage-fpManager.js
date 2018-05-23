$(function() {
	// 业务管理-销售精英-分配经纪人
	var userId = getQueryString('userId');
	var view = !!getQueryString('v');
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: 'S'
	}, {
		field: 'loginName',
		title: '登录名',
		readonly: view ? true : code ? true : false,
		required: true,
	}, {
		field: 'realName',
		title: '真实姓名',
		required: true
	}, {
		field: 'mobile',
		title: '手机号'
	}, {
		field: 'level',
		title: '等级',
		type: 'select',
		listCode: '805906',
		params: {
			parentKey: 'level'
		},
		keyName: 'dkey',
		valueName: 'dvalue'
	}, {
		field: 'status',
		title: '状态',
		search: true,
		type: 'select',
		formatter: Dict.getNameForList('user_status'),
		key: 'user_status'
	}, {
		field: 'speciality',
		title: '专长领域'
	}, {
		field: 'styleName',
		title: '授课风格'
	}, {
		field: 'photo',
		title: '头像',
		type: 'img',
		single: true
	}, {
		field: 'gender',
		title: '性别',
		type: 'select',
		data: {
			'1': '男',
			'0': '女'
		},
		required: true
	}, {
		field: 'introduce',
		title: '个人简介',
		required: true
	}, {
		field: 'remark',
		title: '备注'
	}, {
		field: 'handler',
		title: '经纪人',
		type: 'select',
		pageCode: '805120',
		params: {
			companyCode: OSS.company,
			kind: 'M',
			status:"0"
		},
		keyName: 'userId',
		valueName: 'realName',
		readonly: false
	}];

	var buttons = [{
		title: '确定',
		handler: function() {
			if($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.updater = getUserName();
				data.userId = userId;
				reqApi({
					code: '805097',
					json: data
				}).done(function() {
					sucDetail();
				});
			}
		}
	}, {
		title: '返回',
		handler: function() {
			goBack();
		}
	}];

	buildDetail({
		fields: fields,
		code: {
			userId: userId
		},
		detailCode: '805121',
		view: view,
		buttons: buttons
	});
	// }

});