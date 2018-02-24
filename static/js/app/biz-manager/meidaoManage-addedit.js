$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
    }, {
        field : 'loginName',
        title : '登录名',
        readonly : true
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
        title : '备注',
        readonly : check ? false : view
    },{
        field : 'handler',
        title : '经纪人',
        type : 'select',
        pageCode: '805121',
        keyName: 'userId',
        valueName: 'nickname',
        hidden :view?false:true
    }];
    var columns = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
    },{
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
    },{
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格'// required : true
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
        title : '备注',
        readonly : check ? false : view
    }];
// if(check== true) {
//     console.log('2');
//     buildDetail({
//         fields: fields,
//         buttons: [{
//             title: '通过',
//             handler: function() {
//
//                 if ($('#remark').val() == "") {
//                     toastr.error("审核意见不能为空");
//                 } else {
//                     var data = $('#popForm').serializeObject();
//                     data.codeList = dataCode;
//                     data.payResult = "1";
//                     data.payUser = getUserName();
//                     reqApi({
//                         code: '802701',
//                         json: data
//                     }).done(function(data) {
//                         sucList();
//                         dw.close().remove();
//                     });
//                 }
//
//             }
//         }, {
//             title: '不通过',
//             handler: function() {
//                 if ($('#payNote').val() == "") {
//                     toastr.error("审核意见不能为空");
//                 } else {
//                     var data = [];
//                     data.codeList = dataCode;
//                     data.payResult = "1";
//                     data.payUser = getUserName();
//                     reqApi({
//                         code: '802701',
//                         json: data
//                     }).done(function(data) {
//                         sucList();
//                         dw.close().remove();
//                     });
//                 }
//             }
//         }, {
//             title: '取消',
//             handler: function() {
//                 dw.close().remove();
//             }
//         }]
//     });
// }else {
//     console.log('1');
    if(view) {
        buildDetail({
            fields: fields,
            code: {
                userId: code
            },
            addCode : '805042',
            editCode : '805081',
            detailCode: '805121',
            view: view
        });
    }else{
        buildDetail({
            fields: columns,
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
    }

// }


});