$(function() {
	// 业务管理-评论管理-评论审核
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
		data :{
			'A':'已发布',
			'B':'审批通过',
			'C':'审批不通过',
			'D':'被过滤',
			'AB':'已发布和审核通过'
		}
	}, {
		field : 'nickname',
		title : '评论人'
	}, {
		field : 'entityName',
		title : '评论对象'
	},{
		field : 'commentDatetime',
		title : '评论时间',
		formatter : dateTimeFormat
	}];

	buildList({
		columns: columns,
		pageCode: '805425',
		deleteCode: '805004'
	});
	// 审核
    $('#checkBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == 'D') {
            window.location.href = "../biz/pinglunshenhe_addedit.html?code=" + selRecords[0].code + "&check=1";

        }else {
        	toastr.info('该状态下不能进行审核')
		}
    });
});