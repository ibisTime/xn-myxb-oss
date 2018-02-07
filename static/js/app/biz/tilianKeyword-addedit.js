$(function() {
    // 业务管理-评论管理-提炼关键字
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'keyword',
        title : '关键字'
    }, {
        field : 'type',
        title : '类型'
    }, {
        field : 'updater',
        title : '更新人'
    },{
        field : 'updateTime',
        title : '更新时间',
        formatter : dateTimeFormat
    },{
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