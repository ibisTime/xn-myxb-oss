$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '菜单名称',
		search: true
	}, {
		field : 'url',
		title : '菜单url'
	}, {
		field : 'parentCode',
		title : '父菜单编号',
		type : 'select',
		listCode: '805001',
		params: {
			type: '1'
		},
		keyName: 'code',
		valueName: '{{code.DATA}} {{name.DATA}}',
		search: true
	}, {
		field : 'type',
		title : '类型',
		type : 'select',
		data: {'1': '菜单', '2': '按钮'},
		search: true
	}, {
		field : 'orderNo',
		title : '菜单顺序'
	}, {
//      field: 'kind',
//      title: '菜单针对对象',
//      type : 'select',
//      search: true,
//      listCode: '805906',
//		params : {
//      	parentKey : 'menu_kind'
//		},
//      keyName: 'dkey',
//      valueName: 'dvalue'
//  },{
		field : 'remark',
		title : '备注'
	}];

	buildList({
		router: 'menu',
		columns: columns,
		pageCode: '805000',
		deleteCode: '805004'
	});
	$('#editBtn').off().click(function () {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if(selRecords[0].code == 'HYSM201700000000000000') {
        	toastr.info('无法修改根目录');
		}else {
        	window.location.href = './menu_addedit.html?v=0&code='+selRecords[0].code;
		}
    })
});