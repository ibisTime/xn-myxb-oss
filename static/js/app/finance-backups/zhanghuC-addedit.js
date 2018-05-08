$(function() {
    var accountNumber = getQueryString('accountNumber');
    var view = getQueryString('v');

    var fields = [{
        field: 'realName',
        title: '户名',
    }, {
        field: 'accountNumber',
        title: '账号',
    }, {
        title: "币种",
        field: "currency",
        type: "select",
        key: "currency",
        formatter: Dict.getNameForList("currency")
    }, {
        field: 'type',
        title: '类型',
        type: 'select',
        key: "currency",
        formatter: Dict.getNameForList("user_kind")
    },  {
        field: 'status',
        title: '状态',
        type: 'select',
        search: true,
        key: "currency",
        formatter: Dict.getNameForList("account_status")
    },   {
        field: 'amount',
        title: '余额',
        formatter: moneyFormat
    },  {
        title: "创建时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }];

    var options = {
        fields: fields,
        code: {
            accountNumber : accountNumber
        },

        detailCode: '805352',
        view: view
    };

    buildDetail(options);
});