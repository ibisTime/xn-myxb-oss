$(function() {
	// 业务管理-美导管理-资料审核
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '姓名',
		search: true
	}, {
		field : 'url',
		title : '手机号'
	}, {
		field : 'orderNo',
		title : '推荐人'
	}, {
		field : 'remark',
		title : '经纪人'
	}, {
		field : 'remark',
		title : '等级'
	}, {
		field : 'remark',
		title : '积分余额'
	}, {
		field : 'remark',
		title : '专长领域'
	}, {
		field : 'remark',
		title : '授课风格'
	}, {
		field : 'remark',
		title : '是否推荐'
	}, {
		field : 'remark',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		router: 'menu',
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});