const printHello = () => {
  console.log("Hello")
};

const executeAfterDelay = (callback, time) =>{
  setTimeout(callback, time*1000)

};

executeAfterDelay(printHello, 3)