$(function() {
    // 业务管理-积分管理-兑换订单处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'code',
        title : '订单编号'
    }, {
        field : 'applyUser',
        title : '下单用户'
    }, {
        field : 'productName',
        title : '商品名称'
    }, {
        field : 'amount',
        title : '积分价格'
    }, {
        field : 'applyDatetime',
        title : '下单时间'
    }, {
        field : 'status',
        title : '状态'
    },{
        field : 'receiver',
        title : '收件人'
    }, {
        field : 'reMobile',
        title : '收件人手机'
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code:code,
        detailCode: '805295',
        view: view
    });

});