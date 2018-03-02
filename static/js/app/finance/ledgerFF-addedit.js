$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        title: '流水编号',
        field: 'code1',
        // '[value]': 'code',
        readonly: view,
        formatter :function (v, data) {
            return data.code
        }
    }, {
        title: '户名',
        field: 'realName',
        required: true,
        maxlength: 32,
        readonly: view
    }, {
        title: '账号',
        field: 'accountNumber',
        required: true,
        readonly: view
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'currency',
        formatter: Dict.getNameForList("currency"),
        readonly: view
    },  {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        key: 'biz_type',
        formatter: Dict.getNameForList('biz_type'),
        readonly: view
    }, {
        field: 'bizNote',
        title: '业务说明'
    }, {
        field: 'transAmount',
        title: '变动金额',
        formatter: moneyFormat,
        readonly: view
    }, {
        field: 'preAmount',
        title: '变动前金额',
        formatter: moneyFormat,
        readonly: view
    }, {
        field: 'postAmount',
        title: '变动后金额',
        formatter: moneyFormat,
        readonly: view
    }, {
        field: 'createDatetime',
        title: '金额変动时间',
        formatter: dateTimeFormat,
        readonly: view
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250,
        readonly: view
    }];

    var options = {
        fields: fields,
        code: code,

        detailCode: '805367',
        view: view
    };

    buildDetail(options);
});