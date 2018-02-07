$(function() {
    // 业务管理-品牌管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '品牌名称'
    },{
        field : 'name',
        title : '联系人姓名'
    }, {
        field : 'mobile',
        title : '联系人手机号'
    }, {
        field : 'orderNo',
        title : '品牌顾问'
    }, {
        field : 'remark',
        title : '是否推荐'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'orderNo',
        title : '次序'
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