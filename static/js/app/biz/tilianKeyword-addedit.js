$(function() {
    // 业务管理-评论管理-提炼关键字
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'keyword',
        title : '关键字',
        required : true
    }, {
        field : 'type',
        title : '类型',
        type : 'select',
        required : true
    },{
        field : 'remark',
        title : '备注'
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