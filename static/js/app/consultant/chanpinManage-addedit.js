$(function() {
    // 品牌顾问-产品管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    },{
        field : 'name',
        title : '广告语',
        required : true
    }, {
        field : 'url',
        title : '所属品牌',
        required : true,
        type : 'select'
    }, {
        field : 'status',
        title : '价格',
        required : true
    },{
        field : 'status',
        title : '缩略图（单）',
        type : 'img',
        single : true
    },{
        field : 'status',
        title : '展示图（多）',
        type : 'img'
    },{
        field : 'details',
        title : '详情',
        required : true
    },  {
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