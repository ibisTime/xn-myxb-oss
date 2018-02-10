$(function() {
	// 业务管理-评论管理-平台建议
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '内容'
	}, {
		field : 'status',
		title : '状态',
        search: true,
		type:'select'
	}, {
		field : 'orderNo',
		title : '评论人'
	},{
		field : 'remark',
		title : '评论时间',
		formatter : dateTimeFormat
	}];
// 采纳
    $('#cainaBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-pingtaijianyi_addedit.html?caina=1&code="+selRecords[0].code;
    });
	buildList({
		columns: columns,
		pageCode: '805402',
		deleteCode: '805004'
	});
});