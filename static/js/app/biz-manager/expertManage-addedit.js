$(function() {
    // 业务管理-专家管理-专家管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'S'
    }, {
        field : 'loginName',
        title : '登录名',
        readonly : view?true:code?true:false,
        required : true,
    },{
        field : 'realName',
        title : '真实姓名',
        required : true
    },{
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'orderNo',
        title : '推荐人',
        formatter : function (v,data) {
            return data.refereeUser?data.refereeUser.realName:'-';
        }
    }, {
        field : 'level',
        title : '等级',
        type: 'select',
        listCode: '805906',
        params :{
            parentKey : 'level'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
    },
    //     {
    //     field : 'remark',
    //     title : '积分余额'
    // },
        {
            field : 'status',
            title : '状态',
            search: true,
            type: 'select',
            formatter : Dict.getNameForList('user_status'),
            key: 'user_status'
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
        },
    //     {
    //     field : 'orderNo',
    //     title : '序号'
    // },
        {
        field : 'remark',
        title : '备注'
    },{
        field : 'handler',
        title : '经纪人',
        type : 'select',
        pageCode: '805121',
        keyName: 'userId',
        valueName: 'nickname',
        hidden :view?false:true
    }];

    // 新增和修改
    var columns = [{
        field: 'kind',
        type: 'hidden',
        value: 'S'
    }, {
        field : 'loginName',
        title : '登录名',
        readonly : view?true:code?true:false,
        required : true
    },{
        field : 'realName',
        title : '真实姓名',
        required : true
    },{
        field : 'mobile',
        title : '手机号',
        required : true
    },
    //     {
    //     field : 'orderNo',
    //     title : '推荐人',
    //     formatter : function (v,data) {
    //         return data.refereeUser?data.refereeUser.realName:'-';
    //     }
    // },
    //     {
    //     field : 'level',
    //     title : '等级',
    //     type: 'select',
    //     listCode: '805906',
    //     params :{
    //         parentKey : 'level'
    //     },
    //     keyName : 'dkey',
    //     valueName: 'dvalue'
    // },
        //     {
        //     field : 'remark',
        //     title : '积分余额'
        // },
        // {
        //     field : 'status',
        //     title : '状态',
        //     search: true,
        //     type: 'select',
        //     formatter : Dict.getNameForList('user_status'),
        //     key: 'user_status'
        // },
        {
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
            required : true,
            type : 'textarea'
        },
        //     {
        //     field : 'orderNo',
        //     title : '序号'
        // },
        {
            field : 'remark',
            title : '备注'
        }];

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
                return data;
            },
            addCode : '805042',
            editCode : '805095',
            detailCode: '805121',
            view: view
        });
    }


});