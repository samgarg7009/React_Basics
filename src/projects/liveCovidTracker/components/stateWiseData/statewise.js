import React, { useEffect } from "react";

const Statewise = () => {

  const getCovidData = async ()=>{
    //async / await is to simplify the syntax necessary to consume promise-based APIs.
    //Async functions always return a promise
    const res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    //as this is asynchronous we have to wait for the data so fetch can be in pending state or resolved

    //now convert tthis res into proper javascript object
    const actualData = await res.json();
    //res.json() also returns a promise so await is used
    console.log(actualData.statewise);
  }

  useEffect(()=>{
    getCovidData();
  },[]);
  return (
    <>

      <h1>India Covid 19 Dashboard</h1>
    </>
  );
};

export default Statewise;
