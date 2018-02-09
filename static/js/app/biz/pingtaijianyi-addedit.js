$(function() {
    // 业务管理-评论管理-平台建议
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var caina = !!getQueryString('caina');

    var fields = [{
        field : 'name',
        title : '内容'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'orderNo',
        title : '评论人'
    },{
        field : 'remark',
        title : '评论时间',
        formatter : dateTimeFormat
    },{
        field : 'remark',
        title : '备注',
        readonly : caina ? false : view
    }];
// 详情的情况
    // 采纳建议的情况
    if(caina) {
        var buttons = [{
            title: '采纳',
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
    }
    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        detailCode: '805121',
        view: view
    });

});