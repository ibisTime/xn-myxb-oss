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
	},{
		field : 'name',
		title : '联系人姓名'
	}, {
		field : 'mobile',
		title : '联系人手机号'
	}, {
		field : 'orderNo',
		title : '品牌顾问'
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
		pageCode: '805256'
	});

    // 设置推荐
    $('#setTuijianBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        confirm('确定设置推荐？').then(function () {
            reqApi({
                code: 805255,
                json: {
                    code: selRecords[0].code,
                    location : selRecords[0].location
                }
            }).then(function(){
                sucList();
            });
        })

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
                code: 805253,
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
                code: 805254,
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