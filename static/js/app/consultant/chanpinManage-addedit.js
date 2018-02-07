$(function() {
    // 品牌顾问-产品管理
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
        field : 'remark',
        title : '状态'
    }, {
        field : 'remark',
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