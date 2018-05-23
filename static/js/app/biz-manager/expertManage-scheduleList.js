$(function() {
    // 业务管理-服务团队管理-行程列表-列表页
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
        field : 'type',
        title : '类型',
        type:'select',
        data:{
        	'1':'可预约',
        	'2':'可调配时间'
        },
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

    $('.tools .toolbar').empty();
    $('.tools .toolbar').html('<li style="display:block;" id="detailBtn"><span><img src="/static/images/t01.png"></span>详情</li>'
    						+'<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    						
    $('#backBtn').on('click', function() {
         window.location = './expertManage.html';
    });
    
    // 新增
    $('#addBtn').on('click', function() {
        window.location.href = './expertManage_scheduleListDetail.html?userId='+userId;
    });
    // 修改
    $('#editBtn').on('click', function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './expertManage_scheduleListDetail.html?code='+selRecords[0].code;
    });
    // 详情
    $('#detailBtn').on('click', function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './expertManage_scheduleListDetail.html?v=1&code='+selRecords[0].code;
    });
});