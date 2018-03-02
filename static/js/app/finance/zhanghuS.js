$(function() {
    var currency = getQueryString('currency') || "";
    var accountNumber = getQueryString('accountNumber') || "";
    var type = getQueryString('type');

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
    }, {
        field: 'accountNumber',
        title: '账号',
    }, {
        title: "币种",
        field: "currency",
        // search : true,
        type: "select",
        key: "currency",
        formatter: Dict.getNameForList("currency")
    }, {
        field: 'type',
        title: '类型',
        type: 'select',
        key: "user_kind",
        formatter: Dict.getNameForList("user_kind")
    },  {
        field: 'status',
        title: '状态',
        type: 'select',
        search: true,
        key: "account_status",
        formatter: Dict.getNameForList("account_status")
    },   {
        field: 'amount',
        title: '余额',
        formatter: moneyFormat
    },  {
        title: "创建时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: "805350",
        searchParams: {
            type : 'S'
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
        window.location.href = "zhanghuS_addedit.html?accountNumber=" + selRecords[0].accountNumber + "&v=1";
    });

});