$(function() {
    // 心情管理-只有详情，不允许修改
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'date',
        title : '日期'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'role',
        title : '角色'
    }, {
        field : 'schedule',
        title : '事务'
    }, {
        field : 'mind',
        title : '心情'
    }];

    buildDetail({
        fields: fields,
        code: {
            mobile: mobile
        },
        detailCode: '805121',
        view: view
    });

});