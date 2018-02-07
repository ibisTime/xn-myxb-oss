$(function() {
	// 业务管理-美容院管理-老板管理
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
		field : 'orderNo',
		title : '推荐人'
	}, {
		field : 'remark',
		title : '店铺'
	}, {
		field : 'level',
		title : '等级'
	}, {
		field : 'remark',
		title : '积分余额'
	},{
		field : 'remark',
		title : '团队顾问'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select'
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