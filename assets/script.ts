const calc = document.getElementById("total");

document.getElementById("nav").addEventListener("mousedown", dragMouseDown);

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.addEventListener("mouseup", closeDragElement);
  document.addEventListener("mousemove", elementDrag);
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  calc.style.top = (calc.offsetTop - pos2) + "px";
  calc.style.left = (calc.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  document.removeEventListener("mouseup", closeDragElement);
  document.removeEventListener("mousemove", elementDrag);
}

// function calculate(event){
//     var pressedKey=event.target;
//     if(pressedKey.innerText=="AC"){
//         // document.getElementsByName('display')[0].innerHTML='0'
//         console.log(pressedKey)
//     }
// }
var disp:any = document.getElementsByName('disp')[0]
function calculate() {
    if (disp.value.includes("!")) {
        var size = disp.value.length;
        var n = Number(disp.value.substring(0, size - 1));
        var f = 1;
        for (let i = 2; i <= n; i++)
            var f = f * i;
        disp.value = f;
    }
    else if (disp.value.includes("%")) {
        var size = disp.value.length;
        var n = Number(disp.value.substring(0, size - 1));
        disp.value = n / 100;
    }
    else
        /* Otherwise evaluate and execute output */
        disp.value = eval(disp.value);
}
function setValue(val:any){
    if(val=='0-'){
        disp.value=''
    }
    else if(val=='~'){
        var ans= Number(disp.value)
        disp.value=ans*-1
    }
    else if(val=='x2'){
        var ans= Number(disp.value)
        disp.value=Math.pow(ans, 2)
    }
    else if(val=='x3'){
        var ans= Number(disp.value)
        disp.value=Math.pow(ans, 2)
    }
    else if(val=='10^'){
        var ans= Number(disp.value)
        disp.value=Math.pow(10, ans)
    }
    else if(val=='tanh'){
    var ans= Number(disp.value)
    var e1 = Math.pow(Math.E, ans)
    var e2 = Math.pow(Math.E, -ans)
    disp.value=(e1 - e2) / (e1 + e2)}
    else if(val=='cosh'){
        var ans= Number(disp.value)
        disp.value=(Math.pow(Math.E, ans) + Math.pow(Math.E, -ans)) / 2
    }
    else if(val=='sinh'){
        var ans= Number(disp.value)
        disp.value=((Math.pow(Math.E, ans) - Math.pow(Math.E, -ans)) / 2)
    }
    else{
    disp.value+=val
}
}

var yal=false;
function toggleSize(){
    console.log('yes')
if(yal){
    document.getElementById('sciCal').classList.replace("hidden","block")
    document.getElementById('nav').classList.replace("w-[200px]","w-[500px]")
    document.getElementById('texte').classList.replace("w-[200px]","w-[500px]")
    yal=false;
}
else{
    document.getElementById('sciCal').classList.replace("block","hidden")
    document.getElementById('nav').classList.replace("w-[500px]","w-[200px]")
    document.getElementById('texte').classList.replace("w-[500px]","w-[200px]")
    yal=true;
}
}