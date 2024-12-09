const adviceSlip = document.getElementById("randomAdvice");

//Simple Fetch request

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
  );
