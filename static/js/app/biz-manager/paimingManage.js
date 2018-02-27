$(function() {
    // 业务管理-品牌管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'periods',
		title : '期数',
        // search: true,
        // type: 'select'
	}, {
		field : 'name',
		title : '专家',
        // search: true,
        // type: 'select',
        // listCode: '805258',
        // keyName : 'code',
        // searchName :'code',
        // valueName: 'name'
	}, {
		field : 'rank',
		title : '排名'
	}, {
		field : 'amount',
		title : '业绩额',
		formatter : moneyFormat
	}];

	buildList({
		columns: columns,
		searchParams : {
			type:'1'
		},
		pageCode: '805123',
		deleteCode: '805004'
	});
    // 调整
    // $('#adjustBtn').click(function() {
    //     var selRecords = $('#tableList').bootstrapTable('getSelections');
    //     if (selRecords.length <= 0) {
    //         toastr.info("请选择记录");
    //         return;
    //     }
    //     window.location.href = "../biz-consultant/paimingManage_addedit.html?accountCode=" + selRecords[0].accountNumber;
    //
    // });
});