$(function() {
	// 统计分析-积分分布
    reqApi({
        code: '805701'
    }).done(function(data) {
        $("#amount-FF").text(data.sendAmount);
        $("#amount-HS").text(data.reAmount);
        $("#amount-ZJ").text(data.zjAmount);
        $("#amount-MRY").text(data.myrAmount);
        $("#amount-MD").text(data.mdAmount);
        $("#amount-JS").text(data.jsAmount);
        // accountNumberCNY = data[0].accountNumber;
        // $("#amount-JF").text(moneyFormat(data[1]?data[1].amount:0));
        // accountNumberJF = data[1].accountNumber;
    });

     $("#FF-Btn").click(function() {
         location.href = "ledger.html?kind=ff";
     });

     $("#HS-Btn").click(function() {
         location.href = "ledger.html?kind=hs";
     });
     //


     $("#ZJ-Btn").click(function() {
         location.href = "zhanghu.html?type=S";
     });

     $("#MRY-Btn").click(function() {
         location.href = "zhanghu.html?type=C";
     });

     $("#MD-Btn").click(function() {
         location.href = "zhanghu.html?type=T";
     });

     $("#JS-Btn").click(function() {
         location.href = "zhanghu.html?type=L";
     });
});