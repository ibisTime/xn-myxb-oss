$(function() {
    // 业务管理-美导管理-美导管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    // console.log(check);
    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'T'
    },
    //     {
    //     field : 'name',
    //     title : '姓名',
    //     required : true
    // },
        {
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
    },
    //     {
    //     field : 'orderNo',
    //     title : '推荐人手机号',
    //     required : true,
    //     mobile : true
    // },
    //     {
    //     field : 'remark',
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
        title : '授课风格',
        // required : true
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
            listCode: '805120',
            params: {
                companyCode : OSS.company,
                kind : 'M',
                start : 1,
                limit : 10
            },
            keyName: 'userId',
            valueName: 'nickname',
            // readonly: false
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
    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        addCode : '805042',
        editCode : '805081',
        detailCode: '805121',
        view: view
    });
// }


});