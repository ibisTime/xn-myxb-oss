$(function() {
	// 业务管理-专家管理-成果录入
    var columns = [{
        field : '',
        title : '',
        checkbox : true
    }, {
        field : 'code',
        title : '编号'
    }, {
        field : 'url',
        title : '预约人',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.realName:'-';
        }
    }, {
        field : 'mobile',
        title : '预约人手机号',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.mobile:'-';
        }
    }, {
        field : 'remark',
        title : '店铺',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.storeName:'-';
        }
    }, {
        field : 'expert',
        title : '专家',formatter : function (v, data) {
            return data.user?data.user.realName:'-';
        }

    }, {
        field : 'appointDatetime',
        title : '预约时间',
        formatter : dateTimeFormat
    }, {
        field : 'appointDays',
        title : '预约天数'
    },{
        field : 'planDatetime',
        title : '排班时间',
        formatter : dateTimeFormat
    }, {
        field : 'planDays',
        title : '排班天数'
    }];

	buildList({
		columns: columns,
        searchParams : {
            type : 'S',
            status : '5'
        },
        pageCode: '805520',
		deleteCode: '805004'
	});
	// 录入
    $('#luruBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if(selRecords.length <= 0){
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './chengguoluru_addedit.html?v=0&luru=1&code='+selRecords[0].code
    })
});