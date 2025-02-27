window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
   
});

function elemekElerese1() {
   let elem1 = document.querySelectorAll("section h2")[0]
   console.log(elem1.innerHTML)
}
function elemekElerese2() {
   const elem2 = document.querySelectorAll("#ide")[0]
   elem2.innerHTML = "<p>Jó reggelt!</p>"  
}
function elemekElerese3(){
    const elem3 = document.querySelectorAll(".ide")[0]
    elem3.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese4(){
    let elem4 = document.querySelector(".lista")
    let txt = "<ul>"
    for (let i = 0; i < 5; i++) {
        let szam = Math.floor(Math.random() *21+10);
        txt += `<li> ${szam}</li>` 
    }
    txt += "<ul"
    elem4.innerHTML = txt
}
function elemekFormazasa1(){
    document.querySelector(".lista").classList.add("formazott")

}
function esemenyKezeles1(){
    let listaElem = document.querySelector(".lista")
    listaElem.addEventListener("click",fvenyev)
    function fvenyev(){
            document.querySelector(".kattintasutan").appendChild(listaElem)
        }
}
function esemenyKezeles2(){
    let feladatElem = document.querySelector(".feladat")
    feladatElem.innerHTML =
}