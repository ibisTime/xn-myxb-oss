$(function() {
    // 业务管理-讲师管理-讲师管理
    console.log(getQueryString('userId'));
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'L'
    },{
        field : 'loginName',
        title : '登录名',
        required : true
    }, {
        field : 'realName',
        title : '真实姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true,
        mobile : true
    },
    //     {
    //     field : 'orderNo',
    //     title : '推荐人手机号',
    //     required : true
    // },
    //     {
    //     field : 'level',
    //     title : '等级',
    //     type : 'select',
    //     required : true
    // },
        {
        field : 'speciality',
        title : '专长领域',
        // required : true
    }, {
        field : 'style',
        title : '授课风格'
    }, {
        field : 'photo',
        title : '头像',
        type : 'img',
        single : true
    },{
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
// if(check=1) {
//     // 审核
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
//                 if ($('#remark').val() == "") {
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
    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        addCode : '805042',
        detailCode: '805121',
        view: view
    });
// }

});