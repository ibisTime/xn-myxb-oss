$(function() {
    // 业务管理-品牌管理-排名管理-调整
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'periods',
        title : '期数'
    }, {
        field : 'name',
        title : '店铺'
    }, {
        field : 'rank',
        title : '排名',
        required : true
    }, {
        field : 'amount',
        title : '业绩额',
        required : true,
        formatter : moneyFormat
    }];

    var options = {
        fields: fields,
        code : code,
        editCode: '805131',
        detailCode : '805124',
        view : view
    };
    buildDetail(options);

});