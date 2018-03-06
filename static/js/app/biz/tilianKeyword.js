$(function() {
	// 业务管理-评论管理-提炼关键字
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'word',
		title : '关键字',
		search:true
	},{
        field : 'kind',
        title : '分类',
        required : true,
        type : 'select',
        listCode: '805906',
        params: {
            parentKey: 'key_kind'
        },
        keyName: 'dkey',
        valueName: 'dvalue'
    },  {
		field : 'updater',
		title : '更新人'
	},{
		field : 'updateDatetime',
		title : '更新时间',
		formatter : dateTimeFormat
	},{
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
        searchParams : {
            type : '1'
        },
		pageCode: '805413',
		deleteCode: '805411',
        getImportData: function(list){
            var stockList =[];

            for (var i=0; i<list.length; i++) {

                if($.trim(list[i]["关键词"])!="" && $.trim(list[i]["分类"])!=""){
                    var tmpl1;
                    tmpl1={
                        'word':$.trim(list[i]["关键词"]),
                        'remark':$.trim(list[i]["备注"]),
                        'kind':$.trim(list[i]["分类"]),
                        'weight' :'1',
                        'level' :'0',
                        'reaction' : '3',
                        'type' : '1',
                        'updater' : getUserName()

                    };
                    stockList.push(tmpl1)
                }
            }

            reqApi({
                code: '805416',
                json: {
                    reqList : stockList
                }
            }).done(function() {
                sucList();
            });
        }
	});
});