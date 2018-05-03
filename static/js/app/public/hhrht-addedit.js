$(function() {
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'id',
		hidden: true
	}, {
		field: 'remark',
		type: 'hidden',
		value: '合伙人合同'
	},{
		title: '内容',
		field: 'cvalue',
		type: 'textarea',
		required: true
	}];
	
	buildDetail({
		fields: fields,
		code: {
			ckey: 'HHRHT'
		},
		editCode: '805911',
		detailCode: '805917',
		buttons: [{
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					reqApi({
						code: '805911',
						json: data
					}).done(function(data) {
						toastr.success('操作成功');
					});
				}
			}
		}]
	});
});