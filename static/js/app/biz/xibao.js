$(function() {
	// 业务管理-喜报预报管理-喜报
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'title',
		title : '标题'
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
        data : {
            '0':'待发布',
            '1':'已上架',
            '2':'已下架'
        }
	}, {
        field : 'location',
        title : '是否推荐',
        search: true,
        type: 'select',
        data :{'0':'否','1':'是'}
    }, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		searchParams : {
			type : '0'
		},
		pageCode: '805435',
		deleteCode: '805431'
	});
    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '0') {
            confirm('确定上架？').then(function () {
                var dw = dialog({
                    content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                    '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该喜报的位序</li></ul>' +
                    '</form>'
                });

                dw.showModal();

                buildDetail({
                    container: $('#formContainer'),
                    fields: [{
                        field: 'orderNo',
                        title: '顺序',
                        required: true,
                        number: true,
                        min: '0'
                    },{
                        field : 'location1',
                        title : '是否推荐',
                        required: true,
                        type: 'select',
                        data : {'0':'否','1':'是'}
                    }],
                    buttons: [{
                        title: '确定',
                        handler: function () {
                            if ($('#popForm').valid()) {
                                var data = $('#popForm').serializeObject();
                                reqApi({
                                    code: '805433',
                                    json: {
                                        code: selRecords[0].code,
                                        location : data.location1,
                                        updater: getUserName(),
                                        orderNo: data.orderNo
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

                //     dw.__center();
                //     reqApi({
                //         code: 805263,
                //         json: {
                //             code: selRecords[0].code,
                //             location : '1',
                //             orderNo: selRecords[0].orderNo,
                //             updater : getUserName()
                //         }
                //     }).then(function(){
                //         sucList();
                //     });
                // })
            })
        }
        else
        {
            toastr.info('已经是上架的状态了')
        }
    });
    // 下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '1') {
            confirm('确定下架？').then(function () {
                reqApi({
                    code: 805434,
                    json: {
                        code: selRecords[0].code,
                        updater : getUserName()
                    }
                }).then(function(){
                    sucList();
                });
            })
        } else {
            toastr.info('已经是下架的状态了')
        }


    });
});