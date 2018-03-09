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
		field : 'price',
		title : '积分',
        formatter : moneyFormat
	}, {
		field : 'quantity',
		title : '库存'
	}, {
		field : 'faceKind',
		title : '查看对象',
        // search: true,
        // type: 'select',
        formatter: function (v, data) {
            return data.faceKind.replace(/T/, "美导")
                .replace(/L/, "讲师")
                .replace(/S/, "专家")
                .replace(/A/, "品牌顾问")
                .replace(/M/, "经纪人")
                .replace(/C/, "美容院")
        }
	}, {
		field : 'orderNo',
		title : '次序'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
        data : {'1':'未上架','2':'已上架','3':'已下架'}

	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805285'
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
                    }],
                    buttons: [{
                        title: '确定',
                        handler: function () {
                            if ($('#popForm').valid()) {
                                var data = $('#popForm').serializeObject();
                                reqApi({
                                    code: '805283',
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
                    code: 805284,
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

    // 修改
    $('#editBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '2') {
            toastr.info('商品已上架，不能进行修改')
        }else {
            window.location.href = './duihuanProduct_addedit.html?v=false&edit=1&code='+selRecords[0].code;
        }
    });
});