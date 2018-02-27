$(function() {
	// 业务管理-评论管理-评论查询
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
		type:'select',
        data :{
            'A':'已发布',
            'B':'审批通过',
            'C':'审批不通过',
            'D':'被过滤',
            'AB':'已发布和审核通过'
        }
	}, {
		field : 'nickname',
		title : '评论人'
	}, {
		field : 'entityName',
		title : '评论对象',
        search: true,
        type:'select'
	},{
		field : 'commentDatetime',
		title : '评论时间',
		formatter : dateTimeFormat
	}];

	buildList({
		columns: columns,
        pageCode: '805425',
	});
});