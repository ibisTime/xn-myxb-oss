$(function() {
    // 业务管理-品牌顾问管理
    var code = getQueryString('code');
    console.log(code);
    var view = !!getQueryString('v');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'A'
    },{
        field : 'loginName',
        title : '登录名',
        hidden : view?false : true
    },{
        field : 'realName',
        title : '真实姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true,
        mobile : true
    },{
        field : 'mainBrand',
        title : '主荐品牌',
        required : true,
        search: true,
        type: 'select',
        listCode: '805258',
        keyName : 'code',
        valueName: 'name'
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