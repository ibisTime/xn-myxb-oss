$(function() {
	// 业务管理-经纪人管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '姓名',
		search: true
	}, {
		field : 'mobile',
		title : '手机号'
	}, {
		field : 'level',
		title : '级别'
	}, {
		field : 'remark',
		title : '服务对象',
        pageCode: '805906',
		params : {
			parentKey: 'user_kind'
		},
        keyName: 'dkey',
        valueName: 'dvalue'
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
        pageCode: '805906',
        params : {
            parentKey: 'user_status'
        },
        keyName: 'dkey',
        valueName: 'dvalue'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});