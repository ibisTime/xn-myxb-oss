$(function() {
    // 业务管理-评论管理-评论审核-审核
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'entityName',
        title : '评论对象'

    },{
        field : 'content',
        title : '内容'

    }, {
        field : 'nickname',
        title : '评论人'

    }, {
        field : 'commentDatetime',
        title : '评论时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注',
        maxlength : 250,
        readonly : false
    }];

    var buttons = [{
        title: '通过',
        handler: function() {

            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                data.result = "1";
                data.approver = getUserName();
                reqApi({
                    code: '805422',
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
                data.code = code;
                data.result = "0";
                data.approver = getUserName();
                reqApi({
                    code: '805422',
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
        detailCode: '805426',
        view: true,
        buttons: buttons
    };

    buildDetail(options);

});