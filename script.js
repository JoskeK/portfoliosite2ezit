// hier komt je code
// console.log("Hallo wereld!");
let hoverafbeeldingen = document.getElementsByClassName("hoverafb");
let i1 = 0
while (i1 < hoverafbeeldingen.length) {
  vergrootAfbeelding("zoom"+(i1+1), hoverafbeeldingen[i1].id, hoverafbeeldingen[i1].id+"zoom", "close"+(i1+1));
  i1++;
}

function vergrootAfbeelding (modalid, afbid, modalafbid, closeid) {
  let modal = document.getElementById(modalid);

  let afb = document.getElementById(afbid);
  let modalAfb = document.getElementById(modalafbid);
  afb.onclick = function(){
    modal.style.display = "block";
    modalAfb.src = this.src;
  }

  let span = document.getElementById(closeid);

  span.onclick = function() {
  modal.style.display = "none";
  }
}
