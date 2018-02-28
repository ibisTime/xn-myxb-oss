$(function() {
    // 业务管理-讲师管理-预约处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'code1',
        title : '编号',
        formatter : function (v, data) {
            return data.code
        }
    }, {
        field : 'url',
        title : '回款人',
        formatter : function (v, data) {
            return data.user?data.user.realName:'-';
        }
    }, {
        field : 'url111',
        title : '回款店铺',
        formatter : function (v, data) {
            return data.user?data.user.storeName:'-';
        }
    },{
        field : 'saleAmount',
        title : '回款金额'
    }, {
        field : 'updater',
        title : '回款记录人'
    },{
        field : 'updateDatetime',
        title : '回款记录时间',
        formatter : dateTimeFormat
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: {
            code: code
        },
        detailCode: '805521',
        view: view
    });

});