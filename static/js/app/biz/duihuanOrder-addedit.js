$(function() {
    // 业务管理-积分管理-兑换订单处理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'code',
        title : '订单编号'
    }, {
        field : 'url',
        title : '下单用户'
    }, {
        field : 'orderNo',
        title : '商品名称'
    }, {
        field : 'orderNo',
        title : '积分价格'
    }, {
        field : 'orderNo',
        title : '下单时间'
    }, {
        field : 'status',
        title : '状态'
    },{
        field : 'orderNo',
        title : '收件人'
    }, {
        field : 'mobile',
        title : '收件人手机'
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