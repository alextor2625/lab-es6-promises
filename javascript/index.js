// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));

/*
Using nested callbacks print the cooking steps to make Mashed Potatoes in the correct order. Write your JavaScript in the provided javascript/index.js file
*/

// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        })
      })
    })
  }) 

});

/*
Using promises and the then() statement print the directions to display the cooking instruction for the Stake in the correct order. This time, you will have to call the function obtainInstruction which returns a pending Promise.
*/
// Iteration 2 - using promises and method chaining
obtainInstruction('steak', 0)//no return here b/c we are attaching .then method to the function
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`//0
       return obtainInstruction('steak', 1)//returning the function call; make the value accessible to the next .then method
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`//1
        return obtainInstruction('steak', 2)

  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`//2
        return obtainInstruction('steak', 3)

  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`//3
        return obtainInstruction('steak', 4)

  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`//4
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  })

  
  



// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0)

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`


    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`

  } catch (error) {
    console.log(error);
  }
}
makeBroccoli()


// Bonus 2 - Promise all
// ...

async function makeBrusselsSprouts(){
  let step0 = obtainInstruction('brusselsSprouts', 0);//define the promises
  let step1 = obtainInstruction('brusselsSprouts', 1);
  let step2 = obtainInstruction('brusselsSprouts', 2);
  let step3 = obtainInstruction('brusselsSprouts', 3);
  let step4 = obtainInstruction('brusselsSprouts', 4);
  let step5 = obtainInstruction('brusselsSprouts', 5);
  let step6 = obtainInstruction('brusselsSprouts', 6);
  let step7 = obtainInstruction('brusselsSprouts', 7);

  let results = await Promise.all([step0, step1, step2, step3, step4, step5, step6, step7]) //argument for Promise.all method is an array of promises
  console.log(results);

  document.getElementById('brusselsSprouts').innerHTML += `
  <li>${results[0]}</li>
  <li>${results[1]}</li>
  <li>${results[2]}</li>
  <li>${results[3]}</li>
  <li>${results[4]}</li>
  <li>${results[5]}</li>
  <li>${results[6]}</li>
  <li>${results[7]}</li>
  `
}

makeBrusselsSprouts();