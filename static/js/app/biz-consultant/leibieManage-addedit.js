$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    }, {
        field : 'status',
        title : '状态',
        data : {'0':'未上架','1':'已上架','2':'已下架'},
        type : view ? 'select' : 'hidden'
    }, {
        field : 'orderNo',
        title : 'UI次序',
        required : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    var options = {
        fields: fields,
        code : code,
        addCode: '805240',
        editCode: '805241',
        detailCode : '805246',
        view: view,
        beforeSubmit: function(data){
        	if(!code){
        		delete data.status;
        		delete data.code;
        		delete data.id;
        	}
        	return data;
        }
    };
    buildDetail(options);

});