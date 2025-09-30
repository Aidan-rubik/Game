const skor = document.getElementById("jumlahSkor");

let count = 0;

function tambah() {
    count++;
    skor.textContent = count;
}

//document.getElementById("powerup").onclick = function() {
//    if(skor >= 10){
//        skor.textContent = skor - 10;
//    }
//    else{
//        window.alert("Skor Kamu Belum Cukup!");
//    }
//
//}
//    <button id="powerup"><strong>Skor+<br>Level: <label id="level">0</label><br>Harga: 10</strong></button>
//#powerup{
//    color: aliceblue;
//    background-color: rgb(14, 12, 160);
//    font-size: 15px;
//    margin: 50px;
//    padding: 20px 40px;
//    cursor: pointer;
//    transition: background-color 0.25s;
//}
//#powerup:hover{
//    background-color: blue;

//}
