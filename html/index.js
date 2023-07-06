


 //variables


//  var x ;  // variable declaration
//  x=10; // asignment
//  y = 20 ;   // variable declartion and assignment
//  z=x+y;   // sum of x and y
//  document.write(z);    //30


//  // we can store the differnet types of values in the variable
//    var x ="kishore" ;          //1.string
//    var x = 20;                 //2. number
//     var isPassed = true;       //3.boolean



//     // we can print the values in 2 ways 
//     //1.cosole.log()
//     //2.document.write()

//     var num1 , num2;
//     num1=10;
//     num2 = 20
//     var sum = num1 + num2;
//     //console.log(sum);
//     document.write(sum)


//     //operators
//     //arithmatic operators  + , -, /, %, *
// //  +  addition
//     var x = 10; 
//     var y =20;
//     var sum = x + y;
//     document.write(sum); 
    
    
//     var x = "webla";
//     var y = "kishore";
//     var add = x+y;
//     document.write(add);


//      var x =  30+30+ 30+30+ 30+30+ 30+30 + "kishore";
//      document.write(x);


//      var x = "kishore"
//      document.write(typeof x)

//      var x = 2345678
//      document.write(typeof x)

//      var x =   3 + 4 
//      document.write( typeof x)


//      // variable names are casesensitive

//      var Marks = 200;
//      var Marks = 300;
//      document.write(Marks);


//      // HOISTING


//    let mummy;  // variable declaration

//    mummy = "bollam" // assignment
//    console.log(mummy); //  accessing


//    //variable hoisting rasied because   accessing the variabes before its declaration and initialization
    
// var kishore = "bollam"
// var karthik = "patel"
// var bollam = karthik + kishore


// //string interpolation

// let boss = 10;
// let mass = 15;
// console.log(`sum of boss and mass is ${boss+mass}`)



//     // -   substraction 
//     var x = 10 ;
//      var y =20 ;
//      var sub = x-y;
//      document.write(sub);


//      //  * multiplication
//      var x = 30;
//      var y = 10;
//      var mul = x * y;
//      document.write(mul);

//      //    / division

//      var x = 400;
//      var y = 10;
//      document.write(x/y);

//      //  % 

//      var x = 10;
//      var y = 2;
//      document.write(x/y);





//      //ARRAYS

//     // if we want to store more than one valuein the variable we can use arrays

//     let city ="hyd";  // we can store one value or 

//     let cities = ["hyderabad" , "karimnagar", "manthani"]

//     cities[3]= 'banglore'  //  add one more value
//     console.log(cities);


//     cities[2] = 'chennai'  // over riding
//     console.log(cities)


//     let test = ["hyd" ,'chennai',"manglore" , 1 , 2 ,3 ,["kishore" ,"karthik",1,2 ,3,4]];
//     console.log(test[6][1])
    

//     //OBJECT

//     let car = {
//       brand:"nisson",
//       ccolor:'red',
//       year:2023,
//       serviceDate:["1jan", "30 march"],
//       isPetrol:true,
//       customerAddress:{
//         village:"gangaram",
//         mandal:"kataram",
//         dist:'karimnagar',
//         pincode:505503
//       }
//     }


//     car.brand="verna"
//     console.log(car);
//     console.log(car)
//     console.log(car.customerAddress.mandal);
//     console.log(car.serviceDate);

//     //operators

//     let a = 10;
//     let b = 20;
//     console.log(a=b)   // = is not compariing the variabels its only use to assign the values to the variables like x=10;
//    console.log(a==b);   // true // == is used to compare the values    
//    console.log(10=="10")   //true  // == its only checks the value amd ignores the datatype
//    console.log("ten" == 10)   //false
//    console.log(a === b)   //true   // === is used to compare the values strictly
//   console.log ( "10" === 10)  //false   // it is used compare the values as well as datatypes
//    console.log(  "ten" === "ten")   //true
//   console.log("ten"===10)   // false

//   console.log(10 != 10)   //false   10=10 is true
//   console.log(10 !== 10)  //false   10 == 10 is true



// //&& AND operator
// let c = 10;
// let d = 20;
// let e = 30;
// console.log(e > d && e> c);
//           //T &&    T    = T
//   console.log(e < d && e < c)        
//            //  F   &&  F  = F
// console.log(e>d && c>e)
//           // t   && f  = f
//   console.log(c > e && e>d)
//       //       F && T == T


// // OR operator ||

// console.log(e > d || e < c)
//           // T || F == T
//    console.log(e < d || e < c)
//              // F || F  == F
//     console.log(e>d || e>c)
//             //  T   || F == T
//    console.log(e<d || c<e)
//            //    F || T  == T



  //CONDITIONAL STATEMENTS

  //  let i = 10;
  //  let j=20;
  //  let k = 30;
  //  if(k > i  &&  k > j){          //   if  this condition is true
  //   console.log("k is biggerthen i and j")  // this line will print and reamaining conditions are not exicuted
  //  }else if (k == i &&  k == j){             
  //   console.log("i j  k are equal")
  //  }else if (k  < i && k < j ){
  //   console.log(" k is lessthen i and j")
  //  }else{
  //   console.log("i j k are invalid numbers")
  //  }
  
  // let i = 10;
  // let j=10;
  // let k = 10;
  // if(k > i  &&  k > j){         
  //  console.log("k is biggerthen i and j")  
  // }else if (k == i &&  k == j){          //   if  this condition is true        
  //  console.log("i j  k are equal")       // this line will print and reamaining conditions are not exicuted
  // }else if (k  < i && k < j ){
  //  console.log(" k is lessthen i and j")
  // }else{
  //  console.log("i j k are invalid numbers")
  // }


  
  // let i = 40;
  // let j=30;
  // let k = 10;
  // if(k > i  &&  k > j){         
  //  console.log("k is biggerthen i and j")  
  // }else if (k == i &&  k == j){          
  //  console.log("i j  k are equal")       
  // }else if (k  < i && k < j ){     //   if  this condition is true        
  //  console.log(" k is lessthen i and j")    // this line will print and reamaining conditions are not exicuted
  // }else{
  //  console.log("i j k are invalid numbers")
  // }


  
  // let i = 40;
  // let j=30;
  // let k = 10;
  // if(k > i  &&  k > j){         
  //  console.log("k is biggerthen i and j")  
  // }else if (k == i &&  k == j){          
  //  console.log("i j  k are equal")       
  // }else if (k  < i && k < j ){     
  //  console.log(" k is lessthen i and j")    
  // }else{                               // the above condtions are not satisfied  
  //  console.log("i j k are invalid numbers")  // this else block will be exicuted
  // }


  //SWITCH CASES

 
//  let gender = "o"

//   switch(gender){
//     case "m":
//       console.log("male");
//       break;
//       case "f":
//         console.log("female");
//         break;
//         case "o":
//           console.log("other");   // this line will exicute
//           break;
//           default:
//             console.log("inavalid data")
//   }


//LOOPS

// for(i = 0; i <= 5 ; i++){
//   console.log(i)     // 0 1 2 3 4 5 
// }


//print 1 to 10 numbers

// for (i=1; i <= 10; i++){
//   console.log(i)     
// }

// print even numebrs in 1 to 10

// for(let i = 1 ; i <= 10 ; i++){
//   if(i % 2 == 0){
//     console.log(`${i} is even`)
//   }else{
//     console.log(`${i} is odd`)
//   }
// }
// // output
// 1 is odd
//  2 is even
//  3 is odd
//  4 is even
//  5 is odd
//  6 is even
//  7 is odd
//  8 is even
//  9 is odd
//  10 is even


// print even numbers from 1 to 10

// for(i = 1; i <=10; i++){
//   if(i % 2 == 0){
//    document.write(`${i} is even`)
//   }
// }

// 2 is even
// 4 is even
// 8 is even
// 10 is even


// print odd numbers from 1 to 10

// for(i=1 ; i<=10; i++){
//   if(i%2==1){
//   console.log(`${i} is odd`)
//   }
// }

// 1 i odd
// 3 is odd
//5 is odd
//7 is odd
//9 is odd

// print reverse from 50 to 1

// for(i = 0; i <=5; i++){
//   console.log(5-i)
// } 

// 5 
//4
//3
//2
//1

//NESTED LOOP

// for(let i = 1; i<=5; i++){
//   console.log("main loop");
//   for(j = 1; j<= i; j++){
//     console.log("inner loop")
//   }
// }

//main loop 
//inner loop
//main loop 
//inner loop 2
//main loop 
//inner loop 3
//main loop 
//inner loop 4
//main loop 
//inner loop  5



// for(let i = 1; i<=5; i++){
//   console.log("main loop");
//   for(j = i; j<= i; j++){
//     console.log("inner loop")
//   }
// }


// main loop
// inner loop
// main loop
// inner loop
// main loop
// inner loop
// main loop
// inner loop
// main loop
// inner loop

// for (i = 1; i <= 10; i ++) {
//   let str = "";
//   for (j = 0; j <= i; j ++) {
//     str += "*";
//   }
//   console.log(str);
// }


//FUNCTIONS

// 1 st way to write a function

//  let i =20;
//   let j = 30;
// function add(){
//   console.log(i+j)
// }
// add()    // 50


// 2 nd way to write a function


// let name = function(){
//   console.log("webla");
// }
// name()    // webla


// 3rd way to write a function


// function print(name){
//   console.log(name)
// }
// print("kishore bollam")   // kishore bollam



//  if we didint pass any values when we call the function it will give "undefined"

  // function print(name){
  //   console.log(name)
  // }
 // print()   // undefined

//  let x  = 10 ;
//  let y = 20;
//  function add(){
//   console.log(x + y);
//  }
//  add()  //30

// let x = 30 ;
//  let y = 40;
//  function add(a , b){
//   console.log(a+b);
//  }
//  add(x ,y) // 70

 //x vallue assigned to "a" 
 // x = a = 30;
 //y value assigned to  "b"
 //y = b = 40




 //we can pass the values when the us calling
//  function add(name){
//   console.log(name);
//  }

 //add("kishore bollam")  // kishore bollam

 //CHECK GIVEN NUMBER IS EVEN OR ODD

//  function printEvenOdd(num){
//   if(num % 2 ==0){
//     console.log("given number is even");
//   }else{
//     console.log('given number is odd');
//   }
//  }
//  printEvenOdd(5);   // given number is odd
//  printEvenOdd(2);   // given number is even  


//PRINT ALL THE NUMBERS WHICH WE ARE PASSING AS AN ARGUMENT
//FOR EXPAMPE IF I HAVE PASSED "5"  THE OUT PUT WILL BE "1,2,3,4,5"

// function printAllNumbers(num){
//   for(let x = 1; x <=num; x++){
//     console.log(x)
//   }
// }
// printAllNumbers(5); // 1 , 2,3,4,5
// printAllNumbers(10);  // 1,2 3,4,5 ,6,7,8,9,10



//RETURN KEYWORD

// function add(a , b){   // function declaration
// return a+b;             //  function return
// }
// let sum = add(10, 20);  // assign those a ,b values to the sum
// console.log(sum)  ;       // print the sum value


//PRINT BIGGER VALUES

// function printBigger(a, b){  // function declaration
// if (a>b){                       // codition a is greaterthen b
//   return a;                  // retun a   if a si bigger  it will print "20" and the exicution is stopeed
// } else{                          //else
//   return b ;                   //  return be if the b is bigger it will print "300" and exicution is stopped
// }
// }
// let big = printBigger(20,300) ;
// console.log(big)

//PRINT ALL EVEN NUMBERS THE VALUES PASSED IN THE ARGUMENT

// function printEven(num){
//   for(let x= 1; x<=num; x++){
//     if(x % 2==0){
//       console.log(`${x} is even`);
//     }
//   }
// }
// printEven(10);     // 2 , 4,6,8,10



// const multiply = function(){
//   const num1 = document.getElementById("first_number").value;
//   const num2 = document.getElementById("second-number").value;

//   document.getElementById("result").innerHTML = num1 * num2;
// }

// const divide = function(){
//   const num1 = document.getElementById("first_number").value;
//   const num2 = document.getElementById("second-number").value;

//   document.getElementById("result").innerHTML = num1 / num2;
// }


// // PATTERN PROGRAM

// function pattern(num){
//   for(i=0;1<=num; i++){
//     for(j=1;j<=i;j++){
//      console.log(j);
//     }
//    console.log("<br>")
//   }
// }
// pattern(5);






//STRING METHODS

//1.toLowerCase()    method

//  let name = "KISHORE BOLLAM";
//  let value = name.toLowerCase();
//  console.log(value);
                  //kishore bollam

//2.toUpperCase()    method

// let name = "kishore bollam";
// let value = name.toUpperCase();
// console.log(value)
                    //KISHORE BOLLAM


  //3.length      is not a method

  // let name = "kishore bollam";
  // let value = name.length;
  // console.log(value)    // 14


  //4.concat ()   method

  // let name = "kishore bollam";
  // let concatinated = name.concat("kumar", "" ,"software developer");
  // console.log(concatinated) 
                         //kishore bollamkumar software developer


  //replace()  method


  // let name = "kishore bollam";
  // let replaced=name.replace("bollam" , "kumar");
  // console.log(replaced)   
            //kishore kumar


  //split() method


  // let name = "kishore patel  karthik patel"
  // let splitted = name.split();       // prints like an array
  // console.log(splitted);
                        //['kishore patel  karthik patel']

// let name = "kishore patel  karthik patel"
// let splitted = name.split(" ")      //   add single quotes to each word
// console.log(splitted);
                     //['kishore', 'patel', '', 'karthik', 'patel']

// let name = "kishore patel bollam";
// let splitted = name.split("");    // add single quote to each and every single character
// console.log(splitted)    //(20) ['k', 'i', 's', 'h', 'o', 'r', 'e', ' ', 'p', 'a', 't', 'e', 'l', ' ', 'b', 'o', 'l', 'l', 'a', 'm']
  
            
// let name = "My@nam@e My@ci@ty";
// let splitted = name.split("@");    //separating words after "earthrate"  @ symbol 
// console.log(splitted)      //['My', 'nam', 'e My', 'ci', 'ty']


//REPLACEALL():-
// let _name = "My@nam@e My@ci@ty";
// let replaced = _name.replaceAll("@" ,"");   //replace all the @ symbols in the  given array
// console.log(replaced);                   //Myname Mycity


// let name = "webla";
// console.log(name[2]);  //internally javascript take the name valuw as array like ["w","e","b","l","a"]
                             // b

//charAt():-

// let _name = "webla";
// let char = _name.charAt(2);   // it will print the charcter based on the index position
// console.log(char);             //b

//charCodeAt()  :-

// let _name ="w";
//  let char = _name.charCodeAt();   // it will print the charcter code     in alphabets a-z and A-Z  there is some specific codes charCodeAt()  print the charcter code
//  console.log(char);    // "K" code  is   75
                              // "w code is 119"

// let _str = " webla web world";
// for(let i = 0; i<_str.length; i++){  // it will print each  character
//   console.log(_str.charAt(i));      //webla web world

// }

//print repeated numbers

// let _str ="webla Web world";
// let count = 0;
// for(let i = 0; i<_str.length;i++){
//  if(_str.charAt(i) == "w"){   //  small "w" are 2 in the given string
//   count ++;
//  }
// }

// console.log(count);   

// function pattern(num){
//   for(i=1;i<=num;i++){
//     for(j=1;j<=i;j++){
//       document.write(j);
//     }
//     document.write("<br>")
//   }
// }
// pattern(15) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910
// 1234567891011
// 123456789101112
// 12345678910111213
// 1234567891011121314
// 123456789101112131415

//PATTERN PROGRAM

// function pattern(num){
//   for(i=1;i<=num;i++){
//     for(j=1;j<=i;j++){
//       document.write(" ","*");
//     }
//     document.write("<br>")
//   }
// }
// pattern(15) 

// //*
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * * *
// * * * * * * * * * * * *
// * * * * * * * * * * * * *
// * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * *


// let students = [
//   {
//   name:"webla1",
//   isPassed:true
//   },
//   {
//     name:"webla2",
//   isPassed:false
//   },
//   {
//     name:"webla3",
//   isPassed:true
//   },
//   {
//     name:"webla4",
//   isPassed:true
//   }
// ]
// let passedStudents = students.filter((item)=>{
//  if(item.isPassed){
//   return item
//  }
// })
// console.log(passedStudents)   //(3) [{…}, {…}, {…}]
//                                //0: {name: 'webla1', isPassed: true}
//                                //1: {name: 'webla3', isPassed: true}
//                                //2: {name: 'webla4', isPassed: true}
//                                //length: 3[[Prototype]]: Array(0)
        



// let students = [
//   {
//   name:"webla1",
//   isPassed:true
//   },
//   {
//     name:"webla2",
//   isPassed:false
//   },
//   {
//     name:"webla3",
//   isPassed:true
//   },
//   {
//     name:"webla4",
//   isPassed:true
//   }
// ]
// let passedStudents = students.filter((item)=>{
 
//   return students
 
// })
// console.log(passedStudents) ;

//map
//  let arr = [1,2,3,4,5,6]
//  let newArr = []
//  for (i = 0 ; i<=arr.length;i++){
//   newArr.push(arr[i]*2);
//  }
//  console.log(newArr)   //(7) [2, 4, 6, 8, 10, 12, NaN]


// let arr = [1,2,3,4,5]
// let newArr = arr.map((item) =>{
//   return item*2;
// })
// console.log(newArr)   //(5) [2, 4, 6, 8, 10]


// let arr = [36,37,38,39];
 

// for(i = 0; i<=arr.length;i++){
//   if(arr >= 35){
//     console.log("passed")
//   }else{
//     console.log("fail")
//   }
// }

// let container = document.getElementById('container');
// let imgElement = document.createElement("img");
// imgElement.src ="https://th.bing.com/th/id/R.cfaa46c0584fbd5e3f627dabb91b504f?rik=qCODl2CQZxXEww&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f06%2f1843513.jpg&ehk=l70aqpp3C2AnDAYHu849MMnZkwMFChBKORNw5Uacveo%3d&risl=&pid=ImgRaw&r=0";
// container.appendChild(imgElement);



// let listContainer = document.getElementById("container");

// let listElement = document.createElement("ul")

// let item = document.createElement('li')
// item.innerText="webla";
// listContainer.appendChild(listElement)
// item.appendChild(item)