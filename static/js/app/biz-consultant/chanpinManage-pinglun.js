$(function() {
	// 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'content',
		title : '内容'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
        listCode: '805906',
        params :{
		    parentKey : 'comment_status'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
	}, {
		field : 'nickname',
		title : '评论人'
	}, {
		field : 'commentDatetime',
		title : '评论时间',
        formatter : dateTimeFormat
	}];

    var searchParams = {
        entityCode : code
    }

	buildList({
		columns: columns,
        searchParams : searchParams,
		pageCode: '805425',
		deleteCode: '805004'
	});

	$('#addBtn').css('display','none');
	$('#editBtn').css('display','none');
	$('#chakanpinglunBtn').css('display','none');
	$('#upBtn').css('display','none');
	$('#downBtn').css('display','none');
	// $('#detailBtn').css('display','none');
	
	
    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './meidaoManage_pinglunDetail.html?v=true&code='+selRecords[0].code;
    });
});