$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    }, {
        field : 'status',
        title : '状态',
        data : {'1':'未上架','2':'已上架','3':'已下架'},
        type : view ? 'select' : 'hidden'
    }, {
        field : 'orderNo',
        title : 'UI次序'
    }, {
        field : 'remark',
        title : '备注'
    }];

    var options = {
        fields: fields,
        code : code,
        addCode: '',
        editCode: '805279',
        detailCode : '805277',
        view: view
    };
    buildDetail(options);

});