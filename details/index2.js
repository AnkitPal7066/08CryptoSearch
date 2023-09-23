async function getSearch(){
    const searchValue = document.getElementById("search").value;
    const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchValue}`);
    const data = await res.json();
    PrintCoin(data);
}

async function PrintCoin(data){
    const coins = data.coins;
    coins.map((ele)=>{
        // console.log(ele)
        
        const oneCont = document.createElement("div");
        oneCont.classList.add("oneCont")
        oneCont.innerHTML = "";
        const coinId = ele.id;
        console.log(coinId);
        oneCont.innerHTML = `
        <div class="imgCont"><img id="btcImg" src="${ele.large}" alt=""></div>
        <a href="../fullDetails/index3.html?valueToSend=${coinId}">
        <h2 class="mainName">${ele.name} <span class="coinSymbol">(${ele.symbol})</span></h2></a>
        `;
        const searchResults = document.querySelector(".searchResults");
        searchResults.appendChild(oneCont);
})
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getSearch);

const mainPage = document.getElementById("name");
mainPage.addEventListener("click", function(){
    window.location.href = "../index.html"
});

const debouncedSearch = debounce(getSearch, 500);

const searching = document.getElementById("search");
searching.addEventListener("keyup", () =>{
    const searchResults = document.querySelector(".searchResults");
    searchResults.innerHTML = "";
    debouncedSearch();
});

function debounce(func, delay){
    let timeoutId;
    return function(){
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        func.apply(context, args);
      }, delay);
    };
   }
   window.onload = function () {
    const searchInput = document.getElementById("search");
    searchInput.focus(); // Focus on the input element
};
