"use strict";

function f1(a) {
  switch (a) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;

    case 3:
      console.log(3);
      break;

    default:
      console.log(0);
      break;
  }
}

console.log(f1(2));

let ret = function (b) {
  switch (b) {
    case 1:
      console.log(1);
      break;

    case 2:
      console.log(2);
      break;

    case 3:
      console.log(3);
      break;

    default:
      console.log(0);
      break;
  }
};

console.log(ret(3));

let ret2 = (c, d) => c + d;

console.log(ret2(1, 5));

let test = [125, 555, 44];
let tip = [];

const f4 = (test) => {
  for (let x in test) {
    if (test[x] > 50 && test[x] < 300) tip[x] = test[x] * 0.15;
    else tip[x] = test[x] * 0.2;
  }
  return tip;
};

console.log(f4(test));

const obj = {
  fn: "Adi",
  sn: "Singh",
  roll: 201952202,
  fc: function (c) {
    return c * 10;
  },
};

console.log(
  `${obj.fn} has sir name ${obj.sn} and roll no ${
    obj.roll
  } and has shares of rs ${obj.fc(100)}`
);
let k;
function funct(k) {
  return obj.fn;
}
console.log(obj.fn);

let arr2 = [100, 200, 300, 400, 500, 600];
const fn1 = (ar) => {
  let p = 0;
  for (let x in ar) {
    p = p + ar[x];
  }
  return p / ar.length;
};

console.log(fn1(arr2));
