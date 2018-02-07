$(function() {
    // 业务管理-品牌管理-产品管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '产品名称'
    }, {
        field : 'url',
        title : '所属品牌'
    }, {
        field : 'orderNo',
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