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
		field : 'mobile',
		title : '手机号'
	}, {
		field : 'orderNo',
		title : '推荐人'
	}, {
		field : 'remark',
		title : '经纪人'
	}, {
		field : 'level',
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
		field : 'orderNo',
		title : '序号'
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
        window.location.href = "../biz-manager/zilisoshenhe_addeddit.html?v=1&accountCode=" + selRecords[0].accountNumber;

    });
	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
});