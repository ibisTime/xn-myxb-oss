$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var mobile = getQueryString('mobile');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
    }, {
        field : 'loginName',
        title : '登录名',
        readonly : view?true:code?true:false,
        required : true,
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
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格'
    },{
        field : 'photo',
        title : '头像',
        type : 'img',
        single : true,
        required : true,
        readonly : false
    }, {
        field : 'gender',
        title : '性别',
        type : 'select',
        data: {'1': '男', '0': '女'},
        required : true
    }, {
        field : 'introduce',
        title : '个人简介'
    }, {
        field : 'handler',
        title : '经纪人',
        type : 'select',
        pageCode: '805121',
        keyName: 'userId',
        valueName: 'nickname',
        hidden :view?false:true
    },{
        field : 'mainBrand',
        title : '主荐品牌',
        required : true,
        search: true,
        type: 'select',
        listCode: '805258',
        keyName : 'code',
        valueName: 'name',
        readonly : false
    },{
        field : 'slogan',
        title : '广告语',
        required : true,
        readonly : false
    },{
        field : 'remark',
        title : '备注',
        readonly : false
    }];


    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                console.log(data);
                console.log($('#introduce').val());
                data.approveResult = '1';
                data.kind = 'T';
                data.userId = code;
                data.mobile = mobile;
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
    var options = {
        fields: fields,
        code: {
            userId: code
        },
        view: true,
        buttons: buttons,
        detailCode: '805121',
    };
    buildDetail(options);
});