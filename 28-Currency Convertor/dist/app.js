let amountMoney = document.querySelector(".amountMoney");
let fromMoney = document.querySelector(".fromMoney");
let toMoney = document.querySelector(".toMoney");

const getRate = async (fromCurrency, toCUrrency) => {
  let requestURL = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCUrrency}`;
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  let response;
  request.onload = function () {
    response = request.response;
    return response;
  };
  console.log(response);
};

getRate("USD", "EURO");
