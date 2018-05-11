$(function() {
    // 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
    var edit = getQueryString('edit');
    var view = !!getQueryString('v');
    var detail = !!getQueryString('detail');

    if(edit) {
        view = false
    }
    var columns = [{
    	field: 'categoryCode',
        title: '品牌大类',
        type: 'select',
        pageCode: '805245',
        params:{
        	status:'1'
        },
        keyName : 'code',
        valueName: 'name',
        required: true,
        onChange: function(v, data) {
            $("#brandCode").renderDropdown({
                listCode: '805256',
                params: {
                    categoryCode: v,
                    status: "2",
                    start:'1',
                    limit:'10'
                },
                keyName: 'code',
                valueName: 'name',
            })
        },
    }, {
        field: "brandCode",
        title: "所属品牌",
        type: "select",
        required: true,
    }, {
        field: "type",
        title: "类型",
        type: "select",
        data:{
        	'T':'T类',
        	'C':'C类'
        },
        required: true,
    }, {
        field : 'name',
        title : '名称',
        required : true
    },{
        field : 'slogan',
        title : '广告语',
        required : true
    }, {
        field : 'price',
        title : '价格',
        formatter : function(v, data){
        	return parseInt(moneyFormat1(v));
        },
		'Z+': true,
		amount: true,
        required : true
    },{
        field : 'pic',
        title : '缩略图',
        type : 'img',
        single : true,
        required : true
    },{
        field : 'advPic',
        title : '展示图',
        type : 'img',
        required : true
    },{
        field : 'description',
        title : '详情',
        type:'textarea',
        required : true
    },  {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: columns,
        code: code,
        addCode:'805260',
        detailCode: '805267',
        editCode:'805262',
        view: view
    });

});