$(function(){
 	var oCheck1 = $('.check1');
 	var oCheck2 = $('.check2');

 		oCheck1.click(function(){
 			$(this).toggleClass('si');
 			
 		})	
	
 		oCheck2.on('click',function(){
 			oCheck1.toggleClass('si');
 			oCheck2.toggleClass('si');
 		})	

 		// 购物车多选

 	// var Oabs = $('.absolute');
 	// var Onoff = $('.onoff');
 	
 		
 	// 	Onoff.click(function(){
 	// 		$(this).addClass('onoff2');
 	// 	})	
		
 		// 积分选择	
})