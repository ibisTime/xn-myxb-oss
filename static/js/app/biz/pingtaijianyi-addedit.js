$(function() {
    // 业务管理-评论管理-平台建议
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var caina = !!getQueryString('caina');

    var fields = [{
        field : 'content',
        title : '内容'
    }, {
        field : 'status',
        title : '状态',
        type:'select',
        data : {
            '0':'待采纳',
            '1':'未采纳',
            '2':'已采纳'
        }
    }, {
        field : 'commenter',
        title : '评论人'
    },{
        field : 'commentDatetime',
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
                    data.code = code;
                    data.result = "1";
                    data.approver = getUserName();
                    reqApi({
                        code: '805401',
                        json: data
                    }).done(function(data) {
                        sucDetail();
                    });
                }

            }
        }, {
            title: '不采纳',
            handler: function() {

                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.code = code;
                    data.result = "0";
                    data.approver = getUserName();
                    reqApi({
                        code: '805401',
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
            detailCode: '805403',
            view: true,
            buttons: buttons
        };

        buildDetail(options);
    } else {
        buildDetail({
            fields: fields,
            code: code,
            detailCode: '805403',
            view: view
        });
    }


});