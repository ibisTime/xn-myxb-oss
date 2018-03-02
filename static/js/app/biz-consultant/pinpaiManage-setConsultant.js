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
        type : !view? 'hidden' : 'select'
    }, {
        field : 'remark',
        title : '备注',
        readonly: false
    },{
        field : 'brandAdviser',
        title : '品牌顾问',
        type : 'select',
        listCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'A',
            start : 1,
            limit : 1000
        },
        keyName: 'userId',
        valueName: 'realName',
        readonly: false,
        required : true
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
                        code: '805300',
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
        addCode : '805042',
        editCode : '805081',
        detailCode: '805257',
        view: view,
        buttons : buttons
    });
// }


});