$(function() {
    // 业务管理-品牌管理-加盟
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
    },  {
        field : 'advPic',
        title : '广告图',
        required : true,
        type : 'img',
        single : true
    },  {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805257',
        editCode:'805252',
        view: view
    });

});