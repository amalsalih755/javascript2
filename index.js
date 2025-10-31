// let a=prompt("Select the product");
// let price=2000;
// if(a===a){
//   console.log("comouter")
// }
//    elase("phone"){

//    }
// switch(a){
//   case "electronics":
//      let check;
//     switch(electronics){
//      case "computer":
//       check=computer;
//       break;
//       case "phone":
//         check=phone;
//         break;
//         case "laptop":
//           check=laptop;
//           break;
          // console.log(a,+price)
    

// console.log("hello consle");
/// let declation

// let name = "amal";
// let lastName =("salih")
// console.log(name + lastName);

// var declation

// var age = 20 ;
// age = 25 ;
// console.log("my age :",+ age + "years", name + lastName);


 
// const math = 3.14;
// console.log(math);

// math =2.0;




// console.log(math)
// boolain
// let option = true ;
// console.log(option)
// console.log typeof
// console.log(typeof option)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof lastName)
// console.log(typeof math)

// oprator 


// let x =10;
//  y =4;
//  console.log( x+y);
//  console.log(x-y);
//  console.log(x*y);
//  console.log(x/y);
//  console.log(x%y);

//  let z = x+y;
//  console.log(z);

 // increment
    // x++;
    // console.log(x);

    // decrement
    // y--;
    // console.log(y);

    // comparison oprator
    // console.log(x==y);
    // console.log(x!=y);
    // console.log(x>y);
    // console.log(x<y);
    // console.log(x>=y);
    // console.log(x<=y);
    // console.log(x===y);
    // console.log(x!==y);

    // logical oprator
    // console.log(x>5 && y<5);
    // console.log(x>5 || y<5);
    // console.log(!(x>5 && y<5));

    // conditional statement
    // let time = 10;
    // if (time < 12) {
    //     console.log("good morning");
        
    // } else if (time < 18) {
    //     console.log("good afternoon");
        
    // } else {
    //     console.log("good evening");
        
    // }

    // switch statement
    
//     do {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//   let num1 = prompt("Enter the first number:");
//   if (num1 === null) {
//     console.log("Program cancelled by user ");
//     break;
//   }
//   num1 = parseFloat(num1);

//   let operator = prompt("Enter the operator (+, -, *, /, %):");
//   if (operator === null) {
//     console.log("Program cancelled by user ");
//     break;
//   }

//   let num2 = prompt("Enter the second number:");
//   if (num2 === null) {
//     console.log("Program cancelled by user ");
//     break;
//   }
//   num2 = parseFloat(num2);

//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       if (num2 !== 0) result = num1 / num2;
//       else {
//         console.log(" Division by zero is not allowed!");
//         continue;
//       }
//       break;
//     case '%':
//       result = num1 % num2;
//       break;
//     default:
//       console.log(" Invalid operator! Try again.");
//       continue;
//   }

//   if (isNaN(result)) {
//     console.log(" Invalid input! Please enter valid numbers.");
//     continue;
//   }

//   let parity = (result % 2 === 0) ? "Even" : "Odd";

//   console.log("Result = " + result + " | Parity = " + parity);
//   console.log("---------------------------");

// } while (confirm("Do you want to perform another calculation?"));

// console.log("Program ended. Thank you for using the calculator! ");
let item = prompt("electronic, clothe, food");
let product;
let price;
switch(item){
  case "electronic":
    let electronic =prompt("computer, phone, screen")
    switch(electronic){
      case "computer":
        console.log('price=', + 200);
        break;
         case "phone":
        console.log('price=', + 180);
        break;
         case "screen":
        console.log('price=', + 300);
        break;
    }
    break;
    case " clothe":
    let clothe=prompt("scarf, jeans, T-shirt")
    switch(electronic){
      case "scarf":
        console.log('price=', + 100);
        break;
         case "jeans":
        console.log('price=', + 150);
        break;
         case "T-shirt":
        console.log('price=', + 200);
        break;
    }
    break;
    case "food":
    let  food=prompt("pizaa, chicken,sald")
    switch(electronic){
      case "pizaa":
        console.log('price=', + 300);
        break;
         case "chicken":
        console.log('price=', + 400);
        break;
         case "sald":
        console.log('price=', + 200);
        break;
    }
    break;
    
}


