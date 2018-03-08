$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');
    var level = getQueryString('level') || 1;
    var style = [];
    // var items = Dict.getName("style").map(function(item){
    //     return {
    //         key: item.dkey,
    //         value: item.dvalue
    //     };
    // });
    // console.log(items);
    reqApi({
        code: '805906',
        json: {
            parentKey : 'style'
        }
    }, true).then(function (data) {
        for(var v =0 ;v<data.length;v++) {
            var temp={};
            temp.key = data[v].dkey;
            temp.value = data[v].dvalue;
            style.push(temp)

        }

        // 新增和修改
        var columns = [{
            field: 'kind',
            type: 'hidden',
            value: 'T'
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
            field : 'speciality',
            title : '专长领域',
            required : true
        },
            {
                field : 'style',
                title : '授课风格',
                type : 'checkbox',
                items :style,
                required : true
            },
            {
                field : 'photo',
                title : '头像',
                type: 'imgCheck',
                imgCheckBtnVal:'头像选择',
                imgCheckBtnId:'imgCheckBtn',
                required : true
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
                field : 'slogan',
                title : '广告语',
                required : true
            }, {
                field : 'introduce',
                title : '个人简介',
                required : true,
                type : 'doubleLine'
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
            imgCheckBtnId:'imgCheckBtn',
            required : true
        }, {
            field : 'gender',
            title : '性别',
            type : 'select',
            data: {'1': '男', '0': '女'},
            required : true
        }, {
            field : 'slogan',
            title : '广告语',
            required : true
        }, {
            field : 'introduce',
            title : '个人简介',
            required : true,
            type : 'doubleLine'
        },{
            field : 'speciality',
            title : '专长领域',
            required : true
        }, {
            field : 'style',
            title : '授课风格',
            type : 'checkbox',
            items :style,
            required : true
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
                    data.style = data.style.toString();
                    data.approveResult = '1';
                    data.kind = 'T';
                    data.userId = code;
                    data.mobile = mobile;
                    data.approver = getUserName();
                    data.approver = getUserName();
                    data.introduce = $('#introduce').val();
                    data.photo = $("#photo").attr("data-url");
                    if(data.photo == '' || data.photo == undefined) {
                        toastr.info('头像不能为空');
                        return
                    }
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
                    data.style = data.style.toString();
                    data.approveResult = '0';
                    data.kind = 'T';
                    data.userId = code;
                    data.mobile = mobile;
                    data.approver = getUserName();
                    data.introduce = $('#introduce').val();
                    data.photo = $("#photo").attr("data-url");
                    if(data.photo == '' || data.photo == undefined) {
                        toastr.info('头像不能为空');
                        return
                    }
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
            buildDetail({
                fields: columns,
                code : {
                    userId : code
                },
                beforeSubmit : function (data) {
                    data.style = data.style.toString();
                    data.userId = code;
                    data.loginName = data.mobile;
                    if(data.level==""){
                        delete data.level
                    }
                    data.photo = $("#photo").attr("data-url");
                    if(data.photo == undefined || data.photo == '') {
                        toastr.info('头像不能为空');
                        return
                    }else {
                        return data;
                    }

                },
                addCode : '805042',
                editCode : '805095',
                detailCode: '805121',
                view: view
            });
        }

        $("#imgCheckBtn").click(function(){
            showLoading()
            getImg(true);
            $("#dialog").removeClass("hidden")
        })

    });


    if(code) {
        reqApi({
            code: '805121',
            json: {
                userId: code
            }
        }, true).then(function (data) {
            $("#photo").css('background','url("' + OSS.picBaseUrl+'/'+data.photo + '")');
            $("#photo").css('background-size','100px 100px');
            $("#photo").attr("data-url",data.photo);
            $("#photo").attr("src",OSS.picBaseUrl+'/'+data.photo);
        })
    }
    //分页器用
    var config={
        start:1,
        limit:10,
        level:level,
        kind :'T'
    };









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
         	// config.start == 1 && $("#dialog .content").empty()
         	config.start == 1 && $("#dialog .content").html('<p>暂无可使用的头像</p>');
         }
     	config.start == 1 && initPagination(data);
 	},hideLoading)

        //弹窗图片点击
        $("#dialog .content").on("click",'.item',function(){
            var _this= $(this)
            var url = _this.attr("data-url");
            $("#photo").css('background','url("' + OSS.picBaseUrl+'/'+url + '")');
            $("#photo").css('background-size','100px 100px');
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
