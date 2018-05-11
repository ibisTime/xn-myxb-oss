$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '标题',
        search: true
    }, {
        title: '内容',
        field: 'content',
    }, {
        title: '序号',
        field: 'orderNo'
    }, {
        title: '备注',
        field: 'remark',
    }];
    buildList({
        columns: columns,
        pageCode: "805445",
        deleteCode: "805442",
    });

})