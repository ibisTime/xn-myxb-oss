$(function() {
    // 业务管理-销售天团管理-预约处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');


    var fields = [ {
        field: 'code1',
        title: '编号',
        readonly: true,
        formatter: function(v, data) {
            return data.code
        }
    }, {
        field : 'url',
        title : '预约人',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.realName:'-';
        }
    }, {
        field : 'mobile',
        title : '预约人手机号',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.mobile:'-';
        }
    }, {
        field : 'remark',
        title : '店铺',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.storeName:'-';
        }

    }, {
        field : 'expert',
        title : '销售天团',
        formatter : function (v, data) {
			return data.user ? data.user.realName?data.user.realName+"("+data.user.mobile+")" :data.user.mobile : '-';
        }
    }, {
        field : 'appointDatetime',
        title : '预约时间',
        formatter : dateTimeFormat
    }, {
        field : 'appointDays',
        title : '预约天数'
    },{
        field : 'status',
        title : '状态',
        type: 'select',
        data : {
            '1':'已预约待排班',
            '2':'已排班待上门',
            '3':'无档期',
            '4':'已上门待下课',
            '5':'已下课待成果录入',
            '6':'已录入待经销商审核',
            '7':'经销商已审核',
            '8':'经销商审核不通过',
            '9':'已支付待后台复核',
            '10':'后台审核通过',
            '11':'后台审核不通过'
        }
    }, {
        field : 'realDatetime',
        title : '实际时间',
        formatter : dateTimeFormat
    }, {
        field : 'realDays',
        title : '实际天数'
    }, {
        field : 'clientNumber',
        title : '见客户数'
    }, {
        field : 'sucNumber',
        title : '成交数'
    }, {
        field : 'saleAmount',
        title : '成交额',
        formatter : moneyFormat
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