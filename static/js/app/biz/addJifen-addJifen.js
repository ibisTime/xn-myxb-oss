$(function() {
    // 业务管理-积分管理-手动加积分-加积分
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [ {
        field : 'amount',
        title : '增加积分数',
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
                var data = $('#jsForm').serializeObject();
                if(data.amount.indexOf('.')!=-1) {
                    toastr.info('增加积分数只能为整数');
                    return
                }if(data.amount.indexOf(',')!=-1) {
                    toastr.info('增加积分数不能以逗号分隔');
                    return
                }
                data['toUserId'] = userId;
                data["currency"] = 'JF';
                data["amount"] *= 1000;
                reqApi({
                    code: "805340",
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