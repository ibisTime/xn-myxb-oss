$(function() {
    var currency = getQueryString('currency') || "";
    var accountNumber = getQueryString('accountNumber') || "";
    var kind = getQueryString('kind');
    var bizType ='06,07';

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
    }, {
        title: "币种",
        field: "currency",
        type: "select",
        key: "currency",
        formatter: Dict.getNameForList("currency")
    }, {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        search: true,
        key: "biz_type",
        formatter: Dict.getNameForList("biz_type")
    }, {
        field: 'transAmount',
        title: '变动金额',
        formatter: moneyFormat
    }, {
        field: 'preAmount',
        title: '变动前金额',
        formatter: moneyFormat
    }, {
        field: 'postAmount',
        title: '变动后金额',
        formatter: moneyFormat
    }, {
        title: "创建时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: "805365",
        searchParams: {
            bizType : bizType,
            type : 'P'
        }
    });

    $('.tools .toolbar').html('<li style="display:block;" id="detailBtn"><span><img src="/static/images/t01.png"></span>详情</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        goBack();
    });
    //详情
    $('#detailBtn').on('click',function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "ledgerFF_addedit.html?code=" + selRecords[0].code + "&kind="+kind+"&v=1";
    });

});