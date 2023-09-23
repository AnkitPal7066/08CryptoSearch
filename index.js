let btcToInr;

async function btcPrice(){
    const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr";
    const response = await fetch(api);
    const data = await response.json();
    btcToInr = data.bitcoin.inr;
    topCoins();
}

async function topCoins(){
    const topCoinApi = "https://api.coingecko.com/api/v3/search/trending";
    const response = await fetch(topCoinApi);
    const data = await response.json();
    const dataCoins = data.coins;
    // console.log(dataCoins);
    dataCoins.map((ele)=>{
        const name = ele.item;
        const price = Math.round(name.price_btc * btcToInr * 10000) / 10000;
        // console.log(price);
        const oneCoin = document.createElement("div");
        oneCoin.classList.add("oneCoin");
        oneCoin.innerHTML = `
            <div class="imgDiv"><img src="${name.thumb}" alt=""></div>
            <div class="cointext">
                <h1 class="nameCoin">${name.name} (<span>${name.symbol}</span>)</h1>
                <h3 class="price">${price}</h3>
            </div>
        `
        const topList = document.getElementById("topCoins");
        topList.appendChild(oneCoin);
    })
}

window.onload = function () {
    btcPrice();
};

const myInput = document.querySelector(".myInput");

myInput.addEventListener("click", function() {
    window.location.href = `./details/index2.html`
});
