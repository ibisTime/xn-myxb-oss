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
            type : '1'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
        visible : false
    }, {
		field : 'name',
		title : '专家'
	}, {
        field : 'refNo',
        title : '专家',
        listCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'S',
            start : 1,
            limit : 100
        },
        keyName: 'userId',
        valueName: 'realName',
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
if(sessionStorage.getItem('loginKind') == 'M') {
	var searchParams = {
        type:'1',
		handler : getUserId()
    }
}else {
    var searchParams = {
        type:'1'
    }
}
	buildList({
		columns: columns,
		searchParams : searchParams,
		pageCode: '805123',
		deleteCode: '805004'
	});
    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-manager/paimingManage_detail.html?v=1&code=" + selRecords[0].code;

    });
});