$(function() {
    // 业务管理-积分管理-兑换商品管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    }, {
        field : 'slogan',
        title : '广告语',
        required : true
    }, {
        field : 'price',
        title : '积分',
        required : true
    }, {
        field : 'quantity',
        title : '库存',
        required : true
    }, {
        field : 'advPic',
        title : '广告图（单）',
        type : 'img',
        required : true,
        single : true
    }, {
        field : 'pic',
        title : '展示图（多）',
        type : 'img',
        required : true
    }, {
        field : 'faceKind',
        title : '查看对象',
        required : true,
        type : 'checkbox',
        items :[
            {   // key是构建的checkbox的value属性，也就意味着是实际勾选后传过去的值
                key : 'meidao',
                // value是checkbox后面跟的label显示的内容，并非传到后台的内容
                value : '美导'
            }, {
                key : 'teacher',
                value : '讲师'
            },{
                key : 'expert',
                value : '专家'
            },{
                key : 'meirongyuan',
                value : '美容院'
            }
        ]
    }, {
        field : 'description',
        title : '详情',
        required : true
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
        addCode:'805280',
        view: view
    });

});