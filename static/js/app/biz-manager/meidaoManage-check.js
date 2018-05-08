$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var columns = [{
        field : 'mobile',
        title : '手机号',
        mobile : true
    }, {
        field : 'pdf',
        title : '营业执照/身份证',
        type: 'img',
        single: true,
    }, {
        field : 'remark',
        title : '备注',
        readonly : false
    }];
    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.userId = code;
                data.approveResult = '1'
                reqApi({
                    code: '805098',
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
                data.userId = code;
                data.approveResult = '0'
                reqApi({
                    code: '805098',
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
    
    buildDetail({
        fields: columns,
        code : {
            userId : code
        },
        view: true,
        buttons: buttons,
        detailCode: '805121'
    });
});