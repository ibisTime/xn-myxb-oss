$(function() {
    // 业务管理-评论管理-评论查询
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'content',
        title : '内容'
    }, {
        field : 'status',
        title : '状态',
        type:'select',
        data :{
            'A':'已发布',
            'B':'审批通过',
            'C':'审批不通过',
            'D':'被过滤',
            'AB':'已发布和审核通过'
        }
    }, {
        field : 'nickname',
        title : '评论人'
    }, {
        field : 'entityName',
        title : '评论对象'
    },{
        field : 'commentDatetime',
        title : '评论时间',
        formatter : dateTimeFormat
    }, {
        field : 'approver',
        title : '审核人'
    }, {
        field : 'approveDatetime',
        title : '审核时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805426',
        view: view
    });

});