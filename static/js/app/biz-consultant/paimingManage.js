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
        listCode: '805258',
        keyName : 'code',
        searchName :'code',
        valueName: 'name'
	}, {
		field : 'rank',
		title : '排名'
	}, {
		field : 'amount',
		title : '业绩额',
		formatter : moneyFormat
	}];

	if(sessionStorage.getItem('loginKind') == 'A') {
        var searchParams = {
            type:'0',
			adviser : getUserId()
        }
	}else {
        var searchParams = {
            type:'0'
        }
	}

	buildList({
		columns: columns,
		searchParams : searchParams,
		pageCode: '805259',
		deleteCode: '805004'
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