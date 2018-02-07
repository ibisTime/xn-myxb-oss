$(function() {
    // 品牌顾问-订单管理
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
        title : '产品名称'
    }, {
        field : 'price',
        title : '订单价格',
        formatter : moneyFormat
    }, {
        field : 'remark',
        title : '下单时间',
        formatter : dateTimeFormat
    },  {
        field : 'status',
        title : '状态'
    },  {
        field : 'remark',
        title : '收件人'
    },  {
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