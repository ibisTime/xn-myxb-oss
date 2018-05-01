$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        field: "status",
        required: 'true',
        value: 1,
        hidden: true
    }, {
        field: "companyCode",
        hidden: true,
        value: sessionStorage.getItem('systemCode')
    }, {
        field: "type",
        value: 1,
        required: 'true',
        hidden: true
    }, {
        field: "belong",
        title: '属于',
        value: 1,
        required: 'true',
        hidden: true
    }, {
        field: "parentCode",
        value: 0,
        required: 'true',
        hidden: true
    }, {
        field: "contentType",
        required: 'true',
        value: 1,
        hidden: true
    }, {
        title: '位置',
        field: 'location',
        value: "index_banner",
        required: true,
        hidden: true
    }, {
        title: '分类',
        field: 'kind',
        type:'select',
        key: 'appmenu_kind',
        keyCode: '805906',
        required: true,
        hidden: true
    }, {
        title: '顺序',
        field: 'orderNo',
        value: 1,
        required: true,
        hidden: true
    }, {
        title: '菜单名称',
        field: 'name',
        required: true,
        readonly: view,
        maxlength: 32
    }, {
        title: "菜单图片(未选中)",
        field: "pic",
        type: "img",
		single: true,
        required: true,
        readonly: view
    }, {
        title: "菜单图片(选中)",
        field: "url",
        type: "img",
        single: true,
        required: true,
        readonly: view
    }, {
        title: '备注',
        field: 'remark',
        readonly: view,
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "805800",
        editCode: "805802",
        detailCode: '805807'
    });
});