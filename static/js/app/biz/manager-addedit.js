$(function() {
    // 业务管理-经纪人管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true
    }, {
        field : 'level',
        title : '级别',
        required : true
    }, {
        field : 'remark',
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
        field : 'status',
        title : '头像',
        type : 'img',
        single : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        detailCode: '805121',
        view: view
    });

});