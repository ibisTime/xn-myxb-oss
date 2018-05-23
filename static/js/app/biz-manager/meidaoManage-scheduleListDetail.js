$(function() {
    // 业务管理-服务团队管理-服务团队管理
    var code = getQueryString('code');
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var fields = [{
        field : 'startDatetime',
        title : '开始时间',
        formatter : dateTimeFormat,
        type : 'datetime',
        required : true
    },{
        field : 'endDatetime',
        title : '结束时间',
        formatter : dateTimeFormat,
        type : 'datetime',
        required : true
    }, {
        field : 'type',
        title : '类型',
        type:'select',
        data:{
        	'1':'可预约',
        	'2':'可调配时间'
        },
        required : true
    }, {
        field : 'remark',
        title : '备注'
    }];

        buildDetail({
            fields: fields,
            code :view || code?{code : code}:{userId : code},
            beforeSubmit : function (data) {
                if(data.startDatetime>=data.endDatetime) {
                    toastr.info('开始时间不能晚于或等于结束时间');
                    return
                }
                if(view || code) {
                    // 详情或是修改
                    data.code = code;
                }else {
                    // 新增
                    data.userId = userId;
                }
                return data;
            },
            addCode : '805500',
            editCode : '805502',
            detailCode: '805507',
            view: view
        });



});