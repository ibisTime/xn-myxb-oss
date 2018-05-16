$(function() {
    // 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var detail = !!getQueryString('detail');

    var columns = [{
        field : 'entityName',
        title : '产品名称'
    }, {
        field : 'content',
        title : '内容'
    }, {
        field : 'status',
        title : '状态',
        type: 'select',
        // listCode: '805906',
        // params :{
        //     parentKey : 'comment_status'
        // },
        // keyName : 'dkey',
        // valueName: 'dvalue'
        key: 'comment_status',
        keyCode:'805906',
    }, {
        field : 'nickname',
        title : '评论人',
		formatter: function(v, data){
			return data.commentUser.realName
		}
    }, {
        field : 'commentDatetime',
        title : '评论时间',
        formatter : dateTimeFormat
    }];

    buildDetail({
        fields: columns,
        code: code,
        detailCode: '805426',
        view: view
    });

});