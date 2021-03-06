$(function() {
    // 业务管理-美导管理-预约处理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'code1',
        title: '编号',
        readonly: true,
        formatter: function(v, data) {
            return data.code
        }
    },  {
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
        field : 'remark10',
        title : '美导',
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
        field: 'isPlan',
        title: '是否有美导',
        type : 'select',
        data : {
            '1' : '是',
            '0' : '否'
        },
        required : true,
        readonly : false
    },{
        field: 'owner',
        title: '美导',
        type : 'select',
        readonly : false,
        listCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'T',
            start : 1,
            limit : 1000
        },
        keyName: 'userId',
        valueName: 'realName',
        required : true
    },{
        field : 'planDatetime',
        title : '开始时间',
        type : 'datetime',
        required : true,
        readonly : false
    },{
        field : 'planDays',
        title : '天数',
        required : true,
        readonly : false
    },{
        field : 'approveNote',
        title : '特别说明',
        readonly : false
    }];

    var buttons = [{
        title: '确定',
        handler: function () {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.code = code;
                data.approver = getUserName();

                reqApi({
                    code: '805511',
                    json: data
                }).done(function (data) {
                    sucDetail();
                });
            }
        }
    },{
        title: '取消',
        handler: function() {
            goBack();
        }
    }];
    buildDetail({
        fields: fields,
        code: {
            code: code
        },
        editCode : '805511',
        detailCode: '805521',
        view: view,
        buttons : buttons
    });

    $('#isPlan').change(function(){
        var result = $('#isPlan').val();
        if(result == '0') {
            $('#owner').parent().css('display','none');
            $('#planDatetime').parent().css('display','none');
            $('#planDays').parent().css('display','none');
            $('#approveNote').parent().css('display','none');
        }else {
            $('#owner').parent().css('display','block');
            $('#planDatetime').parent().css('display','block');
            $('#planDays').parent().css('display','block');
            $('#approveNote').parent().css('display','block');
        }
    });

});