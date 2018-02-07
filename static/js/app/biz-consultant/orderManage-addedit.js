$(function() {
    // 业务管理-品牌管理-订单管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'code',
        title : '订单编号'
    }, {
        field : 'url',
        title : '下单用户'
    }, {
        field : 'name',
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
        title : '备注',
        readonly : check? false : true
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