let counter = 0;

const increment = () => {
  counter += 0.5;
  console.log(counter);
};

setInterval(increment, 500);