$(function() {
    // 业务管理-品牌管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'periods',
		title : '期数'
	}, {
        field : 'periods',
        title : '期数',
        listCode: '805127',
        search : true,
        type : 'select',
        params : {
            type : '0'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
        visible : false
    },{
		field : 'refNo',
		title : '品牌',
        search: true,
		type: 'select',
		pageCode: '805256',
		keyName: 'code',
		valueName: 'name',
	}, {
		field : 'rank',
		title : '排名'
	}, {
		field : 'amount',
		title : '业绩额',
		formatter : moneyFormat
	}];
	
	var searchParams = {};
	if(sessionStorage.getItem('loginKind') == 'A') {
        searchParams={
			adviser: getUserId()
        }
	}
	
	buildList({
		columns: columns,
		searchParams : searchParams,
		pageCode: '805278',
	});

    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-consultant/paimingManage_detail.html?v=1&code=" + selRecords[0].code;
    });
});