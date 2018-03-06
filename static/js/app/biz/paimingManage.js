$(function() {
	// 业务管理-美容院管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'periods',
		title : '期数'
	},{
		field : 'periods',
		title : '期数',
		listCode: '805127',
		search : true,
        type : 'select',
        params : {
            type : '2'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
		visible : false
	}, {
		field : 'name',
		title : '店铺'
	}, {
		field : 'refNo',
		title : '店铺',
		listCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'C',
            start : 1,
            limit : 1000
        },
        keyName: 'userId',
        valueName: 'storeName',
        type : 'select',
		search : true,
        visible : false
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
		pageCode: '805128'
	});
    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz/paimingManage_detail.html?v=1&code=" + selRecords[0].code;

    });

});