const categorie = Array.from(document.querySelectorAll(".categorie"));
const coupe_longueGD = Array.from(document.querySelectorAll(".coupe_longueGD"));


categorie.forEach(categorie => {
  categorie.addEventListener("click", tabsAnimation)
})

let index = 0;

function tabsAnimation(e){

    const el = e.target;
    
    categorie[index].classList.remove("active");
    coupe_longueGD[index].classList.remove("activeContenu");
    coupe_longueGD[index].classList.add("none")
    
    index = categorie.indexOf(el);
    
    categorie[index].classList.add("active")
    coupe_longueGD[index].classList.add("activeContenu");
    coupe_longueGD[index].classList.remove("none")    
}

// var voir = document.getElementsByClassName('morebtn')
// console.log(voir)
function changeStyle() {
  document.getElementsByClassName("coupe_longueD").style.display ="block";
}
// console.log(changeStyle)








// const categorie = document.querySelectorAll('.categorie');
// const coupe_longueGD = document.querySelectorAll('.coupe_longueGD');
// let index = 0;

// categorie.forEach(categorie => {

//     categorie.addEventListener('click', () => {
//         categorie.classList.toggle('active')

        // if (categorie.classList.contains('active')) {
        //     return;
        // } else {
        //     categorie.classList.add('active');
        // }

        // index = categorie.getAttribute('data-anim');
        // // console.log(index)
        // // console.log(categorie)

        // for (i = 0; i < categorie.length; i++) {

        //     if (categorie[i].getAttribute('data-anim') !=
        //         index) {
        //         categorie[i].classList.remove('active');
        //     }


        // }


//         for (j = 0; j < coupe_longueGD; j++) {

//             if (coupe_longueGD[j].getAttribute('data-anim') == index) {
//                 coupe_longueGD[j].classList.add('activeContenu');

//             } else {
//                 coupe_longueGD[j].classList.remove('activeContenu');
            
//             }

//         }

//     })
   
// })
// document.getElementById('enfant').addEventListener('click', function(){
//     document.getElementById('femme').classList.remove('active')
//     document.getElementById('homme').classList.remove('active')
// })
// document.getElementById('femme').addEventListener('click', function(){
//     document.getElementById('enfant').classList.remove('active')
//     document.getElementById('homme').classList.remove('active')
// })
// document.getElementById('homme').addEventListener('click', function(){
//     document.getElementById('femme').classList.remove('active')
//     document.getElementById('enfant').classList.remove('active')
// })
