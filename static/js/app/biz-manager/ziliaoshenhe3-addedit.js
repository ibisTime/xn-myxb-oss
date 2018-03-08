$(function() {
    // 业务管理-专家管理-资料审核-审核
    var code = getQueryString('code');
    var check = getQueryString('check');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'mobile',
        title : '手机号'
    },{
        field : 'realName',
        title : '姓名'
    }, {
        field : 'slogan',
        title : '广告语'
    }, {
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'styleName',
        title : '授课风格'
    }, {
        field : 'status',
        title : '状态',
        search: true,
        type: 'select',
        data :{'1':'待审核','2':'审核不通过','3':'审核通过'}
    },  {
        field : 'introduce',
        title : '个人简介',
        type : 'doubleLine'
    }, {
        field : 'remark',
        title : '备注',
        readonly : check?false :view?true:false
    }];


    if(check) {
        var buttons = [{
            title: '通过',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.approver = getUserName();
                    data.result = '1';
                    data.code = code;
                    data.remark = $('#remark').val();
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
                    data.remark = $('#remark').val();
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
            buttons : buttons,
            view: true,
            detailCode: '805536',
        };
    }else {
        var options = {
            fields: fields,
            code: {
                code: code
            },
            view: true,
            detailCode: '805536',
        };
    }


    buildDetail(options);

});