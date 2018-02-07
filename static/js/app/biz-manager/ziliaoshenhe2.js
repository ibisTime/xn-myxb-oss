$(function() {
	// 业务管理-讲师管理-资料审核
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
		field : 'remark',
		title : '专长领域'
	}, {
		field : 'remark',
		title : '授课风格'
	}, {
		field : 'remark',
		title : '备注'
	}];
// 资料审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-manager/zilisoshenhe2_addeddit.html?v=1&accountCode=" + selRecords[0].accountNumber;

    });
	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});