$(function() {
    // 业务管理-经纪人管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'level',
        title : '级别'
    }, {
        field : 'remark',
        title : '服务对象'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'remark',
        title : '备注'
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