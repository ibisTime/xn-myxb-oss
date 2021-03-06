$(function() {
	// 业务管理-美容院管理-老板管理
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
		field : 'storeName',
		title : '店铺'
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
		field : 'adviserUser',
		title : '团队顾问',
        formatter : function (v,data) {
            return data.adviserUser?data.adviserUser.realName:'-';
        }
	}, {
        field : 'status',
        title : '状态',
        search: true,
        type: 'select',
        pageCode: '805906',
        params : {
            parentKey: 'user_status'
        },
        keyName: 'dkey',
        valueName: 'dvalue',
        data : {'0':'正常', '1':'程序锁定','2':'人工锁定','3':'待审核','4':'审核不通过'}
	}, {
		field : 'remark',
		title : '备注'
	}];

    buildList({
        columns: columns,
        searchParams: {
            companyCode : OSS.company,
            kind : 'C'
        },
        pageCode: '805120',
        deleteCode: '805004'
    });
    //注销/激活
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
                        // toStatus: '2',
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

    // 审核
    $('#checkBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '3') {
            window.location.href = "../biz/bossManage_addedit.html?v=0&check=1&code=" + selRecords[0].userId+"&mobile="+selRecords[0].mobile;
        }else {
            toastr.info('该状态下不能进行审核');
        }

    });

    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './bossManage_detail.html?v=1&code='+selRecords[0].userId;
    });
    // 修改
    $('#editBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        window.location.href = './bossManage_addedit.html?code='+selRecords[0].userId+'&level='+selRecords[0].level;
    });
});