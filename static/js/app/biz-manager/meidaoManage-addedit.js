$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var level = getQueryString('level') || 1;
    var style = [];
    reqApi({
        code: '805906',
        json: {
            parentKey : 'style'
        }
    }, true).then(function (data) {
        for (var v = 0; v < data.length; v++) {
            var temp={};
            temp.key = data[v].dkey;
            temp.value = data[v].dvalue;
            style.push(temp);
        }

        // 新增和修改
        var columns = [{
            field: 'kind',
            type: 'hidden',
            value: 'T'
        }, {
            field : 'loginName',
            title : '登录名',
            hidden : !view
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
            title : '专长领域',
            required : true
        }, {
            field : 'style',
            title : '授课风格',
            type : 'checkbox',
            items : style,
            required : true
        }, {
            field : 'photo',
            title : '头像',
            type: 'img',
            single: true,
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
            readonly : view
        }];

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
    });
});
