$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var style = [];
    reqApi({
        code: '805906',
        json: {
            parentKey : 'style'
        }
    }, true).then(function (data) {
        for (var v = 0; v < data.length; v++) {
            var temp={};
            temp.key = data[v].dkey;
            temp.value = data[v].dvalue;
            style.push(temp);
        }

        // 新增和修改
        var columns = [{
            field: 'kind',
            type: 'hidden',
            value: 'T'
        }, {
            field : 'loginName',
            title : '登录名',
            hidden : !view
        }, {
            field : 'realName',
            title : '真实姓名',
        }, {
            field : 'mobile',
            title : '手机号',
            mobile : true
        }, {
            field : 'speciality',
            title : '专长领域',
        }, {
            field : 'style',
            title : '授课风格',
            type : 'checkbox',
            items : style,
        }, {
            field : 'photo',
            title : '头像',
            type: 'img',
            single: true,
        }, {
            field : 'level',
            title : '用户等级',
            type : 'hidden'
        }, {
            field : 'gender',
            title : '性别',
            type : 'select',
            data: {'1': '男', '0': '女'},
        }, {
            field : 'slogan',
            title : '广告语',
        }, {
            field : 'introduce',
            title : '个人简介',
            type : 'doubleLine'
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
                    data.approveResult = '1';
                    data.kind = 'T';
                    data.userId = code;
                    data.mobile = mobile;
                    data.approver = getUserName();
                    data.approver = getUserName();
                    data.introduce = $('#introduce').val();
                    reqApi({
                        code: '805044',
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
                    data.result = '0';
                    data.kind = 'T';
                    data.code = code;
                    data.mobile = mobile;
                    data.approver = getUserName();
                    data.introduce = $('#introduce').val();
                    reqApi({
                        code: '805044',
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
});