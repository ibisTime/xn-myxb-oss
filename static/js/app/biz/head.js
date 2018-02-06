$(function() {
	// 业务管理-头像管理-头像管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '图片'
	}, {
		field : 'url',
		title : '针对角色',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '针对等级',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '次序'
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