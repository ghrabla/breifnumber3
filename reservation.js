
let nbjour = document.getElementById("nbjour")
let select1 = document.querySelector("#select-1");
let select2 = document.querySelector("#select-2");
let Electrique = document.querySelector("#electrique");
let Hybride = document.querySelector("#hybride");
let Essence = document.querySelector("#essence");
let Diesel = document.querySelector("#diesel");
let Autor = document.querySelector("#auto");
let Manual = document.querySelector("#manual");
select1.addEventListener("change" , function() {
    let SelectText = select1.options[select1.selectedIndex].text;
    console.log( "text : " + SelectText);
    if(SelectText === "Moto")
    {
      document.getElementById("electrique").style.display="block";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="none";
    }
    else if(SelectText === "Citadine")
    {
      document.getElementById("electrique").style.display="block";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if(SelectText === "Compact")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Berline")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="block";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Utilitaire")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="none";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Engin de chantier")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="block";
      document.getElementById("diesel").style.display="block";
    }
    else if (SelectText === "Camion")
    {
      document.getElementById("electrique").style.display="none";
      document.getElementById("hybride").style.display="none";
      document.getElementById("essence").style.display="none";
      document.getElementById("diesel").style.display="block";
    }
})

document.getElementById("button---1").addEventListener("click",function() {{
  let nbjour=document.getElementById("nbjour").value;
  var valType=document.getElementById("select-1").value;
  console.log( valType );
  var valFuel=document.getElementById("select-2").value;
  console.log( valFuel );
  var valGear=document.getElementById("select-3").value;
  var total=0;
  total+=(parseFloat(valType)+(parseFloat(valType)*parseFloat(valFuel))+(parseFloat(valType)*parseFloat(valGear)))*nbjour;
  console.log( total);
  document.getElementById("total").innerHTML=total;
}})