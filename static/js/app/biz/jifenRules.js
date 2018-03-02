$(function() {
	// 业务管理-积分管理-积分规则
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'remark',
		title : '规则名称'
	}, {
		field : 'cvalue',
		title : '数值'
	}];

    buildList({
        columns: columns,
        searchParams:{
            companyCode:OSS.company,
            type : 'TJPL_JJF'

        },
        pageCode: '805915'
    });
    // 修改
	$('#editBtn').click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
		window.location.href = './jifenRules_addedit.html?&id='+selRecords[0].id;
    })
});