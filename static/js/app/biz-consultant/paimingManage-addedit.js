$(function() {
    // 业务管理-品牌管理-排名管理-调整
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '期数',
        type: 'select',
        required : true
    }, {
        field : 'url',
        title : '品牌',
        type : 'select',
        required : true
    }, {
        field : 'orderNo',
        title : '排名',
        required : true
    }, {
        field : 'remark',
        title : '业绩额',
        required : true,
        formatter : moneyFormat
    }];

    var options = {
        fields: fields,
        detailCode: '805121',
        code: {
            kind: "C",
            companyCode:OSS.companyCode,
            userId: userId
        }
    };
    options.buttons = [{
        title: '确认',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['userId'] = userId;
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "805195",
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