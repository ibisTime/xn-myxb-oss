$(function() {
    // 业务管理-品牌顾问管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [ {
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'orderNo',
        title : '主荐品牌'
    }, {
        field : 'remark',
        title : '所辖区域'
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