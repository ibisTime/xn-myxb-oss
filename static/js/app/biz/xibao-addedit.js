$(function() {
    // 业务管理-喜报预报管理-喜报
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'title',
        title : '标题',
        required : true
    }, {
        field : 'status',
        title : '缩略图（单）',
        type : 'img',
        single : true,
        required : true
    },{
        field : 'orderNo',
        title : '详情',
        maxlength : 250,
        required : true
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