$(function() {
	// 统计分析-积分分布
	reqApi({
		code: '802902'
	}).done(function(data) {
		
		$("#amount-FF").text(moneyFormat(data.platAmount));
		$("#amount-MRY").text(moneyFormat(data.myrAmount));
		$("#amount-ZJ").text(moneyFormat(data.zjAmount));
		$("#amount-MD").text(moneyFormat(data.mdAmount));
	});

	$("#FF-Btn").click(function() {
		window.location.href = "../finance/ledger.html?a=1&accountCode=A201802220000000001";
	});

	$("#ZJ-Btn").click(function() {
		window.location.href = "../finance/account.html?type=S&currency=JF";
	});
	
	$("#MRY-Btn").click(function() {
		window.location.href = "../finance/account.html?type=C&currency=JF";
	});

	$("#MD-Btn").click(function() {
		window.location.href = "../finance/account.html?type=T&currency=JF";
	});
		
});