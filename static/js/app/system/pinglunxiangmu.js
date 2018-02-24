$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'remark',
            title: '参数说明'
        },{
            field: 'ckey',
            title: '参数键',
            // type: 'select',
            // listCode: '805906',
            // params :{
            //     parentKey : 'level'
            // },
            // keyName : 'dkey',
            // valueName: 'dvalue'
        },{
            field: 'cvalue',
            title: '参数值'
        }];
    buildList({
        router: 'param',
        columns: columns,
        pageCode: '805915',
        searchParams : {
            typeList : ['ISW','ISR']
        }
    });
});