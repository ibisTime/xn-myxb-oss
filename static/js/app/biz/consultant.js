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
});