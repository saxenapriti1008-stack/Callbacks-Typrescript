
/*1) Hello Callback:- 
//Write a function that takes a callback and calls it with 'Hello from callback!'. 

const sayHello = (displayMessage : any)  => {
  const message = "Hello from callback!";
  displayMessage(message);

};

const displayMessage = (message : string) => {
  console.log(message);
};

sayHello(displayMessage);*/



/*2) Delayed Greeting 
//Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 

const sayHelloLater = (displayMessage :any) => {
  setTimeout(() => {
    const message = "Hi, I am late!";
    displayMessage(message);
  }, 2000);
};

const displayMessage = (message : string) => {
  console.log(message);
};

sayHelloLater(displayMessage);*/


/*3) Math Callback 
//Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback.

const addNumbers = (num1 : number, num2 : number, displayResult : any) => {
  const result = num1 + num2;
  displayResult(result);
};

const displayResult = (result : any) => {
  console.log(result);
};

addNumbers(5, 3, displayResult);*/


/*4) Uppercase Callback 
//Write a function that takes a string and a callback. The callback should return the string in uppercase. 

const convertToUpperCase = (text : any, displayText : any) => {
  const result = text.toUpperCase();
  displayText(result);
};

const displayText = (text : any) => {
  console.log(text);
};

convertToUpperCase("hello", displayText);*/

/*5) Pizza Order 
//Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'.

const orderPizza = (displayStatus : any) => {
  console.log("Order placed...");

  setTimeout(() => {
    const status = "Your pizza is ready!";
    displayStatus(status);
  }, 3000);
};

const displayStatus = (status : any) => {
  console.log(status);
};

orderPizza(displayStatus);*/

/*6) Multiple Messages 
//Make a function that takes a callback and calls it three times with different messages. 

const sendMessages = (displayMessage : any) => {
  displayMessage("First message");
  displayMessage("Second message");
  displayMessage("Third message");
};

const displayMessage = (message : any) => {
  console.log(message);
};

sendMessages(displayMessage);*/

//7) Download Simulation 
//Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 

const downloadData = (url : string, displayResult : any) => {
  console.log("Downloading...");

  setTimeout(() => {
    const data = `Downloaded data from ${url}`;
    displayResult(data);
  }, 2000);
};

const displayResult = (data : any) => {
  console.log(data);
};

downloadData("https://example.com", displayResult);







