$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'remark',
        title: '规则名称'
    }, {
        field: 'cvalue',
        title: '值'
    }];
    buildList({
        columns: columns,
        pageCode: '805915',
        searchParams : {
            type: 'SIGN'
        }
    });

    // // 修改
    // $('#editBtn').off().click(function() {
    //     var selRecords = $('#tableList').bootstrapTable('getSelections');
    //     if (selRecords.length <= 0) {
    //         toastr.info("请选择记录");
    //         return;
    //     }
    //     // debugger;
    //     window.location.href = "../system/pinglunxiangmu_addedit.html?v=0&id=" + selRecords[0].id;
    // })
});