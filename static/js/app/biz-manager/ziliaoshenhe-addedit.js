$(function() {
    // 业务管理-美导管理-资料审核-审核
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'realName',
        title : '姓名'
    }, {
        field : 'mobile',
        title : '手机号'
    }, {
        field : 'orderNo',
        title : '推荐人',
        formatter : function (v,data) {
            return data.refereeUser?data.refereeUser.realName:'-';
        }
    },
    //     {
    //     field : 'remark',
    //     title : '经纪人'
    // },
    //     {
    //     field : 'level',
    //     title : '等级'
    // },
        {
        field : 'speciality',
        title : '专长领域'
    }, {
        field : 'style',
        title : '授课风格'
    }, {
            field : 'location',
            title : '是否推荐',
            data :{'0':'否','1':'是'}
    },
    //     {
    //     field : 'orderNo',
    //     title : '序号'
    // },
        {
        field : 'remark',
        title : '备注',
        readonly : false
    }];



    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.approver = getUserName();
                data.result = '1';
                data.code = code;
                data.remark = $('#reamrk').val();
                reqApi({
                    code: '805531',
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
                data.approver = getUserName();
                data.result = '0';
                data.code = code;
                data.remark = $('#reamrk').val();
                reqApi({
                    code: '805531',
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
    var options = {
        fields: fields,
        code: {
            code: code
        },
        view: true,
        buttons: buttons,
        detailCode: '805536',
    };
    buildDetail(options);

});