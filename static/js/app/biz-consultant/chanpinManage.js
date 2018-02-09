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
		field : 'url',
		title : '所属品牌',
        search: true,
        type: 'select',
        pageCode: '805257',
        keyName: 'code',
        valueName: 'name',
        // formatter: function (v,data) {
        //     if(data.refereeUser){
        //         return data.refereeUser.mobile;
        //     }
        // }
	}, {
		field : 'location',
		title : '是否推荐',
        search: true,
        type: 'select'
	}, {
		field : 'status',
		title : '状态',
		search: true,
		type: 'select'
	}, {
		field : 'orderNo',
		title : '次序'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805266',
		deleteCode: '805004'
	});

    // 上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定上架？').then(function () {
            reqApi({
                code: 805263,
                json: {
                    code: selRecords[0].code,
                    location : selRecords[0].location,
                    orderNo: selRecords[0].orderNo,
                    updater : getUserName()
                }
            }).then(function(){
                sucList();
            });
        })

    });
    // 下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
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

    });
});