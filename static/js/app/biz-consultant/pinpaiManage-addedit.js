$(function() {
    // 业务管理-品牌管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '品牌名称',
        required : true
    },{
        field : 'name',
        title : '联系人姓名',
        required : true
    }, {
        field : 'mobile',
        title : '联系人手机号',
        mobile : true,
        required : true
    }, {
        field : 'orderNo',
        title : '品牌顾问',
        required : true
    }, {
        field : 'remark',
        title : '是否推荐',
        type : 'select',
        require : true
    }, {
        field : 'status',
        title : '状态',
        readonly : true
    }, {
        field : 'orderNo',
        title : '次序',
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
        view: view
    });

});