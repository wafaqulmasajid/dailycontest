// ------------------ showing date and time------------------

var currentDate = new Date();
var cDay = currentDate.getDate()
var cMonth = currentDate.getMonth() + 1
var cYear = currentDate.getFullYear()
var crtTime = cDay + "/" + cMonth + "/" + cYear
var time = currentDate.getHours() + ":" + currentDate.getMinutes();
document.getElementById("current-time").innerHTML = ("<b>" + crtTime + " , " + time + "</b>")

// -----------------------displaying and hidng attendance div------------------

function clhifz() {
  if (event.currentTarget.checked == true) {
    document.getElementById("hifz").style.display = "block";
    document.getElementById("nazra").style.display = "none";
  }
  else {
    document.getElementById("hifz").style.display = "none";
    document.getElementById("nazra").style.display = "block";
  }
}
function clnazra() {
  if (event.currentTarget.checked == true) {
    document.getElementById("hifz").style.display = "none";
    document.getElementById("nazra").style.display = "block";
  }
  else {
    document.getElementById("hifz").style.display = "block";
    document.getElementById("nazra").style.display = "none";
  }
}

// -------------------enabling and desabling hifz attendance checkboxes-------------

function classchk() {
  if(document.getElementById("missed").checked == true){
    document.getElementById("subah").desabled = true
    document.getElementById("dopahar").desabled = true
    document.getElementById("sham").desabled = true
  }
  else{
    document.getElementById("subah").desabled = false
    document.getElementById("dopahar").desabled = false
    document.getElementById("sham").desabled = false
  }
}
function desablemissed() {
  if (
    document.getElementById("subah").checked == true ||
    document.getElementById("dopahar").checked == true ||
    document.getElementById("sham").checked == true == true) {
    document.getElementById("missed").desabled = true
  }
  else{
    document.getElementById("missed").desabled = false
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
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert('Success!', response), form.clear)
//     .catch(error => alert('Error!', error.message))
// })
// --------------- populating select data ----------------
function submit() {
  // var name = document.getElementById("name").value
  // var ctime = time
  // var tayyari = document.querySelector('input[name="tayyari"]:checked').value;
  // var asbaq = document.querySelector('input[name="asbaq"]:checked').value;
  // var khidmat = document.querySelector('input[name="khidmat"]:checked').value;
  // alert(ctime)
  // var namaz = document.getElementById

  var fajr = document.getElementById("fajr").checked ? document.getElementById("fajr").value + "," : "";
  var zuhr = document.getElementById("zuhr").checked ? document.getElementById("zuhr").value + "," : "";
  var asr = document.getElementById("asr").checked ? document.getElementById("asr").value + "," : "";
  var maghrib = document.getElementById("maghrib").checked ? document.getElementById("maghrib").value + "," : "";
  var isha = document.getElementById("isha").checked ? document.getElementById("isha").value + "," : "";

  var none = document.getElementById("none").checked ? document.getElementById("none").value + "," : "";

  var subah = document.getElementById("subah").checked ? document.getElementById("subah").value + "," : "";
  var dopahar = document.getElementById("dopahar").checked ? document.getElementById("dopahar").value + "," : "";
  var sham = document.getElementById("sham").checked ? document.getElementById("sham").value + "," : "";

  var missed = document.getElementById("missed").checked ? document.getElementById("missed").value + "," : "";


  let formdata = {
    name: document.getElementById("name").value,
    time: crtTime + " - " + time,
    namaz: fajr + zuhr + asr + maghrib + isha + none,
    hazri: subah + dopahar + sham + missed,
    tayyari: document.querySelector('input[name="tayyari"]:checked').value,
    asbaq: document.querySelector('input[name="asbaq"]:checked').value,
    khidmat: document.querySelector('input[name="khidmat"]:checked').value,
  };
  console.log(formdata);
}
