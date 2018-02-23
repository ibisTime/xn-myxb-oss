$(function() {
    // 业务管理-专家管理-专家管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'orderNo',
        title : '推荐人'
    }, {
        field : 'remark',
        title : '经纪人'
    }, {
        field : 'level',
        title : '等级'
    }, {
        field : 'remark',
        title : '积分余额'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'remark',
        title : '专长领域'
    }, {
        field : 'remark',
        title : '是否推荐'
    }, {
        field : 'orderNo',
        title : '序号'
    }, {
        field : 'remark',
        title : '备注'
    }];
if(check=1) {
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
                if ($('#remark').val() == "") {
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
}else {
    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        detailCode: '805121',
        view: view
    });
}


});