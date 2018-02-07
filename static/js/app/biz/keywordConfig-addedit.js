$(function() {
    // 业务管理-评论管理-关键字设置
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'keyword',
        title : '关键字'
    }, {
        field : 'url',
        title : '权重'
    }, {
        field : 'orderNo',
        title : '作用等级'
    }, {
        field : 'remark',
        title : '反应'
    }, {
        field : 'updater',
        title : '更新人'
    }, {
        field : 'updateTime',
        title : '更新时间',
        formatter : dateTimeFormat
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