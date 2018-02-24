$(function() {
	// 业务管理-经纪人管理
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
		field : 'level',
		title : '级别'
	}, {
		field : 'serviceKind',
		title : '服务对象',
        pageCode: '805906',
		params : {
			parentKey: 'user_kind'
		},
        keyName: 'dkey',
        valueName: 'dvalue',
        formatter: function (v, data) {
            return data.serviceKind.replace(/T/, "美导")
                .replace(/L/, "讲师")
                .replace(/S/, "专家")
                .replace(/A/, "品牌顾问")
                .replace(/M/, "经纪人")
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
			kind : 'M'
        },
		pageCode: '805120',
		deleteCode: '805004'
	});
    //注销
    $('#zhuxiaoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }

        if(selRecords[0].status == 2){
            toastr.info("已注销");
            return;
        }

        confirm("确定注销？").then(function() {
            reqApi({
                code: '805091',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: '2',
                    remark: selRecords[0].remark
                }
            }).then(function() {
                sucList();
            });

        },function() {})
    });
});