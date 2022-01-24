/* Write a regex pattern that matches the password
Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character. ( period, dot or full stop) provided that it is not the first or last character and it will not come one after the other.

*/

function checkPassword(password) {
  let pattern =
    /^(?![.])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&'*+-/=?^_`{|}~])/;
  let result = pattern.test(password);
  console.log(result);
}
//checkPassword("fgfg.F#fgf123");

//validate email

function validateEmail(email) {
  let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let result = pattern.test(email);
  console.log(result);
}

//validateEmail("sssgmail.com");

//Write a regex pattern that verifies credit card pattern

function verifyCreditCard(number) {
  let pattern_visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let pattern_mastercard = /^5[1-5][0-9]{14}$/;

  let result = pattern_visa.test(number);
  let result2 = pattern_mastercard.test(number);

  if (result || result2) {
    console.log("Valid Card");
  } else {
    console.log("Invalid Card");
  }
}

//verifyCreditCard(6155279860457);

//Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph

function check() {
  let text = `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.`;
  //let pattern_email = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let pattern_phone =
    /^\s*(?:\(?\+?(\d[91]{1}){1}\)?)?[-. (](\d{5})[-. )](\d{5})(?: x(\d+))?\s$/g;
  //let pattern = new RegExp(pattern_email, pattern_phone);
  let result = text.match(pattern_);
  // console.log(result);
}
check();

//Implement the setTimeout function using native javascript only.

function settime(seconds) {
  setTimeout(() => {
    console.log("Hi");
  }, seconds);
}

//settime(2000);

//implement array Functions

function array() {
  let arr = Object.create(array.prototype);
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}
array.prototype.push = function (element) {
  this[this.length] = element;
  this.length++;
  return this.length;
};
array.prototype.pop = function () {
  this.length--;
  const elementToRemove = this[this.length];
  delete this[this.length];
  return elementToRemove;
};
array.prototype.shift = function () {
  let arr = {};
  for (let i in this) {
    if (i == "length") {
      arr["length"] = this[i] - 1;
      break;
    }
    if (i != "0") {
      arr[--i] = this[i];
    }
  }

  return arr;
};

array.prototype.unshift = function (...arg) {
  let arr = { ...this };
  this.length = this.length + arg.length;
  let counter = this.length;
  let i = 0;
  while (counter) {
    this[i] = arg[i];
    if (arg[i] == undefined) {
      this[i] = arr[i - arg.length];
    }
    counter--;
    i++;
  }
  return this.length;
};

array.prototype.Length = function () {
  return this.length;
};

array.prototype.splice = function (pos, delCount, ...arg) {
  let arr = { ...this };
  while (delCount != 0 && arr.length == 0) {
    if (arg.length == 0) {
      //delete
      delete this[Number(pos--)];
      this.length--;
      delCount--;
    }
  }
  while (delCount != 0 && arr.length != 0) {
    //delete
    delete this[Number(pos--)];
    this.length--;
    delCount--;
    console.log(this);
  }
  if (delCount == 0) {
    let counter = this.length + arg.length;
    let i = 0;
    let p = pos;
    let pI = 0;
    let argI = 0;
    while (counter) {
      if (i == p && arg[argI] != undefined) {
        this[i] = arg[argI++];
        pI = argI;
        p++;
      } else if (counter != 0) {
        this[i] = arr[i - pI];
      }
      counter--, i++;
    }
  }
  //update keys
  let index = 0;
  for (key in this) {
    if (key == "length") {
      break;
    }
    if (Number(key) != index) {
      delete this[key];
      this[index] = arr[key];
    }
    index++;
  }
  this.length = this.length + arg.length;
  console.log(this);
};
const friends = array();
friends.push("Banana");
friends.push("Orange");
friends.push("Apple");
friends.push("Mango");
//const arr = friends.shift();
//const length = friends.unshift("A", "b", "c");
//console.log(length);
//console.log(friends.Length());
//friends.splice(3, 0, "Lemon", "kiwi");
//friends.splice(2, 2);
