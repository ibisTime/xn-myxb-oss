$(function() {
    // 业务管理-积分管理-兑换商品管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称'
    }, {
        field : 'url',
        title : '积分'
    }, {
        field : 'orderNo',
        title : '库存'
    }, {
        field : 'orderNo',
        title : '查看对象'
    }, {
        field : 'orderNo',
        title : '次序'
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