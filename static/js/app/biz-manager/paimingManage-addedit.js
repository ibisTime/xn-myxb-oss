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
            type : '1'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
        required : true
    }, {
        field : 'refNo',
        title : '专家',
        required : true,
        type : 'select',
        params : {
            start : 1,
            limit : 1000,
            type : 'S'
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
        editCode: '805125',
        detailCode : '805124',

    };
    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                if(data.amount.indexOf(',') != -1) {
                    toastr.info('业绩额需为数字，不能以逗号隔开');
                    return
                }
                data.code = code;
                data.amount *= 1000;
                reqApi({
                    code: "805125",
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