$(function() {
    // 经纪人-专家管理-预约处理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');


    var fields = [ {
        field : 'code',
        title : '编号'
    }, {
        field : 'url',
        title : '预约人'
    }, {
        field : 'mobile',
        title : '预约人手机号'
    }, {
        field : 'remark',
        title : '店铺'
    }, {
        field : 'expert',
        title : '专家'
    }, {
        field : 'remark',
        title : '预约时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '预约天数'
    },{
        field : 'remark',
        title : '排班时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '排班天数'
    }, {
        field : 'status',
        title : '状态'
    }];

    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        detailCode: '805121',
        view: view
    });

});