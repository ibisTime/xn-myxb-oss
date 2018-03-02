$(function() {
    // 业务管理-积分管理-积分规则
    var id = getQueryString('id');
    var view = !!getQueryString('v');

    var fields = [ {
        field : 'remark',
        title : '规则名称',
        required : true,
        readonly : true
    }, {
        field : 'cvalue',
        title : '数值',
        required : true,
        number : true
    }];

    buildDetail({
        fields: fields,
        code: {
            id: id
        },
        detailCode: '805916',
        editCode : '805911'
    });

});