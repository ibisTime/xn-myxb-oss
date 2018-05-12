$(function() {
	
    // 业务管理-品牌管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var edit = getQueryString('edit');
    var add = !!getQueryString('add');
    var detail = getQueryString('detail');

    if(edit) {
        view = false
    }
	//详情
    var fields = [{
        field: 'categoryCode',
        title: '类别',
        type: 'select',
        pageCode: '805245',
        params: {
        	status:'1'
        },
        keyName: 'code',
        valueName: 'name',
        required : true
	},{
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
        title : '缩略图',
        required : true,
        type : 'img',
        single : true
    }, {
        field : 'description',
        title : '简介',
        type: 'textarea',
        required : true
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
        field : 'realName',
        title : '品牌顾问',
    },{
    	field : 'brandFwsName',
        title : '经销商',
	},{
        field : 'remark',
        title : '备注'
    }];
// 新增
    var columns = [{
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
        required : true
	},{
    	field : 'brandAdviser',
        title : '品牌顾问',
        type : 'select',
        pageCode: '805120',
        params: {
            companyCode : OSS.company,
            kind : 'A',
        },
        keyName: 'userId',
        valueName: '{{realName.DATA}}-{{mobile.DATA}}',
	},{
        field: 'categoryCode',
        title: '类别',
        type: 'select',
        pageCode: '805245',
        params: {
        	status:'1'
        },
        keyName: 'code',
        valueName: 'name',
        required : true
	},{
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
        title : '缩略图',
        required : true,
        type : 'img',
        single : true
    }, {
        field : 'description',
        title : '简介',
        type: 'textarea',
        required : true
    }, {
        field : 'remark',
        title : '备注'
    }];

        if(view) {
            buildDetail({
                fields: fields,
                code: {
                    code:code,
                    // consultant:sessionStorage.getItem('loginKind') == 'A'?getUserId():''
                },
                detailCode: '805257',
                addCode:'805250',
                editCode:'805252',
                view: view
            });

        }else {
            if(code) {
                buildDetail({
                    fields: columns,
                    code:code,
                    detailCode: '805257',
                    addCode:'805250',
                    editCode:'805252',
                    view: view
                });
            }else {
                buildDetail({
                    fields: columns,
                    code: {
                        code : code,
                        consultant:sessionStorage.getItem('loginKind') == 'A'?getUserId():''
                    },

                    detailCode: '805257',
                    addCode:'805250',
                    editCode:'805252',
                    view: view
                });
            }

        }


});