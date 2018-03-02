$(function() {
	// 统计分析-积分分布
    reqApi({
        code: '805701'
    }).done(function(data) {
        $("#amount-FF").text(moneyFormat(data.sendAmount));
        $("#amount-HS").text(moneyFormat(data.reAmount));
        $("#amount-ZJ").text(moneyFormat(data.zjAmount));
        $("#amount-MRY").text(moneyFormat(data.myrAmount));
        $("#amount-MD").text(moneyFormat(data.mdAmount));
        $("#amount-JS").text(moneyFormat(data.jsAmount));
        // accountNumberCNY = data[0].accountNumber;
        // $("#amount-JF").text(moneyFormat(data[1]?data[1].amount:0));
        // accountNumberJF = data[1].accountNumber;
    });

     $("#FF-Btn").click(function() {
         location.href = "ledgerFF.html";
     });

     $("#HS-Btn").click(function() {
         location.href = "ledgerHS.html";
     });
     //


     $("#ZJ-Btn").click(function() {
         location.href = "zhanghuS.html";
     });

     $("#MRY-Btn").click(function() {
         location.href = "zhanghuC.html";
     });

     $("#MD-Btn").click(function() {
         location.href = "zhanghuT.html";
     });

     $("#JS-Btn").click(function() {
         location.href = "zhanghuL.html";
     });
});