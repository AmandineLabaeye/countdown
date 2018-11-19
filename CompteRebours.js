var Base = new Date ("00:00:00");

var ChampsMinute = document.getElementById("Minutes").value;

var ChampsSeconde = document.getElementById("Secondes").value;

document.getElementById("Add").addEventListener("click", function () {

    ChampsMinute = document.getElementById("Minutes").value;

    ChampsSeconde = document.getElementById("Secondes").value;

document.getElementById("Minute").innerHTML = ChampsMinute;

document.getElementById("Seconde").innerHTML = ChampsSeconde;

});

var countdown;
var count;

document.getElementById("Play").addEventListener("click", function () {

    Secondess  = function () {



    if (ChampsSeconde >= 0) {

        count = setTimeout(Secondess, 1000);
        document.getElementById("Seconde").innerHTML = ChampsSeconde--;

    } else {

        clearTimeout();

    }

    };

    Minutess = function () {

        if (ChampsMinute >= 0) {

            count = setTimeout(Minutess, 1000);
            document.getElementById("Minute").innerHTML = ChampsMinute--;

        } else {

            clearTimeout();

        }

    };

    Secondess();
    Minutess();

});


