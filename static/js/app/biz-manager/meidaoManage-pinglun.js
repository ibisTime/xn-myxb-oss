$(function() {
	// 业务管理-品牌管理-产品管理
    var code = getQueryString('code');
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'content',
		title : '内容'
	}, {
		field : 'status',
		title : '状态',
        search: true,
        type: 'select',
        listCode: '805906',
        params :{
		    parentKey : 'comment_status'
        },
        keyName : 'dkey',
        valueName: 'dvalue'
	}, {
		field : 'nickname',
		title : '评论人',
		formatter: function(v, data){
			return data.commentUser.realName
		}
	}, {
		field : 'commentDatetime',
		title : '评论时间',
        formatter : dateTimeFormat
	}
	];

	buildList({
		columns: columns,
        searchParams : {
            entityCode : code
        },
		pageCode: '805425',
		deleteCode: '805004'
	});

	$('.tools .toolbar').empty();
    $('.tools .toolbar').html('<li style="display:block;" id="detailBtn"><span><img src="/static/images/t01.png"></span>详情</li>'
    						+'<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    						
    $('#backBtn').on('click', function() {
         window.location = './meidaoManage.html';
    });
    
    // 查看评论
    $('#detailBtn').off().click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = './meidaoManage_pinglunDetail.html?v=true&code='+selRecords[0].code;
    });
});