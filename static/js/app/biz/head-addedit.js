$(function() {
    // 业务管理-头像管理-头像管理
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        field : 'kind',
        title : '针对角色',
        required : true,
        type : 'checkbox',
        items :[
            {   // key是构建的checkbox的value属性，也就意味着是实际勾选后传过去的值
                key : 'T',
                // value是checkbox后面跟的label显示的内容，并非传到后台的内容
                value : '美导'
            }, {
                key : 'L',
                value : '讲师'
            },{
                key : 'S',
                value : '专家'
            },{
                key : 'C',
                value : '美容院'
            }
        ]
    }, {
        field : 'level',
        title : '针对等级',
        type : 'select',
        required : true,
        key: 'level',
        keyCode:'805906'
    }, {
        field : 'url',
        title : '头像',
        type : 'img',
        single : true,
        required : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        beforeSubmit:function (data) {
            if(data.kind.length>1) {
                data.kind = data.kind.join(',');
            }
            return data;
        },
        detailCode: '805444',
        addCode : '805440',
        editCode : '805442',
        code: code,
        view :view
    });

});