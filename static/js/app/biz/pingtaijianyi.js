$(function() {
	// 业务管理-评论管理-平台建议
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},  {
		field : 'score',
		title : '评分'
	},{
		field : 'content',
		title : '内容'
	}, {
		field : 'status',
		title : '状态',
        search: true,
		type:'select',
		data : {
            'A':'已发布',
			'B':'审批通过',
			'C':'审批不通过',
			'D':'被过滤'
		}
	}, {
		field : 'realName',
		title : '评论人'
	},{
		field : 'commentDatetime',
		title : '评论时间',
		formatter : dateTimeFormat
	},{
        field : 'isAccept',
        title : '是否采纳',
        search: true,
        type:'select',
        data : {
            '0':'待采纳',
            '1':'未采纳',
            '2':'已采纳'
        }
    }];

	buildList({
		columns: columns,
		pageCode: '805405',
		deleteCode: '805004'
	});
    // 采纳
    $('#cainaBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].isAccept == '0' && selRecords[0].status != 'C' && selRecords[0].status != 'D') {
            window.location.href = "../biz/pingtaijianyi_addedit.html?caina=1&code="+selRecords[0].code;
        }else {
            toastr.info('该状态下不可进行采纳')
        }
    });
    // 审核
    $('#checkBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == 'D') {
            window.location.href = "../biz/pingtaijianyi_addedit.html?v=1&check=1&code="+selRecords[0].code;
        }else {
            toastr.info('该状态下不可审核')
        }
    });
});