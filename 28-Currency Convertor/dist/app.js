let amountMoney = document.querySelector(".amountMoney");
let fromMoney = document.querySelector(".fromMoney");
let toMoney = document.querySelector(".toMoney");

const getRate = async (fromCurrency, toCUrrency) => {
  let response = await fetch("https://api.exchangerate.host/latest");
  console.log(response.data);
};

getRate("USD,EURO");
