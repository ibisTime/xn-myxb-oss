$(function() {
    // 业务管理-品牌管理-订单管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'code1',
        '_keys': ['code'],
        title : '订单编号'
    }, {
        field : 'applyUser',
        title : '下单用户'
    }, {
        field : 'productName',
        title : '产品名称'
    }, {
        field : 'amount',
        title : '订单价格',
        formatter : moneyFormat
    }, {
        field : 'applyDatetime',
        title : '下单时间',
        formatter : dateTimeFormat
    },  {
        field : 'status',
        title : '状态',
        data : {'0':'待审核','1':'审核未通过','2':'待发货','3':'待评价','4':'已完成'},
        type: 'select'
    },  {
        field : 'receiver',
        title : '收件人'
    },  {
        field : 'reMobile',
        title : '收件人手机'
    }, {
        field : 'approveNote',
        title : '备注',
        readonly : check? false : true
    }];
if(check){
    var buttons = [{
        title: '通过',
        handler: function() {

            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.result = "1";
                data.approver = getUserName();
                reqApi({
                    code: '805271',
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }

        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.result = "0";
                data.approver = getUserName();
                reqApi({
                    code: '805271',
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
}

    var options = {
        fields: fields,
        code: code,
        detailCode: '805275',
        view: true,
        buttons: check?buttons:''
    };

    buildDetail(options);

});