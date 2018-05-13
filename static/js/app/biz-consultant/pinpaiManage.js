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
    }, {
        field: 'categoryCode',
        title: '类别',
        type: 'select',
        pageCode: '805245',
        params: {
        },
        keyName: 'code',
        valueName: 'name',
        search: true,
	},{
		field : 'realName',
		title : '品牌顾问'
	}, {
		field : 'brandFwsName',
		title : '服务商'
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
		title : 'UI次序'
	}, {
		field : 'remark',
		title : '备注'
	}];
	
	var searchParams={};
    if(sessionStorage.getItem('loginKind') == 'A') {
    	searchParams = {
                adviser : getUserId()
           };
    }
        buildList({
            columns: columns,
            pageCode: '805256',
            searchParams: searchParams
        });
    
    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '1' || selRecords[0].status == '3') {
            var dw = dialog({
                content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该品牌的位序</li></ul>' +
                '</form>'
            });

            dw.showModal();

            buildDetail({
                container: $('#formContainer'),
                fields: [{
                    field: 'orderNo1',
                    title: '顺序',
                    required: true,
                    number: true,
                    min: '0',
                    value: selRecords[0].orderNo?selRecords[0].orderNo:'',
                },{
                    field : 'location1',
                    title : '是否推荐',
                    required: true,
                    type: 'select',
                    data : {'0':'否','1':'是'},
                    value: selRecords[0].location?selRecords[0].location:'',
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
                                    orderNo: data.orderNo1,
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
            
        	dw.__center();	
        	
        } else {
            toastr.info('已经是上架的状态了');
        };
    });   // 下架
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
                    }
                }).then(function(){
                    sucList();
                });
            })
        }else {
            toastr.info('已经是下架的状态了');
        }


    });
    // 设置品牌顾问
    $('#setConsultantBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-consultant/pinpaiManage_setConsultant.html?code=" + selRecords[0].code+"&v=1";
    });
    // 修改
    $('#editBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '2') {
            toastr.info('品牌已上架，不能进行修改')
        }else {
            window.location.href = './pinpaiManage_addedit.html?v=false&edit=1&code='+selRecords[0].code;
        }
    });
    
    // 设置经销商
    $('#setBrandFwsBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-consultant/pinpaiManage_setBrandFws.html?code=" + selRecords[0].code+"&v=1";
    });
});