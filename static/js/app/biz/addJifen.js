$(function() {
	// 业务管理-积分管理-手动加积分
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
		field : 'role',
		title : '角色',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '积分余额'
	}, {
		field : 'remark',
		title : '备注'
	}];
// 加积分
    $('#addJifenBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz/addJifen-addJifen.html?accountCode=" + selRecords[0].accountNumber;
    });
	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});