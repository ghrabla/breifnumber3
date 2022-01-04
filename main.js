var type = document.getElementById("type");
var transmission = document.getElementsByName("transmission");
var boite = document.querySelector(".fuel");
var nbrDays = document.getElementById("days");

var Prix_total = 0;
var fuel;
var total = document.querySelector("#prix");

const form = document.querySelector("form");
let choice;
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function fuelID(E) {
    fuel = E;
    choice = fuel;
    console.log(fuel);
}





function prix_feul(prix, fuel) {
    if (fuel === "Electrique") {
        Prix_total = prix + (prix * 0.05);
    }
    if (fuel === "Hybride") {
        Prix_total = prix + (prix * 0.09);
    }
    if (fuel === "Essence") {
        Prix_total = prix + (prix * 0.14);
    }
    if (fuel === "Diesel") {
        Prix_total = prix + (prix * 0.21);
    }
    return Prix_total
}

function calcule() {
    const manual = document.querySelector("#Manual");
    total.innerHTML = "";
    manual.checked = false;
    document.querySelector("#Manual").disabled = false;
    document.querySelector(".Manual").style.color = "black";
    document.querySelector("#Automatique").checked = false;
    document.querySelector("#Automatique").disabled = false;
    document.querySelector(".Automatique").style.color = "black";
    document.querySelector("#Hybride").checked = false;
    document.querySelector("#Hybride").disabled = false;
    document.querySelector(".Hybride").style.color = "black";
    document.querySelector("#Diesel").checked = false;
    document.querySelector("#Diesel").disabled = false;
    document.querySelector(".Diesel").style.color = "black";
    document.querySelector("#Essence").checked = false;
    document.querySelector("#Essence").disabled = false;
    document.querySelector(".Essence").style.color = "black";
    document.querySelector("#Electrique").checked = false;
    document.querySelector("#Electrique").disabled = false;
    document.querySelector(".Electrique").style.color = "black";

    switch (type.value) {
        case "Moto":
            Prix_total = prix_feul(10, fuel);
            document.querySelector("#Manual").disabled = true;
            document.querySelector(".Manual").style.color = "gray";
            document.querySelector("#Automatique").disabled = true;
            document.querySelector(".Automatique").style.color = "gray";
            document.querySelector("#Hybride").disabled = true;
            document.querySelector(".Hybride").style.color = "gray";
            document.querySelector("#Diesel").disabled = true;
            document.querySelector(".Diesel").style.color = "gray";

            console.log(fuel);
            break;

        case "Citadine": Prix_total = prix_feul(12, fuel);
            document.querySelector("#Manual").checked = true;
            document.querySelector("#Automatique").disabled = true;
            document.querySelector(".Automatique").style.color = "gray";
            break;

        case "Compact": Prix_total = prix_feul(14, fuel);
            document.querySelector("#Manual").checked = true;
            document.querySelector("#Automatique").disabled = true;
            document.querySelector(".Automatique").style.color = "gray";
            document.querySelector("#Electrique").disabled = true;
            document.querySelector(".Electrique").style.color = "gray";
            break;

        case "Berline":
            Prix_total = (20 * 0.19) + prix_feul(20, fuel);
            document.querySelector("#Automatique").checked = true;
            document.querySelector("#Manual").disabled = true;
            document.querySelector(".Manual").style.color = "gray";
            document.querySelector("#Electrique").disabled = true;
            document.querySelector(".Electrique").style.color = "gray";
            break;

        case "Utilitaire":
            Prix_total = prix_feul(16, fuel);
            document.querySelector("#Manual").checked = true;
            document.querySelector("#Diesel").checked = true;
            document.querySelector("#Automatique").disabled = true;
            document.querySelector(".Automatique").style.color = "gray";
            document.querySelector("#Electrique").disabled = true;
            document.querySelector(".Electrique").style.color = "gray";
            document.querySelector("#Hybride").disabled = true;
            document.querySelector(".Hybride").style.color = "gray";
            document.querySelector("#Essence").disabled = true;
            document.querySelector(".Essence").style.color = "gray";
            break;

        case "Engin de Chantier":
            Prix_total = prix_feul(900, fuel);
            document.querySelector("#Manual").checked = true;
            document.querySelector("#Automatique").disabled = true;
            document.querySelector(".Automatique").style.color = "gray";
            document.querySelector("#Essence").disabled = true;
            document.querySelector(".Essence").style.color = "gray";
            document.querySelector("#Hybride").disabled = true;
            document.querySelector(".Hybride").style.color = "gray";
            break;

        case "Camion":
            Prix_total = (250 * 0.19) + prix_feul(250, fuel);
            document.querySelector("#Automatique").checked = true;
            document.querySelector("#Diesel").checked = true;
            document.querySelector("#Manual").disabled = true;
            document.querySelector(".Manual").style.color = "gray";
            document.querySelector("#Electrique").disabled = true;
            document.querySelector(".Electrique").style.color = "gray";
            document.querySelector("#Hybride").disabled = true;
            document.querySelector(".Hybride").style.color = "gray";
            document.querySelector("#Essence").disabled = true;
            document.querySelector(".Essence").style.color = "gray";
            break;

    }
}



let p;
document.querySelector(".btn").addEventListener("click", function () {
    calcule()
    p = nbrDays.value * Prix_total;
    total.innerHTML = p;


});

let confirmed = document.getElementById("confirmed");
confirmed.addEventListener("click", function () {
    Swal.fire(
        'Success!',
        'You reserved the vihucle!<br/>type: ' + type.value +
        '<br/> Fuel:' + choice +
        '<br/> Nombre day:' + nbrDays.value +
        '<br/>Totale:' + p + '$',
        'success'
    )
    console.log(boite.value);

})
