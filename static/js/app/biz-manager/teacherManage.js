$(function() {
	// 业务管理-讲师管理-讲师管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'nickname',
		title : '姓名',
		search: true
	}, {
		field : 'mobile',
		title : '手机号'
	}, {
		field : 'orderNo',
		title : '推荐人'
	}, {
		field : 'remark',
		title : '经纪人'
	}, {
		field : 'level',
		title : '等级'
	}, {
		field : 'remark',
		title : '积分余额'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select'
	}, {
		field : 'speciality',
		title : '专长领域'
	}, {
		field : 'style',
		title : '授课风格'
	}, {
		field : 'remark',
		title : '是否推荐',
        search: true,
        type: 'select'
	}, {
		field : 'orderNo',
		title : '序号'
	}, {
		field : 'remark',
		title : '备注'
	}];
// 审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        window.location.href = "../biz-manager/teacherManage_addeddit.html?accountCode=" + selRecords[0].accountNumber + "&check=1";
    });
	buildList({
		columns: columns,
        searchParams: {
            companyCode : OSS.company,
            kind : 'L'
        },
        pageCode: '805120',
		deleteCode: '805004'
	});
});