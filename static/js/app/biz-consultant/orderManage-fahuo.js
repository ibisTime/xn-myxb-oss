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
        field : 'pdf',
        title : '物流单',
        type : 'img'
    }];
    var buttons = [{
        title: '确认发货',
        handler: function() {

            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                console.log(data);
                // reqApi({
                //     code: '805272',
                //     json: data
                // }).done(function() {
                //     sucDetail();
                // });
            }

        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '805275',
        view: false,
        buttons: buttons
    };

    buildDetail(options);

});