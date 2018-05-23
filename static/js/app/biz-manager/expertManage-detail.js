$(function() {
    // 业务管理-服务团队管理-服务团队管理
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
    }, {
        field : 'mobile',
        title : '手机号',
        required : true,
        mobile : true
    }, {
		field : 'level',
		title : '等级',
        type: 'select',
        key: 'user_level_specialist',
        formatter : Dict.getNameForList('user_level_specialist'),
	}, {
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'styleName',
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
        field : 'slogan',
        title : '广告语',
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
        valueName: 'realName',
        hidden :view?false:true
    }];

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

});