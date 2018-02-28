$(function() {
    var accountNumberCNY;
    var accountNumberJF;
    var accountNumberTG;
     reqApi({
         code: '805700'
     }).done(function(data) {
         $("#amount-ZJ").text(data.totalZJCount);
         $("#amount-MD").text(data.totalMDCount);
         $("#amount-JS").text(data.totalJSCount);
         $("#amount-LB").text(data.totalMRYCount);
         $("#amount-newZJ").text(data.newZJCount);
         $("#amount-newMD").text(data.newMDCount);
         $("#amount-newJS").text(data.newJSCount);
         $("#amount-newLB").text(data.newMRYCount);
         // accountNumberCNY = data[0].accountNumber;
         // $("#amount-JF").text(moneyFormat(data[1]?data[1].amount:0));
         // accountNumberJF = data[1].accountNumber;
     });

     // reqApi({
     //     code: '802503',
     //     json: {
     //         userId: OSS.SYS_USER + "_TG"
     //     }
     // }).then(function(data) {
     //     $("#amount-TG").text("￥" + moneyFormat(data[0]?data[0].amount:0));
     //     accountNumberTG = data[0].accountNumber;
     // });

     // $("#CNYls-Btn").click(function() {
     //     location.href = "ledger.html?accountNumber=" + accountNumberCNY + "&kind=CNY";
     // });
     // $("#JFls-Btn").click(function() {
     //     location.href = "ledger.html?accountNumber=" + accountNumberJF + "&kind=JF";
     // });
     // $("#accoutGrantBtn").click(function() {
     //     location.href = "ledger.html?accountNumber=" + accountNumberTG + "&kind=TG";
     // });
     // $("#accouBtn").click(function() {
     //     window.location.href = 'account_enchashment.html?accountNumber=' + accountNumberTG;
     // });
});