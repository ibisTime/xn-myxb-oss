$(function() {
    // 业务管理-品牌顾问管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'A'
    }, {
        field : 'realName',
        title : '真实姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true,
        mobile : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: {
            userId: code
        },
        beforeSubmit : function (data) {
            data.userId = code;
            data.loginName = data.mobile;
            return data;
        },
        addCode : '805042',
        editCode : '805095',
        detailCode: '805121',
        view: view
    });

});