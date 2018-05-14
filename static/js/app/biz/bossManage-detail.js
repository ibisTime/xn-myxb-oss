$(function() {
	// 业务管理-服务商管理-服务商管理
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var check = !!getQueryString('check');
	var details = [{
			field: 'kind',
			type: 'hidden',
			value: 'C'
		}, {
			field: 'realName',
			title: '真实姓名',
			required: true
		}, {
			field: 'mobile',
			title: '手机号',
			required: true,
			mobile: true
		}, {
			field: 'photo',
			title: '头像',
			type: 'img'
		}, {
			field: 'storeName',
			title: '店铺',
			required: true
		}, {
			field: 'adviser',
			title: '团队顾问',
			formatter: function(v, data) {
				return data.adviserUser ? data.adviserUser.realName : '-'
			}
		},
		{
			field: 'gender',
			title: '性别',
			type: 'select',
			data: {
				'1': '男',
				'0': '女'
			},
			required: true
		}, {
			field: 'slogan',
			title: '广告语',
			required: true
		}, {
			field: 'introduce',
			title: '个人简介',
			required: true,
			type: 'doubleLine'
		}, {
			field: 'pdf',
			title: '营业执照',
			type: 'img',
		}, {
			field: 'remark',
			title: '备注',
			readonly: check ? false : true
		}
	];

	buildDetail({
		fields: details,
		code: {
			userId: code
		},
		addCode: '805042',
		editCode: '805095',
		detailCode: '805121',
		view: view
	});

});