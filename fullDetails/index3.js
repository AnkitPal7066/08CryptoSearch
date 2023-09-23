
async function Details(){
    const urlParams = new URLSearchParams(window.location.search);
    const receivedValue = urlParams.get('valueToSend');
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${receivedValue}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
      const data = await res.json();
      printDetail(data);
}

async function printDetail(data){
    console.log(data);
    document.querySelector(".image").src = data.image.large;
    document.querySelector(".name").innerHTML = `${data.name} (${data.symbol})`
    document.querySelector(".price").innerHTML = `${data.market_data.current_price.usd} US Dollar (${data.market_data.current_price.inr} INR)`;
    document.querySelector(".marketC").innerHTML = `Market cap rank: ${data.market_cap_rank}`
    document.querySelector(".descrip").innerHTML = `${data.description.en}`;
}

window.onload = function(){
    Details();
}  

const mainPage = document.getElementById("name");
mainPage.addEventListener("click", function(){
    window.location.href = "../index.html"
});