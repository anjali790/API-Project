const inputClass = document.querySelector('.input');
const buttonClass = document.querySelector('.btn');
const container = document.querySelector('.container');
var q = ""

inputClass.addEventListener("change", () => {
    q = inputClass.value
    console.log(q)

})
buttonClass.addEventListener('click', function (event) {
    container.innerHTML = ""

    // fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-26&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f`)
       fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-28&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f`)
        .then(result => result.json())
        .then(data => {
            let articles = data["articles"]
            //   console.log(data)

            for (let i = 0; i < articles.length; i++) {
                let article = articles[i]
                console.log(article)
                let html = `<div>
                <h1>${article["title"]}</h1>
                <img src=${article["urlToImage"]}>
                <p>${article["author"]}</p>
                <p>${article["description"]}<a href=${article["url"]}>Read more</a> </p>
                </div>`

                container.innerHTML += html
            }
        })
        .catch(err => alert("error"))
})