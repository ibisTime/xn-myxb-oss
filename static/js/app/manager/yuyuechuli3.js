$(function() {
	// 经纪人-专家管理-预约处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '编号'
	}, {
		field : 'url',
		title : '预约人',
        search: true
	}, {
		field : 'orderNo',
		title : '预约人手机号'
	}, {
		field : 'remark',
		title : '店铺'
	}, {
		field : 'remark',
		title : '专家'
	}, {
		field : 'remark',
		title : '预约时间'
	}, {
		field : 'remark',
		title : '预约天数'
	},{
		field : 'remark',
		title : '排班时间'
	}, {
		field : 'remark',
		title : '排班天数'
	}, {
		field : 'remark',
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