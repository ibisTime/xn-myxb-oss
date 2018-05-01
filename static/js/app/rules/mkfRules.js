$(function() {

    var dict = {
        'MKF_FWJY': '服务精英门槛费',
        'MKF_FWJY_FQ': '服务精英返销帮券',
        'MKF_FWS': '服务商门槛费',
        'MKF_FWS_FQ': '服务商返销帮券'
    };

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'ckey',
        title: '规则名称',
        formatter: function (v) {
            return dict[v];
        }
    }, {
        field: 'cvalue',
        title: '值'
    }, {
        field: 'remark',
        title: '参数说明'
    }];
    buildList({
        columns: columns,
        pageCode: '805915',
        searchParams : {
            type: 'MKF'
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