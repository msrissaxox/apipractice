const adviceSlip = document.getElementById("randomAdvice");
const btn = document.getElementById('btn');

//Simple Fetch request
const newQuote = function (){
fetch(`https://api.adviceslip.com/advice`)
  //getting json here
  .then((response) => response.json())
  //retrieving the data here
  .then((data) => {
    const advice = data.slip.advice;
    console.log(advice);
    adviceSlip.innerText = advice;
  })
  .catch(
    (error) => {
      console.error("Error fetching data:", error);
    }
    //ERROR HANDLING HAPPENS HERE
  )
};
