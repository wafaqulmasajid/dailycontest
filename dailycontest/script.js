// ------------------ showing date and time------------------
function doDate() {
  var str = "";

  var days = new Array("اتوار", "سوموار", "منگل", "بدھ", "جمعرات", "جمعہ", "سنیچر");
  var months = new Array("جنوری", "فروری", "مارچ", "اپریل", "مائی", "جون", "جلائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر");

  var now = new Date();

  str += days[now.getDay()] + " " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " - " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
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
} 0
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

// -------------------enabling and desabling hifz attendance checkboxes-------------

function classchk() {
  if (document.getElementById("missed").checked == true) {
    document.getElementById("subah").disabled = true;
    document.getElementById("dopahar").disabled = true;
    document.getElementById("sham").disabled = true;
  }
  else {
    document.getElementById("subah").disabled = false;
    document.getElementById("dopahar").disabled = false;
    document.getElementById("sham").disabled = false;
  }
}
function desablemissed() {
  if (event.currentTarget.checked == true ||
    document.getElementById("subah").checked == true ||
    document.getElementById("dopahar").checked == true ||
    document.getElementById("sham").checked == true == true) {
    document.getElementById("missed").disabled = true;
  }
  else {
    document.getElementById("missed").disabled = false;
  }
}

function desabledmissed() {
  if (event.currentTarget.checked == true ||
    document.getElementById("dsubah").checked == true ||
    document.getElementById("ddopahar").checked == true == true) {
    document.getElementById("dmissed").disabled = true;
  }
  else {
    document.getElementById("dmissed").disabled = false;
  }
}
function clnazra() {
  if (document.getElementById("dmissed").checked == true) {
    document.getElementById("dsubah").disabled = true;
    document.getElementById("ddopahar").disabled = true;
  }
  else {
    document.getElementById("dsubah").disabled = false;
    document.getElementById("ddopahar").disabled = false;
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


// ---------------- form submit with validation -------------

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxIkGZwJ40NeflsZfxwZk99VGH5GfmuJtaEtZpLt8Aq92NUAgmiLg0Vrt0ysK2XKw3h/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => alert('Success!', response), form.clear)
//     .catch(error => alert('Error!', error.message))
// })
function submit() {
  // var name = document.getElementById("name").value
  // var ctime = time
  // var tayyari = document.querySelector('input[name="tayyari"]:checked').value;
  // var asbaq = document.querySelector('input[name="asbaq"]:checked').value;
  // var khidmat = document.querySelector('input[name="khidmat"]:checked').value;
  // alert(ctime)
  // var namaz = document.getElementById
  alert(document.getElementById("subah"))
  const name = document.getElementById("name").value

  const subah = document.getElementById("subah").checked ? document.getElementById("subah").value + "," : "";
  const dopahar = document.getElementById("dopahar").checked ? document.getElementById("dopahar").value + "," : "";
  const sham = document.getElementById("sham").checked ? document.getElementById("sham").value + "," : "";

  const missed = document.getElementById("missed").checked ? document.getElementById("missed").value + "," : "";

  const hazir = document.getElementById("dhazir").checked ? document.getElementById("sham").value + "," : "";
  const gherhazir = document.getElementById("dgherhazir").checked ? document.getElementById("sham").value + "," : "";

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

  const formdata = {
    time: crtTime + " - " + time,
    naam: name,
    namaz: fajr + zuhr + asr + maghrib + isha + none,
    hazri: subah + dopahar + sham + missed + hazir + gherhazir,
    tayyari: kiya + nahin_kiya,
    asbaq: bdhe + nahin_bdhe,
    khidmat: k_kiya + k_nahin_kiya,
  }
  console.log(formdata)
  const scriptURL = 'https://google.com/macros/s/AKfycbxJc6FiCBdPEIPx8Im5rffnzyOh9nNEHwkN0ybDj4ySTjdsX_kjDjEz-Tzhpjl7IepQbQ/exec'
  const form = formdata // document.forms['submit-to-google-sheet']
  // document.getElementById("sub").addEventListener('click', e => {
  //   e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert('Success!', response), document.getElementById("form").clear)
      .catch(error => alert('Error!', error.message))
  }
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
