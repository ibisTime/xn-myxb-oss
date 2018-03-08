$(function() {



    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
        field: 'remark',
        title: '参数说明'
    },{
        field: 'ckey',
        title: '参数键'
    },{
        field: 'cvalue',
        title: '参数值'
    }];
    buildList({
        router: 'param',
        columns: columns,
        pageCode: '805915',
        searchParams : {
            type: 'DOWNLOAD'
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
        window.location.href = "../system/downloadCenter_addedit.html?v=0&id=" + selRecords[0].id;
    })
});