//document.write("Testing");
// document.getElementById('th')

//Decalering Varialbles
var a1 = 5;
var xyz = 'Hoee';

document.write(a1+xyz,"</br>");
console.log("This is printed in console");

var name = prompt("Nav sang?");
alert("Hello "+name);
document.write("Hello ",name,"</br>");

document.write("5 + 9 = ", 5+9 ,"</br>");
document.write("5 - 9 = ", 5-9 ,"</br>");
document.write("5 * 9 = ", 5*9 ,"</br>");
document.write("5 / 9 = ", 5/9 ,"</br>");
document.write("5 % 9 = ", 5%9 ,"</br>");


var foodcost = prompt("What is total food cost?");
var nofrnds = prompt("How many people are you");
document.write("Total Food cost is ", foodcost ,"Rs</br>");
document.write("Each one have to pay ", (foodcost/nofrnds).toFixed(2),"Rs");


document.write("2 raise to 3 is ", Math.pow(2,3),"</br>");
document.write("abs(-34) is ", Math.abs(34),"</br>");

document.write("The Square root of 25 is ", Math.sqrt(25),"</br>");
 // There are more math functions Google it


 var str1 = "Tnmy";
document.write(str1);
document.write(str1.indexOf("my"),"<br>");
document.write(str1.slice(0,4),"</br>");
document.write(str1.replace("Tnmy","Tanmay"),"</br>");
document.write(str1.toUpperCase(),"</br>");
document.write(str1.toLowerCase(),"</br>");
//There are more JS string functions





//Logic.....................

var age = prompt("Age?");
if(age < 20){
    document.write("Less 20");
}
else if (age == 20 || age != 25) {
    document.write("Hello 20 yrs old person")
} else {
    document.write("Hello Uncle");
}




var age = prompt("Age?");
switch (age) {
    case "22":
        document.write("22 yrs")
        break;

        case "21":
            document.write("21 yrs")
            break;

            case "23":
                document.write("23 yrs")
                break;

    default:
        document.write("Other")
        break;
}





var i = 1;
while(i<100){
    i++ ;
    document.write(i,"</br>")
    
}

var i = 1;
do{
    i++ ;
    document.write(i,"</br>");
    
}while(i<100)



for (var i=0; i<100; i++){
    document.write(i,"</br>");
}



var alpa = ["a","b","c"]
document.write(alpa[2]);

function tnmy(){
    document.write("Tanmay");
    console.log("smarty_tnmy");
}

tnmy();
