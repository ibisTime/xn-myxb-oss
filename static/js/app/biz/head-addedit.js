$(function() {
    // 业务管理-头像管理-头像管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var field = [{
        field : 'name',
        title : '图片'
    }, {
        field : 'url',
        title : '针对角色'
    }, {
        field : 'orderNo',
        title : '针对等级'
    }, {
        field : 'orderNo',
        title : '次序'
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