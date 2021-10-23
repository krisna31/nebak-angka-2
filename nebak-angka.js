
//! user-defined-functions
// func untuk bertanya dan mengembalikan nilai true or false
function cobalagi() {
  return confirm("Coba Lagi?");
}

// func untuk bertanya kepada pemain mau melanjutkan gameny atau keluar dari permainan
const cobalah = function cobalah() {
  setTimeout(function () {
    keputusan = cobalagi();
    console.log(keputusan);
    if (keputusan == true) {
      inf.innerHTML = "";
      nyawa = 3;
      comp = pilihanComp();
    } else {
      document.getElementById('bodi').innerHTML = `<h1>Thanks for Playing</h1>`;
    }
  }, 100)
}

// func untuk menentukan pilihan computer antara 1-10
const pilihanComp = () => Math.round(Math.random() * 10);

// fuunc untuk semua rules yang dilakukan
const rules = function rules(player) {
  player.forEach(choices);
  function choices(e) {
    e.addEventListener('click', function () {
      console.log(nyawa);
      const pilihanPlayer = e.className;
      if (pilihanPlayer == comp) {
        skorP++;
        sPlayer.innerHTML = `skor : ${skorP}`
        inf.innerHTML = "WIN";
        cobalah();
      } else if (pilihanPlayer < comp) {
        inf.innerHTML = "Too SMALL";
        nyawa--;
      } else if (pilihanPlayer > comp) {
        inf.innerHTML = "Too BIG";
        nyawa--;
      }
      if (nyawa == 0) {
        skorC++;
        sComp.innerHTML = `skor : ${skorC}`
        inf.innerHTML = "LOSE";
        cobalah();
      }
    })
  }
}


// let tanya = true
let comp = pilihanComp();
const inf = document.getElementById('info');
const player = document.querySelectorAll('ul li');
const sComp = document.getElementById('sComp');
const sPlayer = document.getElementById('sPlayer');
let skorP = 0;
let skorC = 0;

let nyawa = 3

//* rules
rules(player);
