let X = 'X';
let O = 'O';
let count = 0;
let M = [];
let x = 0;
let y = 0;
let Xuser = prompt('X Player Name');
let Ouser = prompt('O Player Name');
let td = document.getElementsByTagName('td');
let btn = document.getElementById('reset')

function giveName() {
    if (Xuser == "" || Xuser == null && Ouser == "" || Ouser == null) {
        Xuser = 'X player'
        Ouser = 'O player'
    }
    document.getElementById('Xuser').innerHTML = `${Xuser}:${x} `
    document.getElementById('Ouser').innerHTML = `${Ouser}:${y} `
}

onload = function () {
    giveName();
    Arr();
    CreateTable();
}

function Arr() {
    for (let i = 0; i < 3; i++) {
        M[i] = [];
        for (let j = 0; j < 3; j++) {
            M[i][j] = '';
        }
    }
}

function CreateTable() {
    let tbl = '';

    for (let i = 0; i < 3; i++) {
        tbl += '<tr>';
        for (let j = 0; j < 3; j++) {
            tbl += `<td class="td" onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += '</tr>';
    }
    document.getElementsByTagName('table')[0].innerHTML = tbl;
}

function Click(i, j) {
    if (M[i][j] == '') {
        if (count % 2 == 0) {
            M[i][j] = X;
        } else {
            M[i][j] = O;
        }
        count++;
        setTimeout(Check, 20);
        CreateTable();
    }
}

function Check() {
    if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
        alert(M[0][0] + " Win!");
        if (M[0][0] == 'X') {
            x++;
        } else {
            y++;
        }
        document.getElementById('refresh').style.display = 'inline-block'
        count = 1;
        Arr();
        CreateTable();
        count++;
    }

    if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != "") {
        alert(M[0][2] + " Win!");
        if (M[0][2] == 'X') {
            x++;
        } else {
            y++;
        }
        document.getElementById('refresh').style.display = 'inline-block'
        count = 1;
        Arr();
        CreateTable();
        count++;
    }

    for (let i = 0; i < 3; i++) {
        if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
            alert(M[i][0] + " Win!");

            if (M[i][0] == 'X') {
                x++;
            } else {
                y++;
            }
            document.getElementById('refresh').style.display = 'inline-block'
            count = 1;
            Arr();
            CreateTable();
            count++;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
            alert(M[0][i] + " Win!");
            if (M[0][i] == 'X') {
                x++;
            } else {
                y++;
            }
            document.getElementById('refresh').style.display = 'inline-block'
            count = 1;
            Arr();
            CreateTable();
            count++;
        }
    }
    giveName();
}

function resettbl() {
    count = 1;
    Arr();
    CreateTable();
    count++;
}

function refresh() {
    count = 1;
    Arr();
    CreateTable();
    count++;
    x = 0;
    y = 0;
    giveName();
}