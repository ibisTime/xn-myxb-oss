$(function() {
	// 业务管理-喜报预报管理-喜报
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'title',
		title : '标题'
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
        data : {
            '0':'待发布',
            '1':'已上架',
            '2':'已下架'
        }
	}, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		searchParams : {
			type : '0'
		},
		pageCode: '805435',
		deleteCode: '805004'
	});
});