$(function() {
    // 业务管理-积分管理-兑换订单处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var fahuo = !!getQueryString('fahuo');
    var data1;
    var fields = [{
        field: 'code1',
        title : '订单编号',
        formatter: function(v, data) {
            return data.code
        }
    }, {
        field : 'applyUser',
        title : '下单用户',
        search: true,
        type: 'select',
        listCode: '805121',
        keyName: 'userId',
        valueName: 'nickname'
    }, {
        field : 'productName',
        title : '商品名称'
    }, {
        field : 'amount',
        title : '积分价格',
        formatter : moneyFormat
    }, {
        field : 'applyDatetime',
        title : '下单时间',
        formatter : dateTimeFormat
    }, {
        field : 'status',
        title : '状态',
        search: true,
        type: 'select',
        data :{'0':'待发货','1':'待收货','2':'待评价','3':'已完成','4':'无货取消'}
    },{
        field : 'deliveryDatetime',
        title : '发货时间',
        formatter : dateTimeFormat
    },{
        field : 'deliverer',
        title : '发货人'
    },{
        field : 'logisticsCode',
        title : '物流单号'
    },{
        field : 'logisticsCompany',
        title : '物流公司'
    },{
        field : 'pdf',
        title : '物流单',
        type : 'img'
    }, {
        field : 'receiver',
        title : '收件人'
    }, {
        field : 'reMobile',
        title : '收件人手机'
    }, {
        field : 'remark',
        title : '备注'
    }];


    var columns = [ {
        field : 'deliverer',
        title : '发货人',
        required : true
    }, {
        field : 'logisticsCode',
        title : '物流单号',
        required : true
    }, {
        field : 'logisticsCompany',
        title : '物流公司',
        required : true
    }, {
        field : 'pdf',
        title : '物流单',
        required : true,
        type : 'img',
        single : true
    }];
    if(fahuo) {
        buildDetail({
            fields: columns,
            code:code,
            beforeSubmit : function (data) {
                data1 = data;
            },
            addCode : '805291',
            detailCode: '805293',
            view: view
        });
        $('#subBtn').click(function () {
            reqApi({
                code: '805291',
                json: data1,
            }).then(function() {
                sucDetail();
            });
        })
    }else {
        buildDetail({
            fields: fields,
            code:code,
            detailCode: '805293',
            view: view
        });
    }


});