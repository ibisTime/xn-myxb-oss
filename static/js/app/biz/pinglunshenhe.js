$(function() {
	// 业务管理-评论管理-评论审核
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
	}, {
		field : 'remark',
		title : '评论对象'
	},{
		field : 'remark',
		title : '评论时间',
		formatter : dateTimeFormat
	}];
// 审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz/pinglunshenhe_addeddit.html?accountCode=" + selRecords[0].accountNumber + "&check=1";
    });
	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});