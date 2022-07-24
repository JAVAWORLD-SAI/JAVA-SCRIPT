var weekdays=clock.find('.weekdays span');
(function update_time() {
     var now = moment.format("hhmmssdA");
       digits.h1.attr('class', digit_to_name[noe[0]]);
       digits.h1.attr('class', digit_to_name[noe[1]]);
       digits.h1.attr('class', digit_to_name[noe[2]]);
       digits.h1.attr('class', digit_to_name[noe[3]]);
       digits.h1.attr('class', digit_to_name[noe[4]]);
       digits.h1.attr('class', digit_to_name[noe[5]]);


       var dow=now[6];
       dow --;
       if(dow<0){
        dow=6;
       }
       weekdays.removeClass('active').eq(dow).addClass('active');
       AudioParamMap.text(dow[7]+now[8]);
       setTimeout(update_time,1000);
}