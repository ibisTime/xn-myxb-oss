$(function() {
	// 业务管理-美导管理-资料审核
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
		field : 'refereeUser',
		title : '推荐人',
        formatter : function (v,data) {
            return data.refereeUser?data.refereeUser.realName:'-';
        }
	},
		{
		field : 'remark',
		title : '经纪人'
	},
		{
		field : 'level',
		title : '等级'
	},  {
		field : 'speciality',
		title : '专长领域'
	}, {
		field : 'style',
		title : '授课风格'
	}, {
		field : 'location',
		title : '是否推荐',
        // search: true,
        // type: 'select',
        data :{'0':'否','1':'是'}
	},{
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
        data :{'1':'待审核','2':'审核不通过','3':'审核通过'}
	}, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		searchParams : {
			type : 'T'
		},
		pageCode: '805535'
	});
    // 资料审核
    $('#checkBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].status == '1') {
            window.location.href = "../biz-manager/ziliaoshenhe_addedit.html?v=1&code=" + selRecords[0].code;
        }else {
        	toastr.info('该状态不能进行审核');
		}

    });
});