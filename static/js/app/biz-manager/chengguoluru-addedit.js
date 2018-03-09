$(function() {
    // 业务管理-专家管理-成果录入
    var code = getQueryString('code');
    var luru = !!getQueryString('luru');
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
        title : '专家',
        formatter : function (v, data) {
            return data.user?data.user.realName:'-';
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
            '1':'待排班',
            '2':'已排班待上门',
            '3':'无档期',
            '4':'已上门待下课',
            '5':'已下课待录入',
            '6':'已录入'
        }
    }];


    var luru1 = [{
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
        title : '专家',
        formatter : function (v, data) {
            return data.user?data.user.realName:'-';
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
            '1':'待排班',
            '2':'已排班待上门',
            '3':'无档期',
            '4':'已上门待下课',
            '5':'已下课待录入',
            '6':'已录入'
        }
    },{
        field : 'realDatetime',
        title : '开始时间',
        type : 'datetime',
        required : true,
        readonly : false
    },{
        field : 'realDays',
        title : '天数',
        required : true,
        readonly : false
    },{
        field : 'clientNumber',
        title : '见客户数',
        required : true,
        readonly : false
    },{
        field : 'sucNumber',
        title : '成交客户数',
        required : true,
        readonly : false
    },{
        field : 'saleAmount',
        title : '销售业额',
        required : true,
        readonly : false

    }];
    if(luru) {

        var buttons = [{
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.saleAmount *= 1000;
                    reqApi({
                        code: '805514',
                        json: data
                    }).done(function(data) {
                        sucDetail();
                    });
                }
            }
        },{
            title: '返回',
            handler: function() {
                goBack();
            }
        }];
        buildDetail({
            fields: luru1,
            code: code,
            buttons : buttons,
            addCode : '805514',
            detailCode: '805521',
            view: view
        });
    }else {
        // 详情
        buildDetail({
            fields: fields,
            code: code,
            addCode : '805514',
            detailCode: '805521',
            view: view
        });
    }


});