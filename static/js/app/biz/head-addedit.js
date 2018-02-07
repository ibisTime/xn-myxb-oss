$(function() {
    // 业务管理-头像管理-头像管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'url',
        title : '针对角色',
        type : 'select',
        required : true
    }, {
        field : 'orderNo',
        title : '针对等级',
        type : 'select',
        required : true
    }, {
        field : 'name',
        title : '头像（单）',
        type : 'img',
        single : true
    }, {
        field : 'orderNo',
        title : '次序',
        required : 'true'
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