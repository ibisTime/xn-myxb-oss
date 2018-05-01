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
        data : {'1':'未上架','2':'已上架','3':'已下架'}
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
		pageCode: '805120',
		deleteCode: '805004'
	});
    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == '1' || selRecords[0].status == '3') {
            confirm('确定上架？').then(function () {
                var dw = dialog({
                    content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                    '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该类别的UI次序</li></ul>' +
                    '</form>'
                });

                dw.showModal();

                buildDetail({
                    container: $('#formContainer'),
                    fields: [{
                        field: 'orderNo',
                        title: 'UI次序',
                        required: true,
                        number: true,
                        min: '0'
                    }],
                    buttons: [{
                        title: '确定',
                        handler: function () {
                            if ($('#popForm').valid()) {
                                var data = $('#popForm').serializeObject();
                                reqApi({
                                    code: '805253',
                                    json: {
                                        code: selRecords[0].code,
                                        orderNo: data.orderNo,
                                        updater : getUserName()
                                    }
                                }).done(function () {
                                    sucList();
                                    dw.close().remove();
                                });
                            }
                        }
                    }, {
                        title: '取消',
                        handler: function () {
                            dw.close().remove();
                        }
                    }]
                });
            })
        } else {
            toastr.info('已经是上架的状态了');
        }
    });
    // 下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == '2') {
            confirm('确定下架？').then(function () {
                reqApi({
                    code: 805254,
                    json: {
                        code: selRecords[0].code,
                        updater : getUserName()
                    }
                }).then(function(){
                    sucList();
                });
            })
        } else {
            toastr.info('已经是下架的状态了');
        }
    });
});