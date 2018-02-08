$(function() {
    // 经纪人-美导管理-美导管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'name',
        title : '姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true
    }, {
        field : 'orderNo',
        title : '推荐人手机号',
        required : true
    }, {
        field : 'remark',
        title : '等级',
        type : 'select',
        required : true
    }, {
        field : 'remark',
        title : '专长领域',
        required : true
    }, {
        field : 'remark',
        title : '授课风格',
        required : true
    },{
        field : 'status',
        title : '头像',
        type : 'img',
        single : true
    }, {
        field : 'remark',
        title : '性别',
        type : 'select'
    }, {
        field : 'remark',
        title : '个人简介'
    }, {
        field : 'remark',
        title : '备注',
        readonly : check ? false : view
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