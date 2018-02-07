$(function() {
    // 业务管理-品牌顾问管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [ {
        field : 'name',
        title : '姓名',
        required : true
    }, {
        field : 'mobile',
        title : '手机号',
        required : true
    }, {
        field : 'orderNo',
        title : '主荐品牌',
        required : true
    }, {
        field : 'remark',
        title : '所辖区域',
        type : 'select'
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