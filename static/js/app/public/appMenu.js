$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '菜单名称',
		field: 'name',
        search: true
	}, {
		title: '菜单图片(未选中)',
		field: 'pic',
        formatter: function (v) {
        	return '<img src="' + OSS.picBaseUrl + '/' + v + '" style="max-width:40px;max-height:40px;"/>';
        }
	}, {
		title: '菜单图片(选中)',
		field: 'url',
        formatter: function (v) {
        	return '<img src="' + OSS.picBaseUrl + '/' + v + '" style="max-width:40px;max-height:40px;"/>';
        }
	}, {
		title: '备注',
		field: 'remark'
	}];
	buildList({
		columns: columns,
		pageCode: '805805',
		deleteCode: '805801',
		searchParams:{
			companyCode: OSS.company,
			type: 1
		}
	});
});