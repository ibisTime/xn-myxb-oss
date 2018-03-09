$(function() {
	// 业务管理-品牌管理-产品管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '产品名称',
		search: true
	}, {
		field : 'brandCode',
		title : '所属品牌',
        search: true,
        type: 'select',
        listCode: '805258',
        keyName : 'code',
        searchName :'code',
        valueName: 'name'
	}, {
	    title : '价格',
        field : 'price',
        formatter : moneyFormat
    },
        {
		field : 'location',
		title : '是否推荐',
        search: true,
        type: 'select',
        data :{'0':'否','1':'是'}
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select',
        data : {'1':'未上架','2':'已上架','3':'已下架'}
	}, {
	    title : '次序',
        field : 'orderNo'
    }, {
		field : 'remark',
		title : '备注'
	}];
if(sessionStorage.getItem('loginKind') == 'A') {
    buildList({
        columns: columns,
        searchParams : {
            adviser : getUserId()
        },
        pageCode: '805266',
        deleteCode: '805004'
    });
}else {
    buildList({
        columns: columns,
        pageCode: '805266',
        deleteCode: '805004'
    });
}


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
                    '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该产品的位序</li></ul>' +
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
                                    code: '805263',
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
        if(selRecords[0].status == '2') {
            confirm('确定下架？').then(function () {
                reqApi({
                    code: 805264,
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
    // 查看评论
    $('#chakanpinglunBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './chanpinManage_pinglun.html?code='+selRecords[0].code;
    });

    // 修改
    $('#editBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '2') {
            toastr.info('产品已上架，不能进行修改')
        }else {
            window.location.href = './chanpinManage_addedit.html?v=false&edit=1&code='+selRecords[0].code;
        }
    });
});