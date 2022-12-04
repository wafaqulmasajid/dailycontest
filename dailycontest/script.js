// ------------------ showing date and time------------------
function doDate() {
  var str = "";

  var days = new Array("اتوار", "سوموار", "منگل", "بدھ", "جمعرات", "جمعہ", "سنیچر");
  var months = new Array("جنوری", "فروری", "مارچ", "اپریل", "مائی", "جون", "جلائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر");

  var now = new Date();

  str += days[now.getDay()] + " / " + now.getDate() + " / " + months[now.getMonth()] + " / " + now.getFullYear() + " - " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  document.getElementById("current-time").innerHTML = str;
}
setInterval(doDate, 1000);


const currentDate = new Date();
const cDay = currentDate.getDate()
const cMonth = currentDate.getMonth() + 1
const cYear = currentDate.getFullYear()
const crtTime = cDay + "/" + cMonth + "/" + cYear
const time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
setTimeout(time, 1000)
// document.getElementById("current-time").innerHTML = ("<b>" + crtTime + " , " + time + "</b>")

// -----------------------displaying and hidng attendance div------------------

function clhifz() {
  document.getElementById("hifz").style.display = "block";
  document.getElementById("nazra").style.display = "none";
  document.getElementById("deeniyat").style.display = "none";
}
function clnazra() {
  document.getElementById("nazra").style.display = "block";
  document.getElementById("hifz").style.display = "none";
  document.getElementById("deeniyat").style.display = "none";
}
function cldeeniyat() {
  document.getElementById("deeniyat").style.display = "block";
  document.getElementById("hifz").style.display = "none";
  document.getElementById("nazra").style.display = "none";
}

// -------------------enabling and desabling hifz, nazra - attendance checkboxes-------------

function classchk() {
  if (document.getElementById("missed").checked == true) {
    document.getElementById("subah").disabled = true;
    document.getElementById("dopahar").disabled = true;
    document.getElementById("sham").disabled = true;
    document.getElementById("hc").disabled = true;
  }
  else {
    document.getElementById("subah").disabled = false;
    document.getElementById("dopahar").disabled = false;
    document.getElementById("sham").disabled = false;
    document.getElementById("hc").disabled = false;
  }
}

function ccchk() {
  if (document.getElementById("hc").checked == true) {
    document.getElementById("subah").disabled = true;
    document.getElementById("dopahar").disabled = true;
    document.getElementById("sham").disabled = true;
    document.getElementById("missed").disabled = true;
  }
  else {
    document.getElementById("subah").disabled = false;
    document.getElementById("dopahar").disabled = false;
    document.getElementById("sham").disabled = false;
    document.getElementById("missed").disabled = false;
  }
}


function desablemissed() {
  if (event.currentTarget.checked == true ||
    document.getElementById("subah").checked == true ||
    document.getElementById("dopahar").checked == true ||
    document.getElementById("sham").checked == true ||
    document.getElementById("hc").checked == true == true) {
    document.getElementById("missed").disabled = true;
    document.getElementById("hc").disabled = true;
  }
  else {
    document.getElementById("missed").disabled = false;
    document.getElementById("hc").disabled = false;
  }
}

function desabledmissed() {
  if (event.currentTarget.checked == true ||
    document.getElementById("nsubah").checked == true ||
    document.getElementById("ndopahar").checked == true == true) {
    document.getElementById("nmissed").disabled = true;
    document.getElementById("nc").disabled = true;
  }
  else {
    document.getElementById("nmissed").disabled = false;
    document.getElementById("nc").disabled = false;
  }
}
function desablesd() {
  if (document.getElementById("nmissed").checked == true) {
    document.getElementById("nsubah").disabled = true;
    document.getElementById("ndopahar").disabled = true;
    document.getElementById("nc").disabled = true;
  }
  else {
    document.getElementById("nsubah").disabled = false;
    document.getElementById("ndopahar").disabled = false;
    document.getElementById("nc").disabled = false;
  }
}

function desablesdc() {
  if (document.getElementById("nc").checked == true) {
    document.getElementById("nsubah").disabled = true;
    document.getElementById("ndopahar").disabled = true;
    document.getElementById("nmissed").disabled = true;
  }
  else {
    document.getElementById("nsubah").disabled = false;
    document.getElementById("ndopahar").disabled = false;
    document.getElementById("nmissed").disabled = false;
  }
}


// -------------------enabling and desabling namaz checkboxes-------------

function namazcheck() {
  if (document.getElementById("none").checked == true) {
    document.getElementById("fajr").disabled = true;
    document.getElementById("zuhr").disabled = true;
    document.getElementById("asr").disabled = true;
    document.getElementById("maghrib").disabled = true;
    document.getElementById("isha").disabled = true;
  }
  else {
    document.getElementById("fajr").disabled = false;
    document.getElementById("zuhr").disabled = false;
    document.getElementById("asr").disabled = false;
    document.getElementById("maghrib").disabled = false;
    document.getElementById("isha").disabled = false;
  }
}
function desableNone() {
  if (event.currentTarget.checked == true ||
    document.getElementById("fajr").checked == true ||
    document.getElementById("zuhr").checked == true ||
    document.getElementById("asr").checked == true ||
    document.getElementById("maghrib").checked == true ||
    document.getElementById("isha").checked == true == true) {
    document.getElementById("none").disabled = true;
  }
  else {
    document.getElementById("none").disabled = false;
  }
}

// const formdata = {
//   time: getDay + "/" + getMonth + "/" + getFullYear + " , " + getHours + ":" + getMinutes + ":" + getSeconds,      //crtTime + " - " + time,
//   naam: naam,
//   class: clh + cln + cld,
//   hazri: subah + dopahar + sham + missed + hazir + gherhazir + nsubah + ndopahar + nmissed + hc + dc + nc,
//   namaz: fajr + zuhr + asr + maghrib + isha + none,
//   tayyari: kiya + nahin_kiya,
//   asbaq: bdhe + nahin_bdhe,
//   khidmat: k_kiya + k_nahin_kiya,
// }

// -------------------------error messages ids -----------------------------

const nmsg = document.getElementById("nmsg")
const dmsg = document.getElementById("dmsg")
const hmsg = document.getElementById("hmsg")
const hdmsg = document.getElementById("hdmsg")
const hnmsg = document.getElementById("hnmsg")
const namsg = document.getElementById("namsg")
const mmsg = document.getElementById("mmsg")
const smsg = document.getElementById("smsg")
const kmsg = document.getElementById("kmsg")


// ---------------- form submit with validation -------------

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxIkGZwJ40NeflsZfxwZk99VGH5GfmuJtaEtZpLt8Aq92NUAgmiLg0Vrt0ysK2XKw3h/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => alert('Success!', response), form.clear)
//     .catch(error => alert('Error!', error.message))
// })

var allrt = document.getElementById("alert") // alrt box
var almsg = document.getElementById("almsg") // art msg

var ergreen = almsg.classList.add("text-success");
var erred = almsg.classList.remove("text-black"); almsg.classList.add("text-danger");
var ergreenn = almsg.classList.remove("text-success");
var erredn = almsg.classList.remove("text-danger");

function submit() {
  // var name = document.getElementById("name").value
  // var ctime = time
  // var tayyari = document.querySelector('input[name="tayyari"]:checked').value;
  // var asbaq = document.querySelector('input[name="asbaq"]:checked').value;
  // var khidmat = document.querySelector('input[name="khidmat"]:checked').value;
  // alert(ctime)
  // var namaz = document.getElementById
  // alert(document.getElementById("subah"))


  // --------------------- collecting data -------------------
  const naam = document.getElementById("name").value

  const clh = document.getElementById("clh").checked ? document.getElementById("clh").value : "";
  const cln = document.getElementById("cln").checked ? document.getElementById("cln").value : "";
  const cld = document.getElementById("cld").checked ? document.getElementById("cld").value : "";

  const subah = document.getElementById("subah").checked ? document.getElementById("subah").value + "," : "";
  const dopahar = document.getElementById("dopahar").checked ? document.getElementById("dopahar").value + "," : "";
  const sham = document.getElementById("sham").checked ? document.getElementById("sham").value + "," : "";
  const hc = document.getElementById("hc").checked ? document.getElementById("hc").value + "," : "";

  const missed = document.getElementById("missed").checked ? document.getElementById("missed").value + "," : "";

  const hazir = document.getElementById("dhazir").checked ? document.getElementById("dhazir").value + "," : "";
  const gherhazir = document.getElementById("dgherhazir").checked ? document.getElementById("dgherhazir").value + "," : "";
  const dc = document.getElementById("dc").checked ? document.getElementById("dc").value + "," : "";

  const nsubah = document.getElementById("nsubah").checked ? document.getElementById("nsubah").value + "," : ""
  const ndopahar = document.getElementById("ndopahar").checked ? document.getElementById("ndopahar").value + "," : ""
  const nc = document.getElementById("nc").checked ? document.getElementById("nc").value + "," : ""

  const nmissed = document.getElementById("nmissed").checked ? document.getElementById("nmissed").value : ""

  const fajr = document.getElementById("fajr").checked ? document.getElementById("fajr").value + "," : "";
  const zuhr = document.getElementById("zuhr").checked ? document.getElementById("zuhr").value + "," : "";
  const asr = document.getElementById("asr").checked ? document.getElementById("asr").value + "," : "";
  const maghrib = document.getElementById("maghrib").checked ? document.getElementById("maghrib").value + "," : "";
  const isha = document.getElementById("isha").checked ? document.getElementById("isha").value + "," : "";

  const none = document.getElementById("none").checked ? document.getElementById("none").value + "," : "";

  // const tayyari = document.querySelector('input[name="tayyari"]:checked').value
  const kiya = document.getElementById("kiya").checked ? document.getElementById("kiya").value + "," : ""
  const nahin_kiya = document.getElementById("nahin_kiya").checked ? document.getElementById("nahin_kiya").value + "," : ""
  // const asbaq = document.querySelector('input[name="asbaq"]:checked').value
  const bdhe = document.getElementById("bdhe").checked ? document.getElementById("bdhe").value + "," : ""
  const nahin_bdhe = document.getElementById("nahin_bdhe").checked ? document.getElementById("nahin_bdhe").value + "," : ""
  // const khddmat = document.querySelector('input[name="khidmat"]:checked').value
  const k_kiya = document.getElementById("k_kiya").checked ? document.getElementById("k_kiya").value + "," : ""
  const k_nahin_kiya = document.getElementById("k_nahin_kiya").checked ? document.getElementById("k_nahin_kiya").value + "," : ""

  // --------------------taking form data to an object --------------------
  
  const formdata = {
    time: crtTime + " - " + time,
    naam: naam,
    class: clh + cln + cld,
    hazri: subah + dopahar + sham + missed + hazir + gherhazir + nsubah + ndopahar + nmissed + hc + dc + nc,
    namaz: fajr + zuhr + asr + maghrib + isha + none,
    tayyari: kiya + nahin_kiya,
    asbaq: bdhe + nahin_bdhe,
    khidmat: k_kiya + k_nahin_kiya,
  }
  //  -------------------------- validating form details -------------------
  if (formdata.naam.length == "") {
    nmsg.innerHTML = "براہ کرم نام چنیں", window.location.hash = "#current-time", setTimeout(function () {
      nmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.class.length < 1) {
    dmsg.innerHTML = "براہ کرم درجہ چنیں", window.location.hash = "#dmsg", setTimeout(function () {
      dmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.hazri.length < 1) {
    hmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", hdmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", hnmsg.innerHTML = "براہ کرم حاضری میں سے کم از کم کوئی ایک چنیں", window.location.hash = "#attendance", setTimeout(function () {
      hmsg.innerHTML = "", hdmsg.innerHTML = "", hnmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.namaz.length < 1) {
    namsg.innerHTML = "براہ کرم نماز میں سے کوئی ایک چنیں", window.location.hash = "#namsg", setTimeout(function () {
      namsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.tayyari.length < 1) {
    mmsg.innerHTML = "براہ کرم مکتب کی تیاری میں سے کوئی ایک چنیں", window.location.hash = "#mmsg", setTimeout(function () {
      mmsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.asbaq.length < 1) {
    smsg.innerHTML = "براہ کرم اسباق میں سے کوئی ایک چنیں", window.location.hash = "#smsg", setTimeout(function () {
      smsg.innerHTML = ""
    }, 5000)
  }
  else if (formdata.khidmat.length < 1) {
    kmsg.innerHTML = "براہ کرم خدمت میں سے کوئی ایک چنیں", window.location.hash = "#smsg", setTimeout(function () {
      kmsg.innerHTML = ""
    }, 5000)
  }
  // ---------------------- output after validation -------------------
  else {

    console.log(formdata)

    // ------------------- alert box making visible ------------------
    allrt.classList.add("visible")
    allrt.classList.remove("hidden")

    var successmsg = `ماشا اللہ لا قو الا باللہ\n مبارک ہو \nآپکی آج کی مکمل تفصیل جمع کر لی گئی ہے`
    var errormsg = "انالله و انا الیہ راجعون\n ہمیں افسوس ہے ابھی آپکی تفصیل جمع نہیں ہو سکی ہے\n دوبارہ کوشش کریں"
    // ماشا اللہ لا قو الا باللہ\n مبارک ہو \nآپکی آج کی مکمل تفصیل جمع کر لی گئی ہے
    // انالله و انا الیہ راجعون\n ہمیں افسوس ہے ابھی آپکی تفصیل جمع نہیں ہو سکی ہے\n دوبارہ کوشش کریں
    allrt; erred; almsg.innerText = errormsg //`Can't Submit the "object: formdata" current script needs data of html form to submit to google sheet\n Plese help to submit the object data to any readable and editable excel or csv file\n Have an eye in your console to see the object data\n Thank You` //errormsg
    // alert("Cant Submit the object 'formdata' needs a html form to submit to google sheet\n plese help to submit the object data to any readable and editable excel or csv file\n have an eye in your console to see the object data\n Thank You")
  }
}

// await Excel.run(async (context) => {
//   let sheet = context.workbook.worksheets.getItem("data");
  
//   let range = sheet.getRange("B2:C5");
//   range.load("address");
//   await context.sync();
  
//   console.log(`The address of the range B2:C5 is "${range.address}"`);
// });

// --------------------hiding alert box --------------

function okay() {
  allrt.classList.add("hidden")
  allrt.classList.remove("visible")
  ergreenn
  erredn
}
  // const scriptURL = 'https://google.com/macros/s/AKfycbxJc6FiCBdPEIPx8Im5rffnzyOh9nNEHwkN0ybDj4ySTjdsX_kjDjEz-Tzhpjl7IepQbQ/exec'
  // const form = formdata // document.forms['submit-to-google-sheet']
  // // document.getElementById("sub").addEventListener('click', e => {
  // //   e.preventDefault()
  // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  //   .then(response => alert('Success!', response), document.getElementById("form").clear)
  //   .catch(error => alert('Error!', error.message))
  // )

  // jquery.ajax({
  //   type: 'post',
  //   data: formdata.serialize(),
  //   success: function (result) {
  //     console.log(result);
  //   }
  // })
  // var url = 'https://script.google.com/macros/s/AKfycbxJc6FiCBdPEIPx8Im5rffnzyOh9nNEHwkN0ybDj4ySTjdsX_kjDjEz-Tzhpjl7IepQbQ/exec'
  // var url = "http://swapi.co/api/";

  // $.ajax({
  //   type: "POST",
  //   url: url,
  //   data: JSON.stringify(formdata),
  //   contentType: "application/json; charset=utf-8",
  //   dataType: "json",
  //   error: function () {
  //     alert("Error");
  //   },
  //   success: function () {
  //     alert("OK");
  //   }
  // });

// }
