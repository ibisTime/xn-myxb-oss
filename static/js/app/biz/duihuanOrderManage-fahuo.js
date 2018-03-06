$(function() {
    // 业务管理-品牌管理-订单管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [ {
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
        field : 'pdf1',
        title : '物流单',
        type : 'img',
        single : true
    }];

    var options = {
        fields: fields,
        code: code,
        addCode : '805291',
        detailCode: '805295',
        view: false
    };

    buildDetail(options);

});