function start(){
    const searchItem = document.querySelector("#searchBox").value;
    const url = `https://restcountries.com/v3.1/name/${searchItem}`;
    fetch(url)
    .then(res => res.json())
    // .then(data=>console.log(data))
    .then(data => process(data));
}

function process(data) {
    var oldContent = document.querySelector(".content");
    oldContent.textContent = ""; 

    for (var a = 0; a < data.length; a++) {
        var country = data[a]; // Each country object

        var newDiv = document.createElement("div");
        newDiv.classList.add("innerStyle");
        var btnDiv = document.createElement("div");
        btnDiv.classList.add("btnStyle");
        const btn = document.createElement("button");
        btn.classList.add("more-dtls");
        btn.textContent="more details";
        newDiv.innerHTML = `<h1>Country:${country.name.common} </h1><br>
                            <h1>Capital : ${country.capital}</h1><br>
                            <h1>Population : ${country.population}</h1><br>
                            <div class="flag"><img src="${country.flags.png}" alt="Flag of ${country.name.common}"></div> <br>
                            `;
        oldContent.appendChild(newDiv);
        newDiv.appendChild(btnDiv);
        btnDiv.appendChild(btn);
        btn.addEventListener("click",(data)=>{
            newDiv.innerHTML = `<h1>Country:${country.name.common} 
                            </h1><br>
                            <h1>Capital : ${country.capital}</h1><br>
                            <h1>Population : ${country.population}</h1><br>
                            <div class="flag"><img src="${country.flags.png}" alt="Flag of ${country.name.common}"></div> <br>
                            <h1>official : ${country.name.official}</h1><br>
                            <h1>region : ${country.region}</h1><br>
                            <h1>subregion : ${country.subregion}</h1><br>
                            <h1>Maps : ${country.maps.googleMaps}</h1><br>
                            <h1>coatOfArms :<img src="${country.coatOfArms.png}"></h1></div> <br>
                            `;
        });  

    }                      
}
