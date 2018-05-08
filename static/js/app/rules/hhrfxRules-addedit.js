$(function() {
    var id = getQueryString('code');
    
    var fields = [{
        field: 'remark',
        title: '规则名称',
        readonly: true
    }, {
        field: 'cvalue',
        title: '值',
        required: true
    }];

    buildDetail({
        fields: fields,
        code: {
            id : id
        },
        detailCode: '805916',
        editCode: '805911',
        beforeSubmit: function(data){
        	data.remark = $("#remark").text();
        	return data;
        }
    });
});