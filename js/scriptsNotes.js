
// ideas for calculationg cost:
// =================================================
// var tickPrice = 10
// var whatYouPay = #
//
//
// is movie time < 1pm (or whenever the discount happens)? if yes set time = .8 if no = 1
//
//
// Amount = amount (option value 1~4)
//
//
// isnew = true = 1.1 false = 1
//
//
// find todays date! set it as = "today":::
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
// if(dd<10) {  dd='0'+dd  }
// if(mm<10) {  mm='0'+mm  }
// today = mm+'/'+dd+'/'+yyyy;
// then:::::
// check if they are ald enough??? how??
// set bday (or a new variable) =to true or false? if true give discount?
// true; bday = .9 or false; = 1
//
//
// run   whatYouPay=tickPrice*bday*time*Amount*isnew

// return: "your ticket for <nameofMovie> will cost $ <whatYouPay>"
//round up to hundredths place $ _ _ . _ _
