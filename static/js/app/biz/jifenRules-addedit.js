$(function() {
    // 业务管理-积分管理-积分规则
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '规则名称',
        required : true
    }, {
        field : 'url',
        title : '规则分类',
        type : 'select',
        required : true
    }, {
        field : 'orderNo',
        title : '数值',
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