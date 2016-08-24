// backend
//This is the movie object construct
function Ticket (timeInput, bday, amountInput, inputMovie){
  this.time = timeInput;
  this.bday = bday;
  this.amount = amountInput;
  this.name = inputMovie;
}
function Movies (nameofMovie, newMovie) {
  this.name = nameofMovie;
  this.isnew = newMovie;
}

function findMovie (movie) {
  var theMove = [];
  if (movie === "1" ) { theMove = new Movies ("Tarzan", false);}
  if (movie === "2" ) { theMove = new Movies ("Cpt.Planet", false);}
  if (movie === "3" ) { theMove = new Movies ("Avatar", false);}
  if (movie === "4" ) { theMove = new Movies ("Lets find Nemo 3", true);}
  if (movie === "5" ) { theMove = new Movies ("Batman 7", true);}
  return theMove;
}


Ticket.prototype.totalCost = function() {
  var costOfTicket = 10;
  var bday = this.bday;
  var time = this.time;
  var amount = this.amount;
  console.log(bday);
  console.log(parseInt(time));
  return amount * costOfTicket;
}


// frontend
$(function(){
  $("#movie").submit(function(event){
    event.preventDefault();
    var inputTime = $(".time").val();
    var inputBDay = $(".bDay").val();
    var amountInput = $(".amount").val();
    var inputMovie = $("input:radio[name=movieName]:checked").val();
    inputMovie = findMovie(inputMovie);
    var theTicket = new Ticket(inputTime, inputBDay, amountInput, inputMovie);
    var cost = theTicket.totalCost();
    console.log(cost);
    $(".costPlace").append('<h3>The cost is $' + cost + '</h3>');

  });
});













// newMovie1 = {name :"rainMan", new:FALSE}
//
// function Ticket (iputofTime, inputofAge){
//   time: iputofTime
//   age: inputofAge
//   movie:[];
// }
//
// Ticket.prototype.cost {
//   if (==new) { cost*1.1}
// }
//
// instanceOfTicket.cost()
//
// CLick submit this {
//     var movie = movie input;
// }
