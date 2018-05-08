$(function() {
	// 业务管理-美容院管理-老板管理
	var code = getQueryString('code');
	var userId = getQueryString('userId');
	var check = getQueryString('check');
	var view = !!getQueryString('v');
	var level = getQueryString('level') || 1;

	var shenhe = [{
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
		type: 'img',
		single: true,
		required: true
	}, {
		field: 'storeName',
		title: '店铺',
		required: true
	},{
		field: 'adviser',
		title: '团队顾问',
		required: true,
		type: 'select',
		pageCode: '805120',
		params: {
			companyCode: OSS.company,
			kind: 'A',
		},
		keyName: 'userId',
		valueName: '{{realName.DATA}}'
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
		field: 'remark',
		title: '备注',
		readonly: check ? false : true
	}];

	// 新增和修改
	var columns = [{
		field: 'kind',
		type: 'hidden',
		value: 'C'
	}, {
		field: 'loginName',
		title: '登录名',
		hidden: view ? false : true
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
		field: 'storeName',
		title: '店铺',
		required: true
	}, {
		field: 'adviser',
		title: '团队顾问',
		required: true,
		type: 'select',
		pageCode: '805120',
		params: {
			companyCode: OSS.company,
			kind: 'A',
		},
		keyName: 'userId',
		valueName: '{{realName.DATA}}'
	}, {
		field: 'photo',
		title: '头像',
		type: 'img',
		single: true,
		required: true
	}, {
		field: 'level',
		title: '用户等级',
		type: 'hidden'
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
		field: 'slogan',
		title: '广告语',
		required: true
	}, {
		field: 'introduce',
		title: '个人简介',
		required: true,
		type: 'doubleLine'
	}, {
		field: 'remark',
		title: '备注',
		readonly: check ? false : view
	}];

	// 审核用按钮
	var buttons = [{
		title: '通过',
		handler: function() {
			if($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.approveResult = '1';
				data.kind = 'C';
				data.userId = code;
				data.approver = getUserName();
				data.photo = $("#photo").find('.img-ctn').attr("data-src");
				reqApi({
					code: '805044',
					json: data
				}).done(function(data) {
					sucDetail();
				});
			}
		}
	}, {
		title: '不通过',
		handler: function() {
			if($('#jsForm').valid()) {
				var data = $('#jsForm').serializeObject();
				data.approveResult = '0';
				data.kind = 'C';
				data.userId = code;
				data.approver = getUserName();
				data.photo = $("#photo").find('.img-ctn').attr("data-src");
				reqApi({
					code: '805044',
					json: data
				}).done(function(data) {
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
	if(check) {
		var options = {
			fields: shenhe,
			code: {
				userId: code
			},
			view: false,
			buttons: buttons,
			beforeSubmit: function(data) {
				data.photo = $("#photo").find('.img-ctn').attr("data-src");
				data.userId = code;
				return data
			},
			addCode: '805042',
			editCode: '805044',
			detailCode: '805121',
		};
		buildDetail(options);
	} else {
		buildDetail({
			fields: columns,
			code: {
				userId: code
			},
			beforeSubmit: function(data) {
				data.userId = code;
				data.loginName = data.mobile;
				if(data.level == "") {
					delete data.level
				}
				return data;
			},
			addCode: '805042',
			editCode: '805095',
			detailCode: '805121',
			view: view
		});
	}

});