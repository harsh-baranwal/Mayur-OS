addEventListener("selectstart", event => event.preventDefault());
let statusw = document.getElementById("status");

let launcher = document.getElementById("launcher");

function bg1() {
  document.body.style.backgroundImage = "url('/Media/Main/bg1.jpg')";
  launcher.style.backgroundImage = "url('/Media/Main/bg1.jpg')";
}

function bg2() {
  document.body.style.backgroundImage = "url('/Media/Main/bg2.jpg')";
  launcher.style.backgroundImage = "url('/Media/Main/bg2.jpg')";
}

function bg3() {
  document.body.style.backgroundImage = "url('/Media/Main/bg3.jpg')";
  launcher.style.backgroundImage = "url('/Media/Main/bg3.jpg')";
}

function bg4() {
  document.body.style.backgroundImage = "url('/Media/Main/bg4.jpg')";
  launcher.style.backgroundImage = "url('/Media/Main/bg4.jpg')";
}

function bg5() {
  document.body.style.backgroundImage = "url('/Media/Main/bg5.jpg')";
  launcher.style.backgroundImage = "url('/Media/Main/bg5.jpg')";
}


navigator.getBattery().then(function(battery) {
  var level = battery.level;
  var flevel = level * 100;
  document.getElementById("bsl").innerHTML = flevel + "%";
});


let bicon = document.getElementById('battery');
bicon.addEventListener('click', ()=>{
  statusw.style.top = "100px"
})



const d = new Date();
document.getElementById("cdate").innerHTML = d.toDateString();


function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var session = "AM";

  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("ctime").innerText = time;
  document.getElementById("ctime").textContent = time;

  setTimeout(showTime, 1000);
  
}

showTime();


var apps = document.getElementById("apps");
var initialWidth = apps.offsetWidth;

function incWidth() {
  initialWidth = initialWidth + 50;
  apps.style.width = initialWidth + "px";
}

function decWidth() {
  initialWidth = initialWidth - 50;
  apps.style.width = initialWidth + "px";
}



let credits = document.getElementById("credits");
let creditsicon = document.getElementById("creditsc");

creditsicon.addEventListener("click", ()=>{
    credits.style.top = "100px";
    creditsicon.classList = "active";
})


let AutoDraw = document.getElementById("AutoDraw");
let adicon = document.getElementById("adicon");
let d_adicon = document.getElementById("d_adicon");

adicon.addEventListener("click", ()=>{
    AutoDraw.style.visibility = "visible"
    AutoDraw.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_adicon.classList = "active";
    d_adicon.style.display = "block";
    incWidth();
})

let settings = document.getElementById("settings");
let seticon = document.getElementById("seticon");
let d_seticon = document.getElementById("d_seticon");

seticon.addEventListener("click", ()=>{
    settings.style.visibility = "visible"
    settings.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_seticon.classList = "active";
    d_seticon.style.display = "block";
    incWidth();
})

let code = document.getElementById("Code");
let codeicon = document.getElementById("codeicon");
let d_codeicon = document.getElementById("d_codeicon");

codeicon.addEventListener("click", ()=>{
    code.style.visibility = "visible"
    code.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_codeicon.classList = "active";
    d_codeicon.style.display = "block";
    incWidth();
})

let flipkart = document.getElementById("flipkart");
let ficon = document.getElementById("ficon");
let d_ficon = document.getElementById("d_ficon");

ficon.addEventListener("click", ()=>{
    flipkart.style.visibility = "visible"
    flipkart.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_ficon.classList = "active";
    d_ficon.style.display = "block";
    incWidth();
})

let mail = document.getElementById("mail");
let micon = document.getElementById("micon");

micon.addEventListener("click", ()=>{
    mail.style.visibility = "visible"
    mail.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
})

let jiosaavn = document.getElementById("jiosaavn");
let jsicon = document.getElementById("jsicon");
let d_jsicon = document.getElementById("d_jsicon");

jsicon.addEventListener("click", ()=>{
    jiosaavn.style.visibility = "visible"
    jiosaavn.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_jsicon.classList = "active";
    d_jsicon.style.display = "block";
    incWidth();
})

let instagram = document.getElementById("instagram");
let igicon = document.getElementById("igicon");
let d_igicon = document.getElementById("d_igicon");

igicon.addEventListener("click", ()=>{
    instagram.style.visibility = "visible"
    instagram.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_igicon.classList = "active";
    d_igicon.style.display = "block";
    incWidth();
})

let notebook = document.getElementById("notebook");
let nbicon = document.getElementById("nbicon");
let d_nbicon = document.getElementById("d_nbicon");

nbicon.addEventListener("click", ()=>{
    notebook.style.visibility = "visible"
    notebook.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_nbicon.classList = "active";
    d_nbicon.style.display = "block";
    incWidth();
})

let calculator = document.getElementById("calculator");
let calicon = document.getElementById("calicon");
let d_calicon = document.getElementById("d_calicon");

calicon.addEventListener("click", ()=>{
    calculator.style.visibility = "visible"
    calculator.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_calicon.classList = "active";
    d_calicon.style.display = "block";
    incWidth();
})

function textwindow() {
    notebook.style.visibility = "visible"
    notebook.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
    d_nbicon.classList = "active";
    d_nbicon.style.display = "block";
    incWidth();
}

nbicon.addEventListener("click", ()=>{
  notebook.style.visibility = "visible"
  notebook.style.animation = "bs 0.15s linear";
  launcher.style.visibility = "hidden";
  launchericon.classList = "";
  d_nbicon.classList = "active";
  d_nbicon.style.display = "block";
  incWidth();
})

let gchrome = document.getElementById("chrome");
let chicon = document.getElementById("chicon");

chicon.addEventListener("click", ()=>{
    gchrome.style.visibility = "visible"
    gchrome.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
})

let d_chicon = document.getElementById("d_chicon");

d_chicon.addEventListener("click", ()=>{
    gchrome.style.visibility = "visible"
    gchrome.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    d_chicon.classList = "active";
})

let grocial = document.getElementById("grocial");
let cticon = document.getElementById("cticon");

cticon.addEventListener("click", ()=>{
    grocial.style.visibility = "visible"
    grocial.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    launchericon.classList = "";
})

let d_cticon = document.getElementById("d_cticon");

d_cticon.addEventListener("click", ()=>{
    grocial.style.visibility = "visible"
    grocial.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    d_cticon.classList = "active";
})

let d_micon = document.getElementById("d_micon");

d_micon.addEventListener("click", ()=>{
    mail.style.visibility = "visible"
    mail.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    d_micon.classList = "active";
})

let trash = document.getElementById("trash");
let ticon = document.getElementById("ticon");

ticon.addEventListener("click", ()=>{
    trash.style.visibility = "visible"
    trash.style.animation = "bs 0.15s linear";
    launcher.style.visibility = "hidden";
    ticon.classList = "active";
})




let launchericon = document.getElementById("launchsrch");

launchericon.addEventListener("click", ()=>{
    if(launcher.style.visibility == "hidden") {
        launcher.style.visibility = "visible";
        launchericon.classList = "active";
    }
    else {
        launcher.style.visibility = "hidden";
        launchericon.classList = "";
    }
})





let sclose = document.getElementById("close");
sclose.addEventListener("click", ()=>{
  statusw.style.top = "-250px"
})

let cclose = document.getElementById("cclose");
cclose.addEventListener("click", ()=>{
  credits.style.top = "-410px";
  creditsicon.classList = "";
})

let adclose = document.getElementById("aclose");
adclose.addEventListener("click", ()=>{
  AutoDraw.style.visibility = "hidden";
  d_adicon.classList = "";
  d_adicon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let codeclose = document.getElementById("codeclose");
codeclose.addEventListener("click", ()=>{
  code.style.visibility = "hidden";
  d_codeicon.classList = "";
  d_codeicon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let fclose = document.getElementById("fclose");
fclose.addEventListener("click", ()=>{
  flipkart.style.visibility = "hidden";
  d_ficon.classList = "";
  d_ficon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let setclose = document.getElementById("setclose");
setclose.addEventListener("click", ()=>{
  settings.style.visibility = "hidden";
  d_seticon.classList = "";
  d_seticon.style.display = "none";
  decWidth();
})

let mclose = document.getElementById("mclose");
mclose.addEventListener("click", ()=>{
  mail.style.visibility = "hidden";
  docker.style.bottom = "0px"
  d_micon.classList = "";
})

let jsclose = document.getElementById("jsclose");
jsclose.addEventListener("click", ()=>{
  jiosaavn.style.visibility = "hidden";
  d_jsicon.classList = "";
  d_jsicon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let igclose = document.getElementById("igclose");
igclose.addEventListener("click", ()=>{
  instagram.style.visibility = "hidden";
  d_igicon.classList = "";
  d_igicon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let nbclose = document.getElementById("nbclose");
nbclose.addEventListener("click", ()=>{
  notebook.style.visibility = "hidden";
  d_nbicon.classList = "";
  d_nbicon.style.display = "none";
  docker.style.bottom = "0px"
  decWidth();
})

let chclose = document.getElementById("chclose");
chclose.addEventListener("click", ()=>{
  gchrome.style.visibility = "hidden";
  docker.style.bottom = "0px"
  d_chicon.classList = "";
})

let ctclose = document.getElementById("ctclose");
ctclose.addEventListener("click", ()=>{
  grocial.style.visibility = "hidden";
  docker.style.bottom = "0px"
  d_cticon.classList = "";
})

let calclose = document.getElementById("calclose");
calclose.addEventListener("click", ()=>{
  calculator.style.visibility = "hidden";
  d_calicon.classList = "";
  d_calicon.style.display = "none";
  decWidth();
})

let tclose = document.getElementById("tclose");
tclose.addEventListener("click", ()=>{
  trash.style.visibility = "hidden";
  ticon.classList = "";
  docker.style.bottom = "0px"
})





let docker = document.getElementById("docker");

let aresize = document.getElementById("aresize");
aresize.addEventListener("click", ()=>{
  if(AutoDraw.style.width == "1400px") {
    AutoDraw.style.width = "100%"
    AutoDraw.style.height = "100%"
    AutoDraw.style.top = "30px"
    AutoDraw.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    AutoDraw.style.width = "1400px"
    AutoDraw.style.height = "700px"
    AutoDraw.style.top = "50px"
    AutoDraw.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let fresize = document.getElementById("fresize");
fresize.addEventListener("click", ()=>{
  if(flipkart.style.width == "1400px") {
    flipkart.style.width = "100%"
    flipkart.style.height = "100%"
    flipkart.style.top = "30px"
    flipkart.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    flipkart.style.width = "1400px"
    flipkart.style.height = "700px"
    flipkart.style.top = "50px"
    flipkart.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let mresize = document.getElementById("mresize");
mresize.addEventListener("click", ()=>{
  if(mail.style.width == "1400px") {
    mail.style.width = "100%"
    mail.style.height = "100%"
    mail.style.top = "30px"
    mail.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    mail.style.width = "1400px"
    mail.style.height = "700px"
    mail.style.top = "50px"
    mail.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let cresize = document.getElementById("cresize");
cresize.addEventListener("click", ()=>{
  if(Code.style.width == "1400px") {
    Code.style.width = "100%"
    Code.style.height = "100%"
    Code.style.top = "30px"
    Code.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    Code.style.width = "1400px"
    Code.style.height = "700px"
    Code.style.top = "50px"
    Code.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let jsresize = document.getElementById("jsresize");
jsresize.addEventListener("click", ()=>{
  if(jiosaavn.style.width == "1400px") {
    jiosaavn.style.width = "100%"
    jiosaavn.style.height = "100%"
    jiosaavn.style.top = "30px"
    jiosaavn.style.left = "0px"
    docker.style.bottom = "-70px";
  }
  else {
    jiosaavn.style.width = "1400px"
    jiosaavn.style.height = "700px"
    jiosaavn.style.top = "50px"
    jiosaavn.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let igresize = document.getElementById("igresize");
igresize.addEventListener("click", ()=>{
  if(instagram.style.width == "1400px") {
    instagram.style.width = "100%"
    instagram.style.height = "100%"
    instagram.style.top = "30px"
    instagram.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    instagram.style.width = "1400px"
    instagram.style.height = "700px"
    instagram.style.top = "50px"
    instagram.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let nbresize = document.getElementById("nbresize");
nbresize.addEventListener("click", ()=>{
  if(notebook.style.width == "1400px") {
    notebook.style.width = "100%"
    notebook.style.height = "100%"
    notebook.style.top = "30px"
    notebook.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    notebook.style.width = "1400px"
    notebook.style.height = "700px"
    notebook.style.top = "50px"
    notebook.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let chresize = document.getElementById("chresize");
chresize.addEventListener("click", ()=>{
  if(gchrome.style.width == "1400px") {
    gchrome.style.width = "100%"
    gchrome.style.height = "100%"
    gchrome.style.top = "30px"
    gchrome.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    gchrome.style.width = "1400px"
    gchrome.style.height = "700px"
    gchrome.style.top = "50px"
    gchrome.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let ctresize = document.getElementById("ctresize");
ctresize.addEventListener("click", ()=>{
  if(grocial.style.width == "1400px") {
    grocial.style.width = "100%"
    grocial.style.height = "100%"
    grocial.style.top = "30px"
    grocial.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    grocial.style.width = "1400px"
    grocial.style.height = "700px"
    grocial.style.top = "50px"
    grocial.style.left = "65px"
    docker.style.bottom = "0px"
  }
})

let tresize = document.getElementById("tresize");
tresize.addEventListener("click", ()=>{
  if(trash.style.width == "1400px") {
    trash.style.width = "100%"
    trash.style.height = "100%"
    trash.style.top = "30px"
    trash.style.left = "0px"
    docker.style.bottom = "-70px"
  }
  else {
    trash.style.width = "1400px"
    trash.style.height = "700px"
    trash.style.top = "50px"
    trash.style.left = "65px"
    docker.style.bottom = "0px"
  }
})