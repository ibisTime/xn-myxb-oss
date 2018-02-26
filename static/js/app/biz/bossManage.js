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
		field : 'remark',
		title : '积分余额'
	},{
		field : 'remark',
		title : '团队顾问'
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
    });
});