// var a;
// function show_hide(){
//      if(a==1)
//         {
//          document.getElementById("product").style.display="inlline";
//          return a=0;
//      }

//      else
//         {
//             document.getElementById("product").style.display="none";
//          return a=1;
//         }
// }
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
  links.classList.toggle('active')
})


  