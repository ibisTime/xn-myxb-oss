$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: 'banner名称',
		field: 'name',
        search:true
	}, {
		title: '分类',
		field: 'kind',
        search:true,
        key: 'banner_kind',
        formatter: Dict.getNameForList("banner_kind"),
	},{
		title: '位置',
		field: 'location',
        formatter: function(v){
			if(v == "index_banner"){
				return '首页';
			}		   
		},  
        
	}, {
		title: '顺序',
		field: 'orderNo',
        
	},  {
		title: '备注',
		field: 'remark',
	}];
	buildList({
		router: 'banner',
		columns: columns,
		pageCode: '805805',
		deleteCode: '805801',
		searchParams:{
			companyCode: OSS.company,
			type:2
		}
	});
         
    

});