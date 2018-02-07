$(function() {
    // 业务管理-讲师管理-资料审核-审核
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'remark',
        title : '专长领域'
    }, {
        field : 'remark',
        title : '授课风格'
    }, {
        field : 'remark',
        title : '备注'
    }];



    buildDetail({
        fields: fields,
        buttons: [{
            title: '通过',
            handler: function() {

                if ($('#remark').val() == "") {
                    toastr.error("审核意见不能为空");
                } else {
                    var data = $('#popForm').serializeObject();
                    data.codeList = dataCode;
                    data.payResult = "1";
                    data.payUser = getUserName();
                    reqApi({
                        code: '802701',
                        json: data
                    }).done(function(data) {
                        sucList();
                        dw.close().remove();
                    });
                }

            }
        }, {
            title: '不通过',
            handler: function() {
                if ($('#payNote').val() == "") {
                    toastr.error("审核意见不能为空");
                } else {
                    var data = [];
                    data.codeList = dataCode;
                    data.payResult = "1";
                    data.payUser = getUserName();
                    reqApi({
                        code: '802701',
                        json: data
                    }).done(function(data) {
                        sucList();
                        dw.close().remove();
                    });
                }
            }
        }, {
            title: '取消',
            handler: function() {
                dw.close().remove();
            }
        }]
    });

});