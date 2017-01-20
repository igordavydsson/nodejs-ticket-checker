// dictionary (aka JS Object) to be filled with ticket numbers
var ticketNumbers = {};

var index = function(req, res, next) {
  res.render('index', {title: 'Ticket Checker', message: false, errorMessage: false});
};

var post = function(req, res, next) {
  var ticket = req.body.ticket;
  var receipt = req.body.receipt;

  var message = false;
  var errorMessage = false;

  // helper function to send proper context to the rendered template
  function renderTicketMessage() {
    res.render('index', {title: 'Ticket Checker', message: message, errorMessage: errorMessage});
  }

  // if we press the receipt btn, we will go to the receipt page
  if (receipt === "receipt") {
    res.redirect('/receipt');

  // if we type anything in the input field it will be considered to be a ticket number
  } else if (ticket) {
    if (!ticketNumbers[ticket]) {
      ticketNumbers[ticket] = 1;
      message = "Welcome! Your partner is not here yet";
    } else if (ticketNumbers[ticket] == 1) {
      ticketNumbers[ticket] = 2;
      message = "Welcome! Your partner is already here";
    } else if (ticketNumbers[ticket] == 2) {
      errorMessage = "Sorry, both tickets have been used";
    }
    renderTicketMessage();

  // if we try to register an empty ticket number
  } else {
    errorMessage = "Sorry, you did not enter a number";
    renderTicketMessage();
  }
};

var receipt = function(req, res, next) {
  // list of ticket numbers with no couple
  var noCouple = [];
  for (var key in ticketNumbers) {
    if (ticketNumbers[key] === 1) {
      noCouple.push(key);
    }
  }

  var totalGuests = (Object.keys(ticketNumbers).length - noCouple.length) * 2 + noCouple.length;

  res.render('receipt', {title: 'Ticket Checker', totalGuests: totalGuests, noCouple: noCouple});
};

module.exports.index = index;
module.exports.post = post;
module.exports.ticketNumbers = ticketNumbers;
module.exports.receipt = receipt;
