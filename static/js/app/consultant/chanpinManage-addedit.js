$(function() {
    // 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
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
        field : 'brandCode',
        title : '所属品牌',
        required : true,
        type : 'select',
        listCode: '805256',
        params :{
            limit:10,
            start:1
        },
        keyName : 'code',
        searchName :'code',
        valueName: 'name'
    }, {
        field : 'price',
        title : '价格',
        required : true
    },{
        field : 'pic',
        title : '缩略图',
        type : 'img',
        single : true
    },{
        field : 'advPic',
        title : '展示图',
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
        code: code,
        addCode:'805260',
        detailCode: '805267',
        editCode:'805262',
        view: view
    });

});