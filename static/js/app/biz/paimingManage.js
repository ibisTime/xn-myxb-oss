$(function() {
	// 业务管理-美容院管理-排名管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'periods',
		title : '期数'
	}, {
		field : 'name',
		title : '店铺'
	}, {
		field : 'rank',
		title : '排名'
	}, {
		field : 'amount',
		title : '业绩额',
		formatter : moneyFormat
	}];
// 调整
//     $('#adjustBtn').click(function() {
//         var selRecords = $('#tableList').bootstrapTable('getSelections');
//         if (selRecords.length <= 0) {
//             toastr.info("请选择记录");
//             return;
//         }
//         window.location.href = "../biz/paimingManage_addeddit.html?accountCode=" + selRecords[0].accountNumber;
//
//     });
	buildList({
		columns: columns,
		pageCode: '805128'
	});
});