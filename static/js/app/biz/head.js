$(function() {
	// 业务管理-头像管理-头像管理
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'url',
		title : '图片',
		type : 'img',
		single : true,
		formatter: function(v, data) {
            return data.url && '<img  style="width:40px;height:40px" src="' + OSS.picBaseUrl + '/' + data.url + '" >' || "-"
        }

    }, {
		field : 'kind',
		title : '针对角色',
        formatter: function (v, data) {
            return data.kind.replace(/0/, "美导")
                .replace(/1/, "讲师")
                .replace(/2/, "专家")
        }
	}, {
		field : 'level',
		title : '针对等级',
		search: true,
		type: 'select',
        listCode: '805906',
        params :{
            parentKey : 'level'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
	},  {
		field : 'remark',
		title : '备注'
	}];

	buildList({
		columns: columns,
		pageCode: '805443',
		deleteCode: '805441'
	});
});