$(function() {
	// 业务管理-品牌管理-订单管理
	var code = getQueryString('code');
	var view = !!getQueryString('v');
	var status = getQueryString('status');
	
	//按钮
	var buttons=[];
    
    //已付款待发货状态
    if(status=='1'){
    	buttons=[{
            title: '发货',
            handler: function () {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.code = code;
                    data.deliverer = getUserName();
                    reqApi({
                        code: '805274',
                        json: data
                    }).done(function () {
                        sucDetail();
                    });
                }

            }
        }, {
            title: '返回',
            handler: function () {
                goBack();
            }
        }];
    }else{
    	buttons=[{
            title: '返回',
            handler: function () {
                goBack();
            }
        }];
    }
	
	//物流信息
	var logisiticsFields=[{
		field: 'deliverer',
		title: '发货人',
		hidden: status=='1'?true:false,
		readonly: status=='1'?false:true,
        required : true
	}, {
		field: 'deliveryDatetime',
		title: '发货时间',
		type: 'datetime',
		value: status=='1'? dateTimeFormat(new Date()):'',
		readonly: status=='1'?false:true,
        required : true,
		formatter: dateTimeFormat
	}, {
		field: 'logisticsCode',
		title: '物流单号',
		readonly: status=='1'?false:true,
        required : true
	}, {
		field: 'logisticsCompany',
		title: '物流公司',
		type: 'select',
		listCode: '805906',
		key: 'kd_company',
		readonly: status=='1'?false:true,
        required : true
	}, {
        field : 'pdf',
        title : '物流单',
        type : 'img',
		readonly: status=='1'?false:true,
        single:true
	}];
	
	var fields = [{
		title: '订单信息',
		type:'title',
	}, {
		field: 'code1',
		title: '订单编号',
		formatter: function(v, data){
			return data.code
		}
	}, {
		field: 'applyUser',
		title: '下单用户',
		formatter: function(v, data){
			return data.user.mobile
		}
	}, {
		field: 'totalAmount',
		title: '订单价格',
		formatter: moneyFormat
	}, {
		field: 'applyDatetime',
		title: '下单时间',
		formatter: dateTimeFormat
	}, {
		field: 'status',
		title: '状态',
		data: {
			'0': '待付款',
			'1': '已付款',
			'2': '用户取消',
			'3': '平台取消',
			'4': '待评价',
			'5': '已完成'
		},
		type: 'select'
	}, {
		title: '产品信息',
		type:'title',
	}, {
		title: "产品信息",
        field: "productOrderList",
        type: "o2m",
        readonly: true,
        columns: [{
            title: "产品名称",
            field: "name",
            formatter: function(v,data){
            	return data.product.name
            }
        }, {
        	field: "type",
	        title: "类型",
            formatter: function(v,data){
            	var dataList = {
		        	'T':'T类',
		        	'C':'C类'
		        };
            	return dataList[data.product.type]
            }
	    }, {
            title: "单价",
            field: "price",
            formatter: moneyFormat
        }, {
            title: "折扣价格",
            field: "discountPrice",
            formatter: function(v,data){
            	if(data.product.type=="C"){
            		return '-'
            	}else{
            		return moneyFormat(v)
            	}
            }
        }, {
        	
            title: "数量",
            field: "quantity"
        }]
	}, {
		title: '物流信息',
		type:'title',
	}, {
		field: 'receiver',
		title: '收件人'
	}, {
		field: 'reMobile',
		title: '收件人手机'
	}, {
		field: 'reAddress',
		title: '收件人地址'
	}];
	
	if(status=='1'&&!view){
		fields = fields.concat(logisiticsFields)
	}else if(status=='4'||status=='5'){
		fields = fields.concat(logisiticsFields)
	}
	
	var options = {
		fields: fields,
		code: code,
		detailCode: '805298',
		view: true,
		buttons:buttons
	};

	buildDetail(options);

})