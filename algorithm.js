function signs() {
var start = 1901, birthyear = document.musician.year.value, date=document.musician.date.value, month=document.musician.month.selectedIndex;
with (document.musician.sign){


if (month == 1 && date >=20 || month == 2 && date <=18) {window,location = "bach.html"; }
if (month == 1 && date > 31) {window.location = "error.html";}
if (month == 2 && date >=19 || month == 3 && date <=20) {window.location = "beethoven.html";}
if (month == 2 && date > 29) {window.location = "error.html";}
if (month == 3 && date >=21 || month == 4 && date <=19) {window.location = "cezerny.html";}
if (month == 3 && date > 31) {window.location = "error.html";}
if (month == 4 && date >=20 || month == 5 && date <=20) {window.location = "chopin.html";}
if (month == 4 && date > 30) {window.location = "error.html";}
if (month == 5 && date >=21 || month == 6 && date <=21) {window.location = "debussy.html";}
if (month == 5 && date > 31) {window.location = "error.html";}
if (month == 6 && date >=22 || month == 7 && date <=22) {window.location = "handel.html";}
if (month == 6 && date > 30) {window.location = "error.html";}
if (month == 7 && date >=23 || month == 8 && date <=22) {window.location = "hayden.html";}
if (month == 7 && date > 31) {window.location = "error.html";}
if (month == 8 && date >=23 || month == 9 && date <=22) {window.location = "liszt.html";}
if (month == 8 && date > 31) {window.location = "error.html";}
if (month == 9 && date >=23 || month == 10 && date <=22) {window.location = "mozart.html";}
if (month == 9 && date > 30) {window.location = "error.html";}
if (month == 10 && date >=23 || month == 11 && date <=21) {window.location = "schubert.html";}
if (month == 10 && date > 31) {window.location = "error.html";}
if (month == 11 && date >=22 || month == 12 && date <=21) {window.location = "schumann.html";}
if (month == 11 && date > 30) {window.location = "error.html";}
if (month == 12 && date >=22 || month == 1 && date <=19) {window.location = "tchaikovsky.html";}
if (month == 12 && date > 31) {window.location = "error.html";}
}
x = (start - birthyear) % 12

}
function goBack() {
    window.history.back()
}
