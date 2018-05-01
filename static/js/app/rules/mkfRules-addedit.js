$(function() {
    var id = getQueryString('code');
    var dict = {
        'MKF_FWJY': '服务精英门槛费',
        'MKF_FWJY_FQ': '服务精英返销帮券',
        'MKF_FWS': '服务商门槛费',
        'MKF_FWS_FQ': '服务商返销帮券'
    };

    var fields = [{
        field: 'ckey',
        title: '规则名称',
        formatter: function (v) {
            return dict[v];
        },
        readonly: true
    }, {
        field: 'cvalue',
        title: '值',
        required: true
    }, {
        title: '参数说明',
        field: 'remark',
        type: 'textarea',
        normalArea: true,
        required: true,
        maxlength: 200
    }];

    buildDetail({
        fields: fields,
        code: {
            id : id
        },
        detailCode: '805916',
        editCode: '805911'
    });
});