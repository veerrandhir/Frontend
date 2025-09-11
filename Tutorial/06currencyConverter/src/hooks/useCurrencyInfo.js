import { data } from "autoprefixer";
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // useEffect always takse 1 call back fn and a dependendency when it see any change in dependency it call fn

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      //Gives us chaining so we can use .then as much
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])); // we call api and this custom hook will give us a result
    console.log(data);
  }, [currency]);
  return data; // we directly return data from this custom hook
}

export default useCurrencyInfo;
