$(function() {
    // 业务管理-积分管理-积分规则
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '规则名称'
    }, {
        field : 'url',
        title : '规则分类'
    }, {
        field : 'orderNo',
        title : '数值'
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