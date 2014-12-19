$(function() {
  $(".days").on("input", null, null, function(){
    days = $(this).val();
    if (days == 0){
      price = 0;
    }else{
      price = days*8.95*2+5;
    }
    $(".total-cost").text("$" + Math.round(price *100)/100);
  });
});
