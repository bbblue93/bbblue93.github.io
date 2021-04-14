function playerName(){
  var name = prompt("What's your name?");
  alert("Hello " + name + ", welcome to this puzzle game!");
}
playerName()

function enterAnswer(){
  var answer = prompt("您的答案是：");
  if (answer) {
    document.getElementById("answers").innerHTML = "你输入的答案：" + answer;
  }
  if (answer === "25"){
    alert("恭喜回答正确！")
  }
  else{
    alert("很遗憾，" + answer + "并不是正确答案，请再思考思考！")
  }
}

function getAnswer(){
  alert("正确答案是：25。");
}

function getHint(){
  var hint = ["每个小方格各代表一个不同的数字。","图形所等于的数字是方格所代表的数字之和。"];
  for(i=0;i<2;i++){
    alert(hint[i])
  }
}
