$(function() {
	// 业务管理-美导管理-美导管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'loginName',
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
        type : 'select',
        listCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'M',
            start : 1,
            limit : 10
        },
        keyName: 'userId',
        valueName: 'nickname'
	}, {
		field : 'level',
		title : '等级',
        type: 'select',
        listCode: '805906',
        params :{
            parentKey : 'level'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
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
	}, {
		field : 'style',
		title : '授课风格'
	}, {
		field : 'location',
		title : '是否推荐',
        search: true,
        type: 'select',
		data : {'0':'否','1':'是'}
	}, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];
	buildList({
		columns: columns,
        searchParams: {
            companyCode : OSS.company,
            kind : 'T'
        },
        pageCode: '805120'
	});
	// 审核
	$('#checkBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords[0].status == '3') {
            window.location.href = "../biz-manager/meidaoManage_check.html?v=0&code="+selRecords[0].userId+"&mobile="+selRecords[0].mobile;
        }else {
            toastr.info('该状态下不能进行审核');
        }

    });
	// 分配经纪人
    $('#fenpeiManagerBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../biz-manager/meidaoManage_fpManager.html?userId=" + selRecords[0].userId+"&v=1";
    });
    //注销
    $('#zhuxiaoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }


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
    });
    //设置推荐
    $('#setTuijianBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }

        if(selRecords[0].status == 1){
            toastr.info("已推荐");
            return;
        }

        confirm("确定设置推荐？").then(function() {
            var dw = dialog({
                content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">请输入该美导的位序</li></ul>' +
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

        },function() {})
    });
    // 查看评论
    $('#chakanpinglunBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './meidaoManage_pinglun.html?code='+selRecords[0].userId;
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

});