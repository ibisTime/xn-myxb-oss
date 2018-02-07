$(function() {
	// 经纪人-美导管理-预约处理
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
		field : 'remark',
		title : '美导'
	}, {
		field : 'remark',
		title : '预约时间'
	}, {
		field : 'remark',
		title : '预约天数'
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