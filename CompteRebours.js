var ChampsHeure = document.getElementById("Heures").value;

var ChampsMinute = document.getElementById("Minutes").value;

var ChampsSeconde = document.getElementById("Secondes").value;

var Heure = document.getElementById("Heure");

var Minute = document.getElementById("Minute");

var Seconde = document.getElementById("Seconde");

Heure.innerHTML = "0";

Minute.innerHTML = "0";

Seconde.innerHTML = "0";

var count;
var sec = 59;
var heu = 23;
var min = 59;

document.getElementById("Add").addEventListener("click", function () {

    ChampsHeure = document.getElementById("Heures").value;

    ChampsMinute = document.getElementById("Minutes").value;

    ChampsSeconde = document.getElementById("Secondes").value;

Minute.innerHTML = ChampsMinute;

Seconde.innerHTML = ChampsSeconde;

Heure.innerHTML = ChampsHeure;

});

var countdown;

document.getElementById("Play").addEventListener("click", function () {

      countdown = function () {

          clearTimeout(count);

        count = setTimeout(countdown, 1000);

        Heure.innerHTML = ChampsHeure;
        Minute.innerHTML = ChampsMinute;
        Seconde.innerHTML = ChampsSeconde--;



    if (ChampsSeconde == -1 && ChampsMinute != 0) {

        ChampsSeconde = sec--;

        Minute.innerHTML = ChampsMinute--;

    }

    if (ChampsMinute == 0 && ChampsHeure !=0 && ChampsSeconde == -1) {

        ChampsSeconde = sec;
        ChampsMinute = min;
        ChampsHeure--;


    }

    if (ChampsSeconde == -1) {

            if (ChampsMinute <= 0) {

                if (ChampsHeure <= 0) {

                clearTimeout(count);

                }
            }

        }

    };

      if (ChampsHeure == 0 && ChampsMinute == 0 && ChampsSeconde == -1) {

          ChampsSeconde = sec;
          ChampsMinute = min;
          ChampsHeure = heu;

      }

    setTimeout(countdown, 1000);

    document.getElementById("Play").style.display = "none";

});



document.getElementById("Stop").addEventListener("click",

    function Stop () {

        clearTimeout(count);
        document.getElementById("Play").style.display = "block";

    });


document.getElementById("Reset").addEventListener("click", function () {

    location.reload();

});

