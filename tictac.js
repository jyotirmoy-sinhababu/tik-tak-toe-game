let board = document.querySelector('.board');
let box = document.querySelectorAll('.boxes');
let restart = document.querySelector('.restart');
let j = -1;
let turn = 'X';

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', () => {
    j++;
    if (j % 2 === 0) {
      box[i].innerText = 'X';
    }
    if (j % 2 !== 0) {
      box[i].innerText = 'O';
    }
    checkWin();
  });
}
// const win = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// function checkWin() {
//   for (let i = 0; i < win.length; i++) {
//     if (
//       box[win[i][0]].innerText === box[win[i][2]].innerText &&
//       box[win[i][1]].innerText === box[win[i][2]].innerText &&
//       box[win[i][0]].innerText === 'X'
//     ) {
//       board.innerText = '';
//       board.innerHTML = 'X won';
//     }
//     if (
//       box[win[i][0]].innerText === box[win[i][2]].innerText &&
//       box[win[i][1]].innerText === box[win[i][2]].innerText &&
//       box[win[i][0]].innerText === 'O'
//     ) {
//       board.innerText = '';
//       board.innerHTML = 'O won';
//     }
//   }
// }

// function checkWin(number) {
// if(box[number].textContent===)
// }
let checkWin = () => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      box[e[0]].innerText === box[e[1]].innerText &&
      box[e[1]].innerText === box[e[2]].innerText &&
      box[e[0]].innerText === 'X'
    ) {
      board.innerText = '';
      board.innerHTML = 'X won';
    }
    if (
      box[e[0]].innerText === box[e[1]].innerText &&
      box[e[1]].innerText === box[e[2]].innerText &&
      box[e[0]].innerText === 'O'
    ) {
      board.innerText = '';
      board.innerHTML = 'O won';
    }
  });
};
