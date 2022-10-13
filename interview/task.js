// Print from 1 to 10 every 1 sec.

const byTimeOut = () => {
  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 500);
  }
};
// byTimeOut();

const bySetInterval = () => {
  let i = 0;
  const delayPrint = () => {
    i++;
    console.log(i);
    if (i > 9) {
      clearInterval(interval);
    }
  };
  const interval = setInterval(delayPrint, 500);
};
// bySetInterval();

const byPromises = (time) => {
    
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  for (let i = 1; i < 11; i++) {
    delay(500).then(() => console.log(i))
    }
};

byPromises(500);

// const byPromises = async () => {
    
//     const delay = async (time) => new Promise((resolve) => setTimeout(resolve, time));
    
//       for (let i = 1; i < 11; i++) {
//         await delay(500);
//         console.log(i);
//       }
//     };
