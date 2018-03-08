$(function() {
	// 业务管理-品牌顾问管理
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
		field : 'mainBrand',
		title : '主荐品牌',
        search: true,
        type: 'select',
        required : true,
        listCode: '805258',
        keyName : 'code',
        valueName: 'name'
	},
	// 	{
	// 	field : 'remark',
	// 	title : '所辖区域',
     //    search: true,
     //    type: 'select'
	// },
		{

        field : 'status',
        title : '状态',
        search: true,
        type: 'select',
        formatter : Dict.getNameForList('user_status'),
        key: 'user_status'
	}, {
		field : 'remark',
		title : '备注'
	}];

    buildList({
        columns: columns,
        searchParams: {
            companyCode : OSS.company,
            kind : 'A'
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
});