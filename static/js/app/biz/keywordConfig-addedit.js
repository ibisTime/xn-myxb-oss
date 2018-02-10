$(function() {
    // 业务管理-评论管理-关键字设置
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'word',
        title : '关键字',
        required : true
    }, {
        field : 'weight',
        title : '权重',
        type : 'select',
        required : true
    }, {
        field : 'level',
        title : '作用等级',
        type : 'select',
        required : true
    }, {
        field : 'reaction',
        title : '反应',
        type : 'select',
        required : true
    }, {
        field : 'remark',
        title : '备注',
        maxlength : 250
    }];

    var options = {
        fields: fields,
        detailCode: '805121',
        addCode:'805410',
        editCode:'805412',
        code: code
    };
    buildDetail(options);

});