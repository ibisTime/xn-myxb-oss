$(function() {
	var code;
	reqApi({
		code: '805917',
		json: {
			ckey: 'telephone'
		},
		sync: true
	}).then(function(data) {
		code = data.id;
	});
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'remark',
		type: 'hidden',
		value: '服务热线'
	},{
		title: '内容',
		field: 'cvalue',
		required: true
	}];
	
	var options = {
		fields: fields,
		code: code,
		editCode: '805911',
		detailCode: '805916',
		buttons: [{
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data['id'] = data['code'];
                    var a = /^0\d{2,3}-[1-9]\d{6,7}$/;
                    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                    if(!a.test(data.cvalue) && !myreg.test(data.cvalue)) {
                        toastr.info('请输入合法的号码');
                        return
					}else {
                    	reqApi({
                        code: '805911',
                        json: data
                    }).done(function(data) {
                        toastr.success('操作成功');
                    });

					}

				}
			}
		}]
	};
	
	buildDetail(options);
});