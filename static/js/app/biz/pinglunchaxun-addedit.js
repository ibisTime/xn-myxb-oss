$(function() {
    // 业务管理-评论管理-评论查询
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '内容'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'orderNo',
        title : '评论人'
    }, {
        field : 'remark',
        title : '评论对象'
    },{
        field : 'remark',
        title : '评论时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '审核人'
    }, {
        field : 'remark',
        title : '审核时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注'
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