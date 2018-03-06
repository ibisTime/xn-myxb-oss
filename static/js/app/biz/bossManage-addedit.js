$(function() {
    // 业务管理-美容院管理-老板管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var fields = [{
        field : 'kind',
        type: 'hidden',
        value : 'C'
    }, {
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
    }, {
        field : 'storeName',
        title : '店铺',
        required : true
    }, {
        field : 'adviser',
        title : '团队顾问',
        required : true,
        type : 'select',
        listCode: '805121',
        keyName: 'userId',
        valueName: 'realName'
    }, {
            field : 'gender',
            title : '性别',
            type : 'select',
            data: {'1': '男', '0': '女'},
            required : true
        }, {
            field : 'introduce',
            title : '个人简介',
            required : true
        }, {
            field : 'remark',
            title : '备注'
        }];


    // 新增
    var columns = [{
        field : 'kind',
        type: 'hidden',
        value : 'C'
    }, {
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
    }, {
            field : 'storeName',
            title : '店铺',
            required : true
        }, {
            field : 'adviser',
            title : '团队顾问',
            required : true,
            type : 'select',
            listCode: '805120',
            params: {
                companyCode : OSS.company,
                kind : 'A',
                start : 1,
                limit : 1000
            },
            keyName: 'userId',
            valueName: 'realName'
        }, {
            field : 'gender',
            title : '性别',
            type : 'select',
            data: {'1': '男', '0': '女'},
            required : true
        }, {
            field : 'introduce',
            title : '个人简介',
            required : true
        }, {
            field : 'remark',
            title : '备注'
        }];
    if(view) {
        // 详情
        buildDetail({
            fields: fields,
            code : {
                userId : code
            },
            beforeSubmit : function (data) {
                data.userId = code;
                return data;
            },
            addCode : '805042',
            editCode : '805081',
            detailCode: '805121',
            view: view
        });
    }else {
        buildDetail({
            fields: columns,
            code : {
                userId : code
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
    }


});