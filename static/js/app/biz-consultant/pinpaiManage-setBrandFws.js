$(function() {
    // 业务管理-美导管理-美导管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var fields = [{
        field : 'name',
        title : '品牌名称',
        required : true
    },{
        field : 'contacts',
        title : '联系人姓名',
        required : true
    }, {
        field : 'mobile',
        title : '联系人手机号',
        mobile : true,
        required : true
    },  {
        field : 'slogan',
        title : '广告语',
        required : true
    }, {
        field : 'advPic',
        title : '广告图',
        required : true,
        type : 'img',
        single : true
    }, {
        field : 'location',
        title : '是否推荐',
        data : {'0':'否','1':'是'},
        type : !view? 'hidden' : 'select'
    }, {
        field : 'status',
        title : '状态',
        data : {'1':'未上架','2':'已上架','3':'已下架'},
    }, {
        field : 'realName',
        title : '品牌顾问',
    },  {
        field : 'brandFws',
        title : '经销商',
        type : 'select',
        pageCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'C',
        },
        keyName: 'userId',
        valueName: '{{realName.DATA}}-{{mobile.DATA}}',
        readonly: false,
        required : true
    },{
        field : 'remark',
        title : '备注',
        readonly: false
    }];

    var buttons = [
        {
            title: '确定',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.updater = getUserName();
                    data.code = code;
                    reqApi({
                        code: '805302',
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                }
            }
        },  {
            title: '返回',
            handler: function() {
                goBack();
            }
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805257',
        view: view,
        buttons : buttons
    });

});