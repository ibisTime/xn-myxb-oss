$(function() {
	// 业务管理-销售天团管理-销售天团管理
	var code = getQueryString('code');
	var mobile = getQueryString('mobile');
	var view = !!getQueryString('v');
	var level = getQueryString('level') || 1;
	var style = [];

	reqApi({
		code: '805906',
		json: {
			parentKey: 'style'
		}
	}, true).then(function(data) {
		for(var v = 0; v < data.length; v++) {
			var temp = {};
			temp.key = data[v].dkey;
			temp.value = data[v].dvalue;
			style.push(temp);
		}
		// 新增和修改
		var columns = [{
			field: 'kind',
			type: 'hidden',
			value: 'S'
		}, {
			field: 'loginName',
			title: '登录名',
			hidden: !view
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
			field: 'level',
			title: '用户等级',
			type: 'select',
			key: 'user_level_specialist',
			formatter: Dict.getNameForList('user_level_specialist'),
			required: true
		}, {
			field: 'speciality',
			title: '专长领域',
			required: true
		}, {
			field: 'style',
			title: '授课风格',
			type: 'checkbox',
			items: style,
			required: true
		}, {
			field: 'photo',
			title: '头像',
			type: 'img',
			single: true,
			required: true
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
			readonly: view
		}];
		buildDetail({
			fields: columns,
			code: {
				userId: code
			},
			beforeSubmit: function(data) {
				data.style = data.style.toString();
				data.userId = code;
				data.loginName = data.mobile;
				return data;
			},
			addCode: '805042',
			editCode: '805095',
			detailCode: '805121',
			view: view
		});

	});
});