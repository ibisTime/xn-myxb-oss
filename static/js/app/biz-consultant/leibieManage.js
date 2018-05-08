$(function() {
	// 业务管理-品牌管理-类别管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '名称',
		search: true
	}, {
        field : 'status',
        title : '状态',
        search: true,
        type: 'select',
        data : {'0':'未上架','1':'已上架','2':'已下架'}
    }, {
        field : 'orderNo',
        title : 'UI次序'
    }, {
        field : 'updater',
        title : '最新修改人'
    }, {
        field : 'updateDatetime',
        title : '最新修改时间',
        formatter : dateTimeFormat
    }, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805245',
	});
    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status == '1') {
            toastr.info('已上架！');
            return;
        }
        confirm('确定上架？').then(function () {
        	reqApi({
                    code: 805242,
                    json: {
                        code: selRecords[0].code,
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
        
        if (selRecords[0].status == '0'||selRecords[0].status == '2') {
            toastr.info('不是可下架的状态！');
            return;
        }
        confirm('确定下架？').then(function () {
            reqApi({
                code: 805243,
                json: {
                    code: selRecords[0].code,
                }
            }).then(function(){
                sucList();
            });
        })
    });
});