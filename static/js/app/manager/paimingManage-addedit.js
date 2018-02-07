$(function() {
    // 经纪人-专家管理-排名管理-调整
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');
    var check = !!getQueryString('check');

    var fields = [{
        field : '',
        title : '',
        checkbox : true
    }, {
        field : 'name',
        title : '期数',
        type: 'select',
        required : true
    }, {
        field : 'expert',
        title : '专家',
        type: 'select',
        required : true
    }, {
        field : 'orderNo',
        title : '排名',
        required : true
    }, {
        field : 'remark',
        title : '业绩额',
        required : true,
        formatter : moneyFormat
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