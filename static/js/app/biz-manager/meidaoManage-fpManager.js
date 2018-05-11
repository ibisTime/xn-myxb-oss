$(function() {
    // 业务管理-美导管理-美导管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
    }, {
        field : 'loginName',
        title : '登录名',
        required : true
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
        field : 'speciality',
        title : '专长领域',
        // required : true
    }, {
        field : 'style',
        title : '授课风格',
        type : 'select',
        key: 'style',
        keyCode:'805906'
    },{
        field : 'photo',
        title : '头像',
        type : 'img',
        single : true
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
    } ,{
        field : 'handler',
        title : '经纪人',
        type : 'select',
        pageCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'M',
//          serviceKind :'B',
            start : 1,
            limit : 1000
        },
        keyName: 'userId',
        valueName: 'realName',
        readonly: false,
        required : true
    }];


    var buttons = [
        {
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.updater = getUserName();
                    data.userId = userId;
                    reqApi({
                        code: '805097',
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                }
            }
        },  {
            title: '返回',
            handler: function() {
                goBack();
            }
        }
    ];


    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        addCode : '805042',
        editCode : '805081',
        detailCode: '805121',
        view: view,
        buttons : buttons
    });
// }


});