$(function() {
    // 业务管理-美容院管理-老板管理
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
        title : '店铺'
    }, {
        field : 'level',
        title : '等级'
    }, {
        field : 'remark',
        title : '积分余额'
    },{
        field : 'remark',
        title : '团队顾问'
    }, {
        field : 'status',
        title : '状态'
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