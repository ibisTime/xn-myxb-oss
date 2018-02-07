$(function() {
    // 业务管理-喜报预报管理-喜报
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'title',
        title : '标题'
    }, {
        field : 'status',
        title : '状态'
    }, {
        field : 'orderNo',
        title : '序号'
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