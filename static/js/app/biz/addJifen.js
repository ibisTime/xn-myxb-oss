$(function() {
	// 业务管理-积分管理-手动加积分
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'realName',
		title : '姓名',
		search: true
	}, {
        field: 'type',
        title: '角色',
        type: 'select',
        listCode: '805906',
        params: {
            parentKey : 'user_kind'
        },
        keyName: 'dkey',
        valueName: 'dvalue',
        search: true
	}, {
		field : 'amount',
		title : '积分余额',
        formatter : moneyFormat
	}, {
		field : 'remark',
		title : '备注'
	}];

    buildList({
        columns: columns,
        pageCode: '805350',
        searchParams: {
            type: 'CLST',
            companyCode: OSS.company
        }
    });
    // 加积分
    $('#addJifenBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz/addJifen_addJifen.html?userId=" + selRecords[0].userId;
    });
    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz/addJifen_addedit.html?v=true&accountNumber=" + selRecords[0].accountNumber;
    });
});