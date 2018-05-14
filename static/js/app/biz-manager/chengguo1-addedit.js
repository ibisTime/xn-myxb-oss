$(function() {
    // 业务管理-销售天团管理-成果录入
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
        field : 'storeName',
        title : '店铺',
        formatter : function (v, data) {
            return data.mryUser?data.mryUser.storeName:'-';
        }
    }, {
        field : 'expert',
        title : '服务商',
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
        field : 'planDatetime',
        title : '排班时间',
        formatter : dateTimeFormat
    }, {
        field : 'planDays',
        title : '排班天数'
    }, {
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
    },{
        field : 'realDatetime',
        title : '实际上门时间',
        formatter : dateTimeFormat
    },{
        field : 'realDays',
        title : '实际上门天数'
    },{
        field : 'clientNumber',
        title : '见客户数'
    },{
        field : 'sucNumber',
        title : '成交客户数'
    }, {
        field : 'saleAmount',
        title : '销售业额',
        formatter: moneyFormat
    }, {
        field : 'detailList',
        title : '成果明细',
        type:'o2m',
        readonly: true,
        columns: [{
            title: "产品名称",
            field: "name",
            formatter: function(v,data){
            	return data.brand.name
            }
        }, {
            title: "销售金额",
            field: "amount",
            formatter: moneyFormat
        }]
    },{
        field : 'pdf',
        title : '成果确认函',
        type: 'img',
    }, {
        field : 'approveNote',
        title : '备注',
        readonly : view?true:false
    }];
    
    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approveResult = '1';
                data.approver = getUserName();
                reqApi({
                    code: '805516',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approveResult = '0';
                data.code = code;
                data.approver = getUserName();
                reqApi({
                    code: '805516',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    buildDetail({
        fields: fields,
        code: code,
        buttons : view?'':buttons,
        detailCode: '805521',
        view: true
    });

});