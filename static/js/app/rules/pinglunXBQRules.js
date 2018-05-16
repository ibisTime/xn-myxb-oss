$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'remark',
        title: '规则名称',
    }, {
        field: 'cvalue',
        title: '值'
    }];
    buildList({
        columns: columns,
        pageCode: '805915',
        searchParams : {
            type: 'PL_JJF'
        }
    });
});