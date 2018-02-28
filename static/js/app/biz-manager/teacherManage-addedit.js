$(function() {
    // 业务管理-讲师管理-讲师管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var level = getQueryString('level') || 1;


    if(code) {
        reqApi({
            code: '805121',
            json: {
                userId: code
            }
        }, true).then(function (data) {
            $("#photo").css('background','url("' + OSS.picBaseUrl+'/'+data.photo + '")');
            $("#photo").css('background-size','cover');
            $("#photo").attr("data-url",data.photo);
            $("#photo").attr("src",OSS.picBaseUrl+'/'+data.photo);
        })
    }
    //分页器用
    var config={
        start:1,
        limit:10,
        level:level,
        kind :'L'
    };


    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'L'
    },{
        field : 'loginName',
        title : '登录名',
        required : true,
        readonly : view?true:false,
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
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格',
        type : 'select',
        key: 'style',
        keyCode:'805906'
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
        required : true,
        type: 'textarea'
    }, {
        field : 'handler',
        title : '经纪人',
        type : 'select',
        pageCode: '805121',
        keyName: 'userId',
        valueName: 'nickname',
        hidden :view?false:true
    },{
        field : 'remark',
        title : '备注',
        readonly : check ? false : view
    }];
// 新增和修改
    var columns = [{
        field: 'kind',
        type: 'hidden',
        value: 'L'
    },{
        field : 'loginName',
        title : '登录名',
        required : true,
        readonly : view?true:false,
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
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格',
        type : 'select',
        key: 'style',
        keyCode:'805906'
    }, {
        field : 'photo',
        title : '头像',
        type: 'imgCheck',
        imgCheckBtnVal:'头像选择',
        imgCheckBtnId:'imgCheckBtn'
    },{
        field : 'gender',
        title : '性别',
        type : 'select',
        data: {'1': '男', '0': '女'},
        required : true
    }, {
        field : 'introduce',
        title : '个人简介',
        required : true,
        type: 'textarea'
    }, {
        field : 'remark',
        title : '备注',
        readonly : check ? false : view
    }];
//审核
    var shenhe = [{
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
        type: 'imgCheck',
        imgCheckBtnVal:'头像选择',
        imgCheckBtnId:'imgCheckBtn'
    }, {
        field : 'gender',
        title : '性别',
        type : 'select',
        data: {'1': '男', '0': '女'},
        required : true
    }, {
        field : 'introduce',
        title : '个人简介',
        type : 'textarea',
        required : true
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
        title : '授课风格',
        type : 'select',
        key: 'style',
        keyCode:'805906'
    },{
        field : 'remark',
        title : '备注'
    }];

    // 审核用按钮
    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approveResult = '1';
                data.kind = 'L';
                data.userId = code;
                data.mobile = mobile;
                data.approver = getUserName();
                data.approver = getUserName();
                data.introduce = $('#introduce').val();
                data.photo = $("#photo").attr("data-url");
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
                data.kind = 'L';
                data.code = code;
                data.mobile = mobile;
                data.approver = getUserName();
                data.introduce = $('#introduce').val();
                data.photo = $("#photo").attr("data-url");
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
    if(check) {
        var options = {
            fields: shenhe,
            code: {
                userId: code
            },
            view: false,
            buttons : buttons,
            beforeSubmit : function (data) {
                data.photo = $("#photo").attr("data-url");
                data.userId = code;
                return data
            },
            addCode : '805042',
            editCode : '805044',
            detailCode: '805121',
        };
        buildDetail(options);
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
            json: config
        }, true).then(function(data){
            var lists = data.list;
            if(data.list.length){
                var html = "";
                for(var v of lists) {
                    html += buildHtml(v);
                }
                $("#dialog .content .wrap").html(html);

            }else{
                config.start == 1 && $("#dialog .content").empty()
            }
            config.start == 1 && initPagination(data);
        },hideLoading)

        //弹窗图片点击
        $("#dialog .content").on("click",'.item',function(){
            var _this= $(this)
            var url = _this.attr("data-url");
            $("#photo").css('background','url("' + OSS.picBaseUrl+'/'+url + '")');
            $("#photo").css('background-size','cover');
            $("#photo").attr("data-url",url);
            $("#photo").attr("src",OSS.picBaseUrl+'/'+url);
            $("#dialog").addClass("hidden")
        })

        $('#no-Btn').click(function () {
            $("#dialog").addClass("hidden")
        })

    }

    function buildHtml(item){
        var htmlTmpl='<div class="item" style = "display:inline-block" data-url="'+item.url+'"><img style="width: 100px;height: 100px" src="'+OSS.picBaseUrl+'/'+item.url+'" /></div>'

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
                    showLoading();
                    config.start = _this.getCurrent();
                    getImg();
                }
            }
        });
    }
});
