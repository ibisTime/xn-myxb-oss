$(function() {
    // 业务管理-喜报预报管理-喜报
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var edit = getQueryString('edit');
    if(edit) {
        view = false
    }


    var fields = [{
        field : 'title',
        title : '标题',
        required : true
    }, {
        field : 'pic',
        title : '缩略图',
        type : 'img',
        single : true,
        required : true
    },{
        field : 'advPic',
        title : '展示图',
        type : 'img',
        required : true
    }, {
        field : 'description',
        title : '详情',
        maxlength : 250,
        type : 'textarea',
        required : true
    },{
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: code,
        beforeSubmit : function (data) {
            data.type = '0';
            data.code = code;
            return data
        },
        detailCode: '805436',
        addCode:'805430',
        editCode:'805432',
        view: view
    });

});