$(function() {
	// 业务管理-美导管理-预约处理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'code',
		title : '编号'
	}, {
		field : 'url',
		title : '回款人',
        formatter : function (v, data) {
            return data.user?data.user.realName:'-';
        }
	}, {
		field : 'url',
		title : '回款店铺',
        formatter : function (v, data) {
            return data.user?data.user.storeName:'-';
        }
	},{
		field : 'saleAmount',
		title : '回款金额',
		formatter : moneyFormat
	}, {
		field : 'updater',
		title : '回款记录人'
	},{
		field : 'updateDatetime',
		title : '回款记录时间',
		formatter : dateTimeFormat
	}, {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		searchParams : {
			type : 'C'
		},
		pageCode: '805520',
		deleteCode: '805004'
	});
	// 回款
    $('#huikuanBtn').click(function() {
        window.location.href = './huikuan_huikuan.html'
    });
});