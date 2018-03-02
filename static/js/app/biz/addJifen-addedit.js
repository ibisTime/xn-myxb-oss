$(function() {
    // 业务管理-积分管理-手动加积分
    var accountNumber = getQueryString('accountNumber');
    var view = !!getQueryString('v');
    var fields = [{
        field : 'realName',
        title : '姓名'
    },{
        field: 'type',
        title: '角色',
        type: 'select',
        listCode: '805906',
        params: {
            parentKey : 'user_kind'
        },
        keyName: 'dkey',
        valueName: 'dvalue',
        search: true
    }, {
        field : 'amount',
        title : '积分余额',
        formatter : moneyFormat
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: {
            accountNumber : accountNumber
        },
        detailCode: '805352',
        view: view
    });

});