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
        title: '参数键'
    },{
        field: 'cvalue',
        title: '参数值'
    }];
    buildList({
        router: 'param',
        columns: columns,
        pageCode: '805915',
        searchParams : {
            type: 'DOWNLOAD'
        }
    });
});