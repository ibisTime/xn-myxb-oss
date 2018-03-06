$(function() {
    // 业务管理-讲师管理-预约处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'applyUser',
        title : '',
        value : getUserName(),
        hidden : true
    }, {
        field : 'saleAmount',
        title : '回款额',
        required : true
    }, {
        field : 'owner',
        title : '回款店铺',
        type : 'select',
        params : {
            start : 1,
            limit : 1000,
            kind : 'C'
        },
        listCode: '805120',
        keyName : 'userId',
        valueName: '{{realName.DATA}}--{{storeName.DATA}}',
        required : true
    }, {
        field : 'applyNote',
        title : '回款说明',
        required : true
    }];

    buildDetail({
        fields: fields,
        code: code,
        addCode : '805515',
        detailCode: '805521',
        view: view
    });

});