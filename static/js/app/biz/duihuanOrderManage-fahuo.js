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
        required : true,
        type : 'img',
        single : true
    }];
    // var buttons = [{
    //     title: '确认发货',
    //     handler: function() {
    //
    //         if ($('#jsForm').valid()) {
    //             var data = $('#jsForm').serializeObject();
    //             console.log(data);
    //             data.code = code;
    //             data.pdf = data.pdf1;
    //             reqApi({
    //                 code: '805291',
    //                 json: data
    //             }).done(function() {
    //                 sucDetail();
    //             });
    //         }
    //
    //     }
    // }, {
    //     title: '返回',
    //     handler: function() {
    //         goBack();
    //     }
    // }];

    var options = {
        fields: fields,
        code: code,
        addCode : '805291',
        detailCode: '805295',
        view: false,
        // buttons: buttons
    };

    buildDetail(options);

});