$(function() {
	// 业务管理-专家管理-专家管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'realName',
		title : '姓名',
		search: true
	}, {
		field : 'mobile',
		title : '手机号'
	}, {
        field : 'orderNo',
        title : '推荐人',
        formatter : function (v,data) {
            return data.refereeUser?data.refereeUser.realName:'-';
        }
    }, {
        field : 'handler',
        title : '经纪人',
        formatter : function (v, data) {
            return data.handlerUser? data.handlerUser.realName : '-';
        }
    }, {
		field : 'level',
		title : '等级',
        type: 'select',
        key: 'user_level_specialist',
        formatter : Dict.getNameForList('user_level_specialist'),
        search: true,
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
        formatter : Dict.getNameForList('user_status'),
        key: 'user_status'
	}, {
		field : 'speciality',
		title : '专长领域'
	},  {
		field : 'styleName',
		title : '授课风格'
	}, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];
    if (sessionStorage.getItem('loginKind') == 'M') {
        var searchParams = {
            companyCode : OSS.company,
            kind : 'S',
            handler : getUserId()
        }
    }else {
        var searchParams = {
            companyCode : OSS.company,
            kind : 'S'
        }
    }
	buildList({
		columns: columns,
        searchParams: searchParams,
        pageCode: '805120'
	});
    // 注销
    $('#zhuxiaoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }

        if(selRecords[0].status == '0' || selRecords[0].status == '1' || selRecords[0].status == '2') {
            confirm("确定注销/激活？").then(function() {
                reqApi({
                    code: '805091',
                    json: {
                        userId: selRecords[0].userId,
                        remark: selRecords[0].remark
                    }
                }).then(function() {
                    sucList();
                });

            },function() {})
        }else {
            toastr.info('该状态下不可进行激活/注销操作')
        }

    });
    // 分配经纪人
    $('#fenpeiManagerBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-manager/expertManage_fpManager.html?userId=" + selRecords[0].userId+"&v=1";
    });
    //设置次序
    $('#setTuijianBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }

        var dw = dialog({
                content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该专家的UI次序</li></ul>' +
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
                            code: '805096',
                            json: {
                                location : '1',
                                orderNo: data.orderNo,
                                updater : getUserName(),
                                userId : selRecords[0].userId
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
    });
    // 查看评论
    $('#chakanpinglunBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './expertManage_pinglun.html?code='+selRecords[0].userId;
    });
    // 行程列表
    $('#scheduleListBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './meidaoManage_scheduleList.html?code='+selRecords[0].userId;
    });

    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './expertManage_detail.html?v=1&code='+selRecords[0].userId;
    });
    // 修改
    $('#editBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        window.location.href = './expertManage_addedit.html?code='+selRecords[0].userId+'&level='+selRecords[0].level;
    });
});