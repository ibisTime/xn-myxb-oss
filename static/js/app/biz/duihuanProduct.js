$(function() {
	// 业务管理-积分管理-兑换商品管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '名称',
		search: true
	}, {
		field : 'url',
		title : '积分'
	}, {
		field : 'orderNo',
		title : '库存'
	}, {
		field : 'orderNo',
		title : '查看对象',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '次序'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805285',
        addCode: '805280',
        editCode: '805281'
	});

    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定上架？').then(function () {
            reqApi({
                code: 805283,
                json: {
                    code: selRecords[0].code,
                    orderNo: selRecords[0].orderNo,
                    updater : getUserName()
                }
            }).then(function(){
                sucList();
            });
        })

    });
    // 下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定下架？').then(function () {
            reqApi({
                code: 805284,
                json: {
                    code: selRecords[0].code,
                    updater : getUserName()
                }
            }).then(function(){
                sucList();
            });
        })

    });
});