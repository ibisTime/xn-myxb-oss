$(function() {



    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'type',
        title: '针对类型',
        listCode: '805906',
        params: {
            parentKey : 'level_rule'
        },
        keyName: 'dkey',
        valueName: 'dvalue',
        type : 'select'
    },{
        field: 'ckey',
        title: '参数键',
        type: 'select',
        listCode: '805906',
        params :{
            parentKey : 'level'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
    },{
        field: 'remark',
        title: '参数说明'
    },{
        field: 'cvalue',
        title: '参数值'
    }];
    buildList({
        router: 'param',
        columns: columns,
        pageCode: '805915',
        searchParams : {
            typeList : ['ZJ_LEVEL','JS_LEVEL','MD_LEVEL']
        }
    });

    // 修改
    $('#editBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        // debugger;
        window.location.href = "../system/levelRules_addedit.html?v=0&id=" + selRecords[0].id;
    });
});