$(function() {
	// 业务管理-品牌管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '品牌名称',
		search: true
	},{
		field : 'contacts',
		title : '联系人姓名'
	}, {
		field : 'mobile',
		title : '联系人手机号'
	}, {
		field : 'brandAdviser',
		title : '品牌顾问'
	}, {
		field : 'location',
		title : '是否推荐',
        search: true,
        type: 'select',
		data : {'0':'否','1':'是'}
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
        data : {'1':'未上架','2':'已上架','3':'已下架'}
	}, {
		field : 'orderNo',
		title : '次序'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805256'
	});

    // 设置推荐
    $('#setTuijianBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].location == '0') {
            confirm('确定设置推荐？').then(function () {
                reqApi({
                    code: 805255,
                    json: {
                        code: selRecords[0].code,
                        location : 1
                    }
                }).then(function(){
                    sucList();
                });
            })
        } else {
            confirm('确定取消推荐？').then(function () {
                reqApi({
                    code: 805255,
                    json: {
                        code: selRecords[0].code,
                        location : 0
                    }
                }).then(function(){
                    sucList();
                });
            })
        }


    });
    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '1' || selRecords[0].status == '3') {
            confirm('确定上架？').then(function () {
                var dw = dialog({
                    content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                    '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该品牌的位序</li></ul>' +
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
                                    code: '805253',
                                    json: {
                                        code: selRecords[0].code,
                                        location : data.location1,
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
        if(selRecords[0].status == '2') {
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
        }else {
            toastr.info('已经是下架的状态了');
        }


    });
    // 加盟
    // $('#addBtn').click(function() {
    //     window.location.href = "../biz-consultant/pinpaiManage_addedit.html?add=true"
    // });
    // 修改
    // 详情
    // $('#detailBtn').click(function() {
    //     var selRecords = $('#tableList').bootstrapTable('getSelections');
    //     if (selRecords.length <= 0) {
    //         toastr.info("请选择记录");
    //         return;
    //     }
    //     window.location.href = "../biz-consultant/pinpaiManage_addedit.html?code="+selRecords[0].code+"&detail=11"
    // });
});