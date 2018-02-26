$(function() {
	// 业务管理-评论管理-关键字设置
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'word',
		title : '关键字',
		search: true
	}, {
		field : 'weight',
		title : '权重'
	}, {
		field : 'level',
		title : '作用等级'
	}, {
		field : 'reaction',
		title : '反应'
	}, {
		field : 'updater',
		title : '更新人'
	}, {
		field : 'updateDatetime',
		title : '更新时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805413'
	});
    // 删除
    $('#deleteBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定删除？').then(function () {
            reqApi({
                code: 805411,
                json: {
                    code: selRecords[0].code
                }
            }).then(function(){
                sucList();
            });
        })

    });
});