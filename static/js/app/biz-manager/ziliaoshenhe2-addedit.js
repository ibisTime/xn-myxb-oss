$(function() {
    // 业务管理-讲师管理-资料审核-审核
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'realName',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格'
    }, {
        field : 'remark',
        title : '备注'
    }];



    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approver = getUserName();
                data.result = '1';
                data.code = code;
                data.remark = $('#reamrk').val();
                reqApi({
                    code: '805531',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approver = getUserName();
                data.result = '0';
                data.code = code;
                data.remark = $('#reamrk').val();
                reqApi({
                    code: '805531',
                    json: data
                }).done(function(data) {
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
    var options = {
        fields: fields,
        code: {
            code: code
        },
        view: true,
        buttons: buttons,
        detailCode: '805536',
    };
    buildDetail(options);

});