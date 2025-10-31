 // loop for
//  for (let n= 100; n>1; n--) {
//             console.log("number", n);
//          }
//         for ( let n=1; n<10; n++){
//             console.log("number",n);

//         }
//         for ( let n=1; n<10; n++){
//             console.log("number",n);

        
        // for ( let n=1; n<=10; n++){
        //     console.log("2 x"+n+"=",n*2);

        // }

        //  let m = 100 
        //  let a = 3
        //  for  (let n=0; n<=m; n++){
        //      console.log(n + "x" +a+ "=", n*a);
        //  }

        //   let m = 100 
        //   let a = prompt("Enter the number you want see it is multiplication table");
        //   a = parseInt(a);
        //   for  (let n=0; n<=m; n++){
        //      console.log(n + "x" +a+ "=", n*a);
        //   }

//         let a = prompt("Enter a number");
// if (a % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }
           
        // for ( let n=1; n<10; n++){
        //       console.log(n);
        //     if (n === 6){
        //         console.log("number", n);
        //         break;
        //     }
        // }
        // for ( let n=1; n<10; n++){
        //       console.log(n);
        //     if (n === 6){
        //         console.log("number", n);
        //         continue;
        //     }
        // }
        // let i = 1;
        // while(i<10){
        //     console.log(i);
        //     i ++;
        // }
        // let n =10;
        // do {
        //     console.log(n)
        //     n ++;
        // }
        // while(n<100);
        
        // let num = 5;
        // for (let i=1; i<=10; i++){
        //     console.log(nmu "x" +i)
        // }
        //Make a propram that will check all numbers that are divided by 3 
//  and display even number

//     let sum = 0;

// for (let i = 1; i <100; i++) {
//     if (i % 3 ===0 )
//         if(i%2===0) { 
        
//       console.log(`${i}- even`);
//         }
    




        // loop while

//         let continueCalc = true;

// while (continueCalc) {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let operator = prompt("Enter the operator (+, -, *, /, %):");
//     let num2 = parseFloat(prompt("Enter the second number:"));

//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             alert("Division by zero is not allowed!");
//             continue;
//         }
//     } else if (operator === '%') {
//         result = num1 % num2;
//     } else {
//         alert("Invalid operator!");
//         continue;
//     }

//     let parity = (result % 2 === 0) ? "Even" : "Odd";
//     alert("Result = " + result + "\nThe number is " + parity);

//     continueCalc = confirm("Do you want to perform another calculation?");
// }

// alert("Program ended. Thank you for using the calculator!");
 
// let a=prompt("enter number");;
// let result=1; 
// for(let i =a; i>0;i--){
// result =result *i;
// console.log("factorial is=",result);
// }
 let num1 =0;
 let sum=0;
 let count=0
  let avarege;
 for(let i=10;i<=90;i++){
  // console.log(num1)
  if(i%2===0){
  sum +=i;
  count ++;
  }
  avarege=sum/count;
 }
  console.log("avarege",avarege);


 
