$(function() {
    // 业务管理-积分管理-积分规则
    var id = getQueryString('id');
    var remark = getQueryString('remark');
    var view = !!getQueryString('v');
// debugger;
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
        beforeSubmit : function (data) {
            data.remark = remark;
            return data;
        },
        detailCode: '805916',
        editCode : '805911'
    });

});