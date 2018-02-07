$(function() {
    // 业务管理-积分管理-手动加积分
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'role',
        title : '角色'
    }, {
        field : 'orderNo',
        title : '积分余额'
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