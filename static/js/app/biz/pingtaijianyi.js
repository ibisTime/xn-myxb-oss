$(function() {
	// 业务管理-评论管理-平台建议
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
		type:'select',
		data : {
            '0':'待采纳',
			'1':'未采纳',
			'2':'已采纳'
		}
	}, {
		field : 'commenter',
		title : '评论人'
	},{
		field : 'commentDatetime',
		title : '评论时间',
		formatter : dateTimeFormat
	}];

	buildList({
		columns: columns,
		pageCode: '805402',
		deleteCode: '805004'
	});
    // 采纳
    $('#cainaBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '0') {
            window.location.href = "../biz/pingtaijianyi_addedit.html?caina=1&code="+selRecords[0].code;
        }else {
            toastr.info('该状态下不可进行采纳')
        }
    });
});