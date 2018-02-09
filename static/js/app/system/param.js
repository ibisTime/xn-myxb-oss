$(function() {



    var columns = [{
            field: '',
            title: '',
            checkbox: true
        },{
            field: 'ckey',
            title: '参数说明'
        },{
            field: 'cvalue',
            title: '参数值',
            // search: true,
            // type: 'select',
            // listCode: '805915',
            // params: {
            //     limit : 10,
            //     start : 1
            // },
            // keyName: 'cvalue',
            // valueName: 'cvalue'
        }];
    buildList({
        router: 'param',
        columns: columns,
        pageCode: '805915'
    });
});