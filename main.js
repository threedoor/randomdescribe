var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");

var yourname = document.querySelector(".yourname");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");

customName.focus();

function randomdescribe(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var X = ["钱包丢了", "捡了50块钱", "彩票中奖了", "涨工资了", "加班"];
var Y = ["收到了玫瑰花", "被表白了", "脱单", "表白被拒绝了", "加班"];
var Z = ["偶遇好友", "七夕吃鸡", "收到了蛋糕", "手机黑屏了", "加班"];

randomize.addEventListener("click", result);
function result() {
  first.textContent = randomdescribe(X);
  second.textContent = randomdescribe(Y);
  third.textContent = randomdescribe(Z);

  if (document.getElementById("male").checked) {
    yourname.textContent = "帅气的  " + customName.value;
  } else {
    yourname.textContent = "美美哒  " + customName.value;
  }

  if (customName.value !== "") {
    var thingArr = document.querySelectorAll(".describe p");
    for (var i = 0; i < thingArr.length; i++) {
      thingArr[i].style.visibility = "visible";
    }
  } else {
    alert("请输入一个名字");
  }
}
