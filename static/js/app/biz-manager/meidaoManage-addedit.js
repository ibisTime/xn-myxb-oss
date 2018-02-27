$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var photooo;

    //分页器用
    var config={
        start:1,
        limit:10,
    };



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

    // 新增
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
        title : '授课风格'
    },{
        field : 'photo',
        title : '头像',
        type: 'imgCheck',
        imgCheckBtnVal:'头像选择',
        imgCheckBtnId:'imgCheckBtn',
//      type : 'select',
//      single : true,
//      listCode: '805443',
//      params: {
//          limit : 100000,
//          start :1,
//          level : 1
//      },
//      keyName: 'url',
//      valueName: 'url',
//      formatter: function(v, data) {
//          return data.url && '<img  style="width:40px;height:40px" src="' + OSS.picBaseUrl + '/' + data.url + '" >' || "-"
//      }
    }, {
        field : 'level',
        title : '用户等级',
        type : 'hidden'
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
        type : 'textarea'
    }, {
        field : 'remark',
        title : '备注',
        readonly : check ? false : view
    }];


    // 审核
    // var shenhe = [{
    //     field: 'kind',
    //     type: 'hidden',
    //     value: 'T'
    // }, {
    //     field : 'realName',
    //     title : '真实姓名',
    //     required : true
    // }, {
    //     field : 'mobile',
    //     title : '手机号',
    //     required : true,
    //     mobile : true
    // }, {
    //     field : 'photo',
    //     title : '头像',
    //     type : 'img',
    //     single : true,
    //     required : true
    // }, {
    //     field : 'gender',
    //     title : '性别',
    //     type : 'select',
    //     data: {'1': '男', '0': '女'},
    //     required : true
    // }, {
    //     field : 'introduce',
    //     title : '个人简介',
    //     type : 'textarea',
    //     required : true
    // }, {
    //     field : 'slogan',
    //     title : '广告语',
    //     required : true
    // },{
    //     field : 'mainBrand',
    //     title : '主荐品牌',
    //     required : true,
    //     search: true,
    //     type: 'select',
    //     listCode: '805258',
    //     keyName : 'code',
    //     valueName: 'name'
    // },{
    //     field : 'speciality',
    //     title : '专长领域'
    // }, {
    //     field : 'style',
    //     title : '授课风格'
    // },{
    //     field : 'remark',
    //     title : '备注'
    // }];

    // 审核用按钮
    // var buttons = [{
    //     title: '通过',
    //     handler: function() {
    //         if ($('#jsForm').valid()) {
    //             var data = $('#jsForm').serializeObject();
    //             console.log('111'+$('#photo1').val());
    //             data.approveResult = '1';
    //             data.kind = 'T';
    //             data.userId = code;
    //             data.mobile = mobile;
    //             data.approver = getUserName();
    //             data.approver = getUserName();
    //             data.introduce = $('#introduce').val();
    //             reqApi({
    //                 code: '805044',
    //                 json: data
    //             }).done(function(data) {
    //                 sucDetail();
    //             });
    //         }
    //     }
    // }, {
    //     title: '不通过',
    //     handler: function() {
    //         if ($('#jsForm').valid()) {
    //             var data = $('#jsForm').serializeObject();
    //             data.result = '0';
    //             data.kind = 'T';
    //             data.code = code;
    //             data.mobile = mobile;
    //             data.approver = getUserName();
    //             data.introduce = $('#introduce').val();
    //             reqApi({
    //                 code: '805044',
    //                 json: data
    //             }).done(function(data) {
    //                 sucDetail();
    //             });
    //         }
    //     }
    // }, {
    //     title: '返回',
    //     handler: function() {
    //         goBack();
    //     }
    // }];
    if(check) {
        var options = {
            fields: shenhe,
            code: {
                userId: code
            },
            view: false,
            beforeSubmit : function (data) {
//              console.log(data);
//              photooo = data.photo;
                data.photo = $("#photo").attr("data-url");
                return data
            },
            // buttons: buttons,
            // addCode : '805044',
            // detailCode: '805121',
        };
        buildDetail(options);
//      console.log('photooo'+photooo);
    }else {
        if(view) {
            buildDetail({
                fields: fields,
                code: {
                    userId: code
                },
                addCode : '805042',
                editCode : '805095',
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
                    if(data.level==""){
                        delete data.level
                    }
                    data.photo = $("#photo").attr("data-url");
                    return data;
                },
                addCode : '805042',
                editCode : '805095',
                detailCode: '805121',
                view: view
            });
        }
    }

    $("#imgCheckBtn").click(function(){
        showLoading()
        getImg(true);
        $("#dialog").removeClass("hidden")
    })

    function getImg(refresh){
        refresh?config.start='1':'';
        hideLoading()

        //请求图片
 	reqApi({
            code: '805443',
            json: {
                 limit : 100000,
                 start :1,
                 // level : 1
            }
        }, true).then(function(data){
         var lists = data.list;
         if(data.list.length){
             var html = "";
             // lists.forEach((item , i) => {
             //     html += buildHtml(item);
             // });
             for(var v of lists) {
                 // console.log(v);
                 html += buildHtml(v);
             }
 			$("#dialog .content").html(html);
         }else{
         	config.start == 1 && $("#dialog .content").empty()
         }
     	config.start == 1 && initPagination(data);
 	},hideLoading)

        //弹窗图片点击
        $("#dialog .content").on("click",'.item',function(){
            var _this= $(this)
            var url = _this.attr("data-url");
            $("#photo").attr("background-image",OSS.picBaseUrl+'/'+url);
            $("#photo").attr("src",OSS.picBaseUrl+url);
            $("#dialog").addClass("hidden")
        })

    }

    function buildHtml(item){
        var htmlTmpl='<div class="item" data-url="'+item.url+'"><img style="width: 100px;height: 100px" src="'+OSS.picBaseUrl+'/'+item.url+'" /></div>'

        return htmlTmpl;
    }

    // 初始化分页器
    function initPagination(data){
        $("#pagination .pagination").pagination({
            pageCount: data.totalPage,
            showData: config.limit,
            jump: true,
            coping: true,
            prevContent: '<img src="/static/images/arrow---left.png" />',
            nextContent: '<img src="/static/images/arrow---right.png" />',
            keepShowPN: true,
            totalData: data.totalCount,
            jumpIptCls: 'pagination-ipt',
            jumpBtnCls: 'pagination-btn',
            jumpBtn: '确定',
            isHide: true,
            callback: function(_this){
                if(_this.getCurrent() != config.start){
                    base.showLoadingSpin();
                    config.start = _this.getCurrent();
                    getImg(config);
                }
            }
        });
    }
});







// $(function() {
//     // 业务管理-美导管理-美导管理
//     var code = getQueryString('code');
//     var view = !!getQueryString('v');
//     var check = !!getQueryString('check');
//     var photooo;
//     var fields = [{
//         field: 'kind',
//         type: 'hidden',
//         value: 'T'
//     }, {
//         field : 'loginName',
//         title : '登录名',
//         readonly : view?true:code?true:false,
//         required : true,
//     },{
//         field : 'realName',
//         title : '真实姓名',
//         required : true
//     }, {
//         field : 'mobile',
//         title : '手机号',
//         required : true,
//         mobile : true
//     }, {
//         field : 'speciality',
//         title : '专长领域'
//     }, {
//         field : 'style',
//         title : '授课风格'
//     },{
//         field : 'photo',
//         title : '头像',
//         type : 'img',
//         single : true
//     }, {
//         field : 'gender',
//         title : '性别',
//         type : 'select',
//         data: {'1': '男', '0': '女'},
//         required : true
//     }, {
//         field : 'introduce',
//         title : '个人简介',
//         required : true
//     }, {
//         field : 'remark',
//         title : '备注',
//         readonly : check ? false : view
//     },{
//         field : 'handler',
//         title : '经纪人',
//         type : 'select',
//         pageCode: '805121',
//         keyName: 'userId',
//         valueName: 'nickname',
//         hidden :view?false:true
//     }];
//
//     // 新增
//     var columns = [{
//         field: 'kind',
//         type: 'hidden',
//         value: 'T'
//     },{
//         field : 'loginName',
//         title : '登录名',
//         required : true
//     },{
//         field : 'realName',
//         title : '真实姓名',
//         required : true
//     }, {
//         field : 'mobile',
//         title : '手机号',
//         required : true,
//         mobile : true
//     },{
//         field : 'speciality',
//         title : '专长领域'
//     }, {
//         field : 'style',
//         title : '授课风格'
//     },{
//         field : 'photo',
//         title : '头像',
//         type : 'select',
//         // single : true,
//         listCode: '805443',
//         params: {
//             limit : 100000,
//             start :1,
//             level : 1
//         },
//         keyName: 'url',
//         valueName: 'url',
//         formatter: function(v, data) {
//             return data.url && '<img  style="width:40px;height:40px" src="' + OSS.picBaseUrl + '/' + data.url + '" >' || "-"
//         }
//     }, {
//         field : 'gender',
//         title : '性别',
//         type : 'select',
//         data: {'1': '男', '0': '女'},
//         required : true
//     }, {
//         field : 'introduce',
//         title : '个人简介',
//         required : true,
//         type : 'textarea'
//     }, {
//         field : 'remark',
//         title : '备注',
//         readonly : check ? false : view
//     }];
//
//
//     // 审核
//     var shenhe = [{
//         field: 'kind',
//         type: 'hidden',
//         value: 'T'
//     }, {
//         field : 'realName',
//         title : '真实姓名',
//         required : true
//     }, {
//         field : 'mobile',
//         title : '手机号',
//         required : true,
//         mobile : true
//     }, {
//         field : 'photo',
//         title : '头像',
//         type : 'img',
//         single : true,
//         required : true
//     }, {
//         field : 'gender',
//         title : '性别',
//         type : 'select',
//         data: {'1': '男', '0': '女'},
//         required : true
//     }, {
//         field : 'introduce',
//         title : '个人简介',
//         type : 'textarea',
//         required : true
//     }, {
//         field : 'slogan',
//         title : '广告语',
//         required : true
//     },{
//         field : 'mainBrand',
//         title : '主荐品牌',
//         required : true,
//         search: true,
//         type: 'select',
//         listCode: '805258',
//         keyName : 'code',
//         valueName: 'name'
//     },{
//         field : 'speciality',
//         title : '专长领域'
//     }, {
//         field : 'style',
//         title : '授课风格'
//     },{
//         field : 'remark',
//         title : '备注'
//     }];
//
//     // 审核用按钮
//     // var buttons = [{
//     //     title: '通过',
//     //     handler: function() {
//     //         if ($('#jsForm').valid()) {
//     //             var data = $('#jsForm').serializeObject();
//     //             console.log('111'+$('#photo1').val());
//     //             data.approveResult = '1';
//     //             data.kind = 'T';
//     //             data.userId = code;
//     //             data.mobile = mobile;
//     //             data.approver = getUserName();
//     //             data.approver = getUserName();
//     //             data.introduce = $('#introduce').val();
//     //             reqApi({
//     //                 code: '805044',
//     //                 json: data
//     //             }).done(function(data) {
//     //                 sucDetail();
//     //             });
//     //         }
//     //     }
//     // }, {
//     //     title: '不通过',
//     //     handler: function() {
//     //         if ($('#jsForm').valid()) {
//     //             var data = $('#jsForm').serializeObject();
//     //             data.result = '0';
//     //             data.kind = 'T';
//     //             data.code = code;
//     //             data.mobile = mobile;
//     //             data.approver = getUserName();
//     //             data.introduce = $('#introduce').val();
//     //             reqApi({
//     //                 code: '805044',
//     //                 json: data
//     //             }).done(function(data) {
//     //                 sucDetail();
//     //             });
//     //         }
//     //     }
//     // }, {
//     //     title: '返回',
//     //     handler: function() {
//     //         goBack();
//     //     }
//     // }];
//     if(check) {
//         var options = {
//             fields: shenhe,
//             code: {
//                 userId: code
//             },
//             view: false,
//             beforeSubmit : function (data) {
//                 console.log(data);
//                 photooo = data.photo;
//                 return data
//             },
//             // buttons: buttons,
//             // addCode : '805044',
//             // detailCode: '805121',
//         };
//         buildDetail(options);
//         console.log('photooo'+photooo);
//     }else {
//         if(view) {
//             buildDetail({
//                 fields: fields,
//                 code: {
//                     userId: code
//                 },
//                 addCode : '805042',
//                 editCode : '805095',
//                 detailCode: '805121',
//                 view: view
//             });
//         }else{
//             buildDetail({
//                 fields: columns,
//                 code : {
//                     userId : code
//                 },
//                 beforeSubmit : function (data) {
//                     data.userId = code;
//                     return data;
//                 },
//                 addCode : '805042',
//                 editCode : '805095',
//                 detailCode: '805121',
//                 view: view
//             });
//         }
//     }
//
// });