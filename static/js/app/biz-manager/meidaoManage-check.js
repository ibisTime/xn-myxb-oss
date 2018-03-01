$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var mobile = getQueryString('mobile');
    var check = !!getQueryString('check');
    var view = !!getQueryString('view');
    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
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
        field : 'photo',
        title : '头像',
        type : 'img',
        single : true,
        required : true
    }, {
        field : 'gender',
        title : '性别',
        type : 'select',
        data: {'1': '男', '0': '女'},
        required : true
    }, {
        field : 'introduce',
        title : '个人简介',
        required : true,
        type : 'doubleLine'
    }, {
        field : 'slogan',
        title : '广告语',
        required : true
    },{
        field : 'mainBrand',
        title : '主荐品牌',
        required : true,
        search: true,
        type: 'select',
        listCode: '805258',
        keyName : 'code',
        valueName: 'name'
    },{
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格'
    },{
        field : 'remark',
        title : '备注'
    }];


    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                console.log($('.center-img'));
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
    var options = {
        fields: fields,
        code: {
            userId: code
        },
        view: view,
        buttons: buttons,
        addCode : '805044',
        detailCode: '805121',
    };
    buildDetail(options);
    // $('#subBtn').attr('value','通过');
    // $('#backBtn').attr('value','不通过').attr('id','rejectBtn');
    // $('#subBtn').click(function () {
    //     console.log(data111);
    //     if ($('#jsForm').valid()) {
    //                     // var data = $('#jsForm').serializeObject();
    //                     // console.log($('.center-img'));
    //                     data111.approveResult = '1';
    //                     // data.kind = 'T';
    //                     data111.userId = code;
    //                     // data.mobile = mobile;
    //                     data111.approver = getUserName();
    //                     // data.introduce = $('#introduce').val();
    //                     reqApi({
    //                         code: '805044',
    //                         json: data111
    //                     }).done(function(data) {
    //                         sucDetail();
    //                     });
    //                 }
    // })
    // $('#rejectBtn').off().click(function () {
    //     console.log(data111);
    //     if ($('#jsForm').valid()) {
    //                     // var data = $('#jsForm').serializeObject();
    //                     // console.log($('.center-img'));
    //                     data111.approveResult = '0';
    //                     // data.kind = 'T';
    //                     data111.userId = code;
    //                     // data.mobile = mobile;
    //                     data111.approver = getUserName();
    //                     // data.introduce = $('#introduce').val();
    //                     reqApi({
    //                         code: '805044',
    //                         json: data111
    //                     }).done(function(data) {
    //                         sucDetail();
    //                     });
    //                 }
    // })
});