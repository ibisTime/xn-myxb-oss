$(function() {
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'title',
        title: '标题',
		required: true
    }, {
        title: '内容',
        field: 'content',
		type: 'textarea',
		normalArea: true,
		required: true
    }, {
        title: '序号',
        field: 'orderNo',
		required: true
    }, {
        title: '备注',
        field: 'remark',
    }, {
        title: '状态',
        field: 'status',
        value:'1',
        type:'hidden'
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		view: view,
		addCode:'805440',
		editCode: '805441',
		detailCode: '805446',
	});
});


