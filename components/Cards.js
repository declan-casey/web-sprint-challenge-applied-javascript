// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) => {
    const objData =res.data.articles;
    const wholeCard = document.querySelector(".cards-container");
    console.log(objData);
    for (const key in objData) {
        Array.from(objData[key]).forEach(element => {
            console.log(element);
            wholeCard.appendChild(cardMaker(element));
        })
        
    }
    console.log(objData);
})


.catch((problem) => {
  console.log(problem);
})

function cardMaker(obj){
    const card = document.createElement("div");
    const headliner = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorsName = document.createElement("span");


    headliner.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorsName.textContent = obj.authorName;

    card.appendChild(headliner);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName);

    card.classList.add("card");
    headliner.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    card.addEventListener("click",() => {
        console.log(obj.headline)
    })

    return card;
}


// const getData = [
    //       objData.articles.bootstrap,
    //        objData.articles.javascript, 
    //        objData.articles.jquery, 
    //        objData.aticles.node.js, 
    //        objData.articles.technology
    //     ];
    //     const cardContainer = document.querySelector(".cards-container");
    //   getData.forEach((item) => {
    //     item.forEach((i) => {
    //         cardContainer.appendChild(cardMaker(i));
    //     })
    //   })
    //   console.log(getData);
    //   console.log(objData);