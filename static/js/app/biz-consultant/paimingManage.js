$(function() {
    console.log('666');
    // 业务管理-品牌管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '期数',
		search: true,
        type: 'select'
	}, {
		field : 'url',
		title : '品牌',
        search: true
	}, {
		field : 'orderNo',
		title : '排名'
	}, {
		field : 'remark',
		title : '业绩额',
		formatter : moneyFormat
	}];

	buildList({
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
    // 调整
    $('#adjustBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-consultant/paimingManage_addedit.html?accountCode=" + selRecords[0].accountNumber;

    });
});