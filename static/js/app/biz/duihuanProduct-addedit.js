$(function() {
    // 业务管理-积分管理-兑换商品管理
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field : 'name',
        title : '名称',
        required : true
    }, {
        field : 'slogan',
        title : '广告语',
        required : true
    }, {
        field : 'price',
        title : '积分',
        required : true,
        formatter : view?'':moneyFormat,
        number : true
    }, {
        field : 'quantity',
        title : '库存',
        required : true
    }, {
        field : 'advPic',
        title : '广告图',
        type : 'img',
        required : true,
        single : true
    }, {
        field : 'pic',
        title : '展示图',
        type : 'img',
        required : true
    }, {
        field : 'faceKind',
        title : '查看对象',
        required : true,
        type : 'checkbox',
        items :[
            {   // key是构建的checkbox的value属性，也就意味着是实际勾选后传过去的值
                key : 'T',
                // key : '1',
                // value是checkbox后面跟的label显示的内容，并非传到后台的内容
                value : '美导'
            }, {
                key : 'L',
                // key : '2',
                value : '讲师'
            },{
                key : 'S',
                // key : '3',
                value : '专家'
            },{
                key : 'C',
                // key : '4',
                value : '美容院'
            }
        ]
    }, {
        field : 'description',
        title : '详情',
        required : true
    }, {
        field : 'remark',
        title : '备注'
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805286',
        addCode: '805280',
        editCode: '805282',
        view: view,
        beforeSubmit:function (data) {
            if(data.faceKind.length>1) {
                data.faceKind = data.faceKind.join(',');
            }
            data.price *= 1000;
            return data;
        }
    });

});