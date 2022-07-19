//呈現字串
document.write("安安"); 

//字串
"早"

//數字
5428.444

//布林值
true
false

//變數
//只能是數字或英文(大小寫均可)或_或$的組合
//開頭不可是數字
var my_name = "Shawn";
document.write(my_name);
document.write("</br>");
var my_age = 20;
document.write(my_age);
document.write("</br>");
var is_male = true;
document.write(is_male);
document.write("</br>");
document.write(my_name + ":說早安妳各位的");
document.write("</br>")
my_name = "正妹"
document.write(my_name + ":早安");

//字串寫法及用法
var phrase = "hello \"World";
//            012345 67891011
document.write(phrase.charAt(7));
document.write("</br>");
document.write(phrase.indexOf("W"));
document.write("</br>");
document.write(phrase.indexOf("M"));
document.write("</br>");
var text = "ahahaha";
document.write(phrase + text);
document.write("</br>");
document.write(phrase + text.length);
document.write("</br>");
document.write(phrase.toUpperCase());
document.write("</br>");
document.write(phrase.toLowerCase());
document.write("</br>");
document.write(phrase.substring(4,11));
document.write("</br>");
//數字用法
var number = 5
document.write((58+42)*number);
document.write("</br>");
//+-*/加減乘除
document.write(100%7);
document.write("</br>");
//%=取餘數
document.write(Math.abs(-888-112));
document.write("</br>");
//Math.abs取絕對值
document.write(Math.max(-888,-112,-5454,-99999,-8,number));
document.write("</br>");
//Math.max取最大值
document.write(Math.min(-888,-112,-5454,-99999,-8,number));
document.write("</br>");
//Math.min取最小值
document.write(Math.round(-9.8));
document.write("</br>");
//Math.round四捨五入
document.write(Math.pow(-8,5));
document.write("</br>");
//Math.pow做次方
document.write(Math.sqrt(36));
document.write("</br>");
//Math.sqrt開根號
document.write(Math.round(Math.random()*10));
document.write("</br>");
//Math.random從數字0-1隨機傳數

//製作一個基本計算機
// var num1 = prompt("請輸入數字1");
// var num2 = prompt("請輸入數字2");
// num1=parseFloat(num1);
// num2=parseFloat(num2);
// document.write(Math.pow(num1,num2)*num1+Math.sqrt(Math.pow(num1,8))*num2);
//parseInt將字串之整數為值轉為"數字"
//parseFloat將字串之數字完整轉為"數字"

//陣列 array
var test = [true,888,"早安",100];
test[3] = 90;
document.write(test[0]);
document.write("</br>");
document.write(test.length);
document.write("</br>");

//函式 function
function hello(){
    document.write("哈囉");
}

hello();