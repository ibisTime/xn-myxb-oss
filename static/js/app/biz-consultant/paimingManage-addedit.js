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
            type : '0'
        },
        keyName : 'periods',
        searchName :'periods',
        valueName: 'periods',
        required : true
    }, {
        field : 'refNo',
        title : '所属品牌',
        required : true,
        type : 'select',
        listCode: '805258',
        keyName : 'code',
        valueName: 'name'
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
        editCode: '805279',
        code: {
            code: code,
            companyCode:OSS.companyCode
        }
    };
    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                data.amount *= 1000;
                reqApi({
                    code: "805279",
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