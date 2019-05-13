
function randomId() {

  var lettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var playerId = "";

  for (var i = 0; i < 3; i++) {

    playerId += lettere.charAt(getRandomNumber(0, lettere.length - 1));

  }

  for (var i = 0; i < 3; i++) {

    playerId += getRandomNumber(0, 9);
  }

  return playerId;
}

var listaGiocatori = [];

for (var i = 0; i < 100; i++) {

  var player =
    {
      "id": randomId(),
      "punti": getRandomNumber(0, 70),
      "rimbalzi": getRandomNumber(0, 30),
      "falli": getRandomNumber(0, 5),
      "twopoints": getRandomNumber(0, 100) + "%",
      "threepoints": getRandomNumber(0, 100) + "%",
    }

  listaGiocatori.push(player);
}

$(document).ready(function() {

  for (var i = 0; i < listaGiocatori.length; i++) {

    var codicegiocatore = listaGiocatori[i].id;


    var templategiocatore = $('.template .playercode').clone();
    templategiocatore.text(codicegiocatore);

    $('.slider').append(templategiocatore);

  }

  $('.playercode').on('click', function() {

    var thisCode = $(this).text();

    for (var i = 0; i < listaGiocatori.length; i++) {
      var codicegiocatore = listaGiocatori[i].id;

      if (thisCode == codicegiocatore) {

        $('#punti').text(listaGiocatori[i].punti);
        $('#rimbalzi').text(listaGiocatori[i].rimbalzi);
        $('#falli').text(listaGiocatori[i].falli);
        $('#twopoints').text(listaGiocatori[i].twopoints);
        $('#threepoints').text(listaGiocatori[i].threepoints);
      }
    }
    console.log(thisCode);

  });

});

function getRandomNumber(min, max) {

  var newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return newRandomNumber;
}
