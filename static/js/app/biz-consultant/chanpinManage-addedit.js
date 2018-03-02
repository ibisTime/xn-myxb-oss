$(function() {
    // 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var detail = !!getQueryString('detail');

    var columns = [{
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
        listCode: '805258',
        keyName : 'code',
        valueName: 'name'
    }, {
        field : 'price',
        title : '价格',
        formatter : moneyFormat,
        required : true
    },{
        field : 'pic',
        title : '缩略图',
        type : 'img',
        single : true,
        required : true
    },{
        field : 'advPic',
        title : '展示图',
        type : 'img',
        required : true
    },{
        field : 'description',
        title : '详情',
        required : true
    },  {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: columns,
        code: code,
        beforeSubmit : function (data) {
            if(data.price.indexOf('.')!=-1) {
                toastr.info('积分价格只能为整数,不能以逗号分隔');
                return
            }
            // 判断价格
            if(data.price>=9999999999999999) {
                toastr.info('价格过大');
                return
            }
            data.price*=1000;
            return data
        },
        addCode:'805260',
        detailCode: '805267',
        editCode:'805262',
        view: view
    });

});