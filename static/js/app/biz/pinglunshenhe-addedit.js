$(function() {
    // 业务管理-评论管理-评论审核-审核
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'name',
        title : '内容',
        readonly : check
    }, {
        field : 'orderNo',
        title : '评论人',
        readonly : check
    }, {
        field : 'remark',
        title : '评论时间',
        readonly : check,
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注',
        maxlength : 250
    }];

    var buttons = [{
        title: '通过',
        handler: function() {

            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.codeList = [code];
                data.approveResult = "1";
                data.approveUser = getUserName();
                reqApi({
                    code: '802752',
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
                data.codeList = [code];
                data.approveResult = "0";
                data.approveUser = getUserName();
                reqApi({
                    code: '802752',
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
        code: code,
        detailCode: '802756',
        view: true,
        buttons: buttons
    };

    buildDetail(options);

});