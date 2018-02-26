$(function() {
    // 业务管理-美导管理-行程列表-列表页
    var userId = getQueryString('code');
    var check = !!getQueryString('check');
    var fields = [{
        field : '',
        title : '',
        checkbox : true
    }, {
        field : 'startDatetime',
        title : '开始时间',
        formatter : dateTimeFormat
    },{
        field : 'endDatetime',
        title : '结束时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildList({
        columns: fields,
        searchParams: {
            userId : userId
        },
        pageCode: '805505'
    });

    $('#checkBtn').css('display','none');
    $('#fenpeiManagerBtn').css('display','none');
    $('#chakanpinglunBtn').css('display','none');
    $('#setTuijianBtn').css('display','none');
    $('#scheduleListBtn').css('display','none');
    $('#zhuxiaoBtn').css('display','none');
    // 新增
    $('#addBtn').off().click(function() {
        window.location.href = './teacherManage_scheduleListDetail.html?userId='+userId;
    });
    // 修改
    $('#editBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './teacherManage_scheduleListDetail.html?code='+selRecords[0].code;
    });
    // 详情
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './teacherManage_scheduleListDetail.html?v=1&code='+selRecords[0].code;
    });
});