$(function() {
    // 业务管理-美导管理-美导管理
    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'orderNo',
        title : '推荐人'
    }, {
        field : 'remark',
        title : '经纪人'
    }, {
        field : 'remark',
        title : '等级'
    }, {
        field : 'remark',
        title : '积分余额'
    }, {
        field : 'remark',
        title : '状态'
    }, {
        field : 'remark',
        title : '专长领域'
    }, {
        field : 'remark',
        title : '授课风格'
    }, {
        field : 'remark',
        title : '是否推荐'
    }, {
        field : 'remark',
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