$(function() {
    // 业务管理-品牌管理-产品管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    },{
        field : 'slogan',
        title : '广告语',
        required : true
    }, {
        field : 'url',
        title : '所属品牌',
        required : true,
        type : 'select'
    }, {
        field : 'price',
        title : '价格',
        required : true
    },{
        field : 'pic',
        title : '缩略图（单）',
        type : 'img',
        single : true
    },{
        field : 'advPic',
        title : '展示图（多）',
        type : 'img'
    },{
        field : 'description',
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