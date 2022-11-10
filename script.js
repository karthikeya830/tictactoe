const array = [["", "", ""],
               ["", "", ""],
               ["", "", ""]];
let box1 = document.getElementById("b1")
let box2 = document.getElementById("b2")
let box3 = document.getElementById("b3")
let box4 = document.getElementById("b4")
let box5 = document.getElementById("b5")
let box6 = document.getElementById("b6")
let box7 = document.getElementById("b7")
let box8 = document.getElementById("b8")
let box9 = document.getElementById("b9")
let main = document.getElementById("main-content")
let winner = document.getElementById("winner")
let playerTurn = true;
let turn = document.getElementById("turn")
let count = 0;
let reset = document.getElementById("reset")
function insert(x) {
    count++;
    if (playerTurn) {
        x.innerHTML = "1"
        return "1";
    }
    else {
        x.innerHTML = "0"
        return "0";
    }
}

function win() {
    box1.style.pointerEvents = "none";
    box2.style.pointerEvents = "none";
    box3.style.pointerEvents = "none";
    box4.style.pointerEvents = "none";
    box5.style.pointerEvents = "none";
    box6.style.pointerEvents = "none";
    box7.style.pointerEvents = "none";
    box8.style.pointerEvents = "none";
    box9.style.pointerEvents = "none";
}


box1.onclick = function () { array[0][0] = insert(box1); console.log(array); TogglePlayer(); Check(array); box1.style.pointerEvents = "none"; }
box2.onclick = function () { array[0][1] = insert(box2); console.log(array); TogglePlayer(); Check(array); box2.style.pointerEvents = "none"; }
box3.onclick = function () { array[0][2] = insert(box3); console.log(array); TogglePlayer(); Check(array); box3.style.pointerEvents = "none"; }
box4.onclick = function () { array[1][0] = insert(box4); console.log(array); TogglePlayer(); Check(array); box4.style.pointerEvents = "none"; }
box5.onclick = function () { array[1][1] = insert(box5); console.log(array); TogglePlayer(); Check(array); box5.style.pointerEvents = "none"; }
box6.onclick = function () { array[1][2] = insert(box6); console.log(array); TogglePlayer(); Check(array); box6.style.pointerEvents = "none"; }
box7.onclick = function () { array[2][0] = insert(box7); console.log(array); TogglePlayer(); Check(array); box7.style.pointerEvents = "none"; }
box8.onclick = function () { array[2][1] = insert(box8); console.log(array); TogglePlayer(); Check(array); box8.style.pointerEvents = "none"; }
box9.onclick = function () { array[2][2] = insert(box9); console.log(array); TogglePlayer(); Check(array); box9.style.pointerEvents = "none"; }


//Switching between players
function TogglePlayer() {
    playerTurn = !playerTurn;
    playerTurn ? turn.innerHTML = "player-1's turn" : turn.innerHTML = "player-2's turn"
}


//Checking Winner
function Check(a) {
    if (check1(a)) {
        winner.innerHTML = "Player 1 is the Winner";
        win();
        winner.className = "winner";
    }
    else if (check0(a)) {
        winner.innerHTML = "Player 2 is the Winner";
        win();
        winner.className = "winner";
    }
    else if (count == 9) {
        winner.innerHTML = "Match Draw";
        winner.className = "winner";
    }

    else winner.innerHTML = ""
}

//Checking rows
function checkRows(a) {
    for (var i = 0; i < 3; i++) {
        let count = 0
        for (var j = 0; j < 3; j++) {
            if (array[i][j] == a) {
                count++;
            }
        }
        if (count == 3) return true;
    }
}

//Checking Columns
function checkColumns(a) {
    for (var i = 0; i < 3; i++) {
        let count = 0
        for (var j = 0; j < 3; j++) {
            if (array[j][i] == a) {
                count++;
            }
        }
        if (count == 3) return true;
    }
}

//Checking Diagonals
function checkDiagonals(a) {
    if (array[0][0] == a && array[1][1] == a && array[2][2] == a) return true;
    else if (array[2][0] == a && array[1][1] == a && array[0][2] == a) return true;
    else return false;
}

//Checking for player 1
function check1(a) {
    if (checkRows("1") || checkColumns("1") || checkDiagonals("1")) return true;
    else return false;
}

//Checking for player 2
function check0(a) {
    if (checkRows("0") || checkColumns("0") || checkDiagonals("0")) return true;
    else return false;
}

function Reset() {
    location.reload()
}