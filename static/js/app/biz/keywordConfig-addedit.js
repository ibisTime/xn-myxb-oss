$(function() {
    // 业务管理-评论管理-提炼关键字
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'word',
        title : '关键字',
        required : true
    }, {
        field : 'kind',
        title : '分类',
        required : true,
        value : 'PB',
        hidden : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: code,
        beforeSubmit : function (data) {
            data.weight = '1';
            data.level = '0';
            data.reaction = '3';
            data.type = '0';
            data.code = code;
            return data
        },
        detailCode: '805415',
        addCode:'805410',
        editCode:'805412',
        view: view


    });



});