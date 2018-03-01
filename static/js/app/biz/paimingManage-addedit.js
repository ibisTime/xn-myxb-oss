$(function() {
    // 业务管理-品牌管理-排名管理-调整
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'periods',
        title : '期数',
        listCode: '805127',
        type : 'select',
        params : {
            type : '2'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
        required : true
    }, {
        field : 'refNo',
        title : '店铺',
        required : true,
        type : 'select',
        params : {
            start : 1,
            limit : 100,
            type : 'C'
        },
        listCode: '805120',
        keyName : 'userId',
        valueName: '{{realName.DATA}}--{{storeName.DATA}}',
    }, {
        field : 'rank',
        title : '排名',
        required : true
    }, {
        field : 'amount',
        title : '业绩额',
        required : true,
        formatter : moneyFormat
    }];

    var options = {
        fields: fields,
        code : code,
        beforeSubmit : function (data) {
            data.amount *= 1000;
            data.code = code;
        },
        editCode: '805131',
        detailCode : '805130',
        view : view
    };
    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                data.amount *= 1000;

                reqApi({
                    code: "805131",
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
    buildDetail(options);

});