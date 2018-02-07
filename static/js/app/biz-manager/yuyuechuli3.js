$(function() {
	// 业务管理-专家管理-预约处理
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
        search: true
	}, {
		field : 'mobile',
		title : '预约人手机号'
	}, {
		field : 'remark',
		title : '店铺'
	}, {
		field : 'expert',
		title : '专家'
	}, {
		field : 'remark',
		title : '预约时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '预约天数'
	},{
		field : 'remark',
		title : '排班时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '排班天数'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select'
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});