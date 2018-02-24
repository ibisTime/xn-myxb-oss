$(function() {
    // 业务管理-经纪人管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'kind',
        type: 'hidden',
        value: 'M'
    },{
        field : 'loginName',
        title : '登录名',
        readonly : true
    }, {
        field : 'nickname',
        title : '昵称',
        required : true
    }, {
        field : 'gender',
        title : '性别',
        required : true,
        type: 'select',
        data: {'1': '男', '0': '女'}
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
        field : 'serviceKind',
        title : '服务对象',
        required : true,
        type : 'checkbox',
        items :[
            {   // key是构建的checkbox的value属性，也就意味着是实际勾选后传过去的值
                key : 'T',
                // value是checkbox后面跟的label显示的内容，并非传到后台的内容
                value : '美导'
            }, {
                key : 'L',
                value : '讲师'
            },{
                key : 'S',
                value : '专家'
            }
        ]
    }, {
        field : 'photo',
        title : '头像',
        type : 'img',
        single : true
    }, {
        field : 'introduce',
        title : '介绍',
        required : true
    },{
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: {
            userId: code
        },
        addCode : '805042',
        editCode : '805095',
        detailCode: '805121',
        view: view,
        beforeSubmit : function (data) {
            data.serviceKind = data.serviceKind.toString();
            data.userId = code;
            return data;
        }
    });

});