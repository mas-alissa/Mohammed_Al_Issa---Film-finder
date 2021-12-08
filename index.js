//container
let container = document.getElementById("container");


//types of search with radio buttons
let newMovies = document.getElementById("newMovies");
let Avenger = document.getElementById("Avenger");
let XMen = document.getElementById("X-Men");
let Princess = document.getElementById("Princess");
let Batman = document.getElementById("Batman");



let fullArray = movies; // this is just to save movies from another js file to fullArray as variable




//this is the correct way to use element 
document.addEventListener("DOMContentLoaded", function () {
    const x = fullArray.map(item => {
        const img = document.createElement("img");
        img.src = item.Poster
        const a = document.createElement("a");
        a.appendChild(img);
        a.target = "_blank"
       a.href = `http://www.imdb.com/title/${item.imdbID}`
        container.appendChild(a)
    })
});
let filter = document.querySelectorAll(".filter")
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function () {
        search.disabled = true; // to disable search field
        switch (this.value) { // to check if the radio button value is one of types of search movies.
            case "newMovies":
                container.innerHTML = "";
                let newMoviesArray = fullArray.filter(movie => movie.Year >= 2014);
               newMoviesArray.map(item => {
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })
                break;
            case "Avenger":
                container.innerHTML = "";
                let avengerArray = fullArray.filter(movie => movie.Title.includes("Avenger"));
                avengerArray.map(item => {
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })
                break;
            case "X-Men":
                container.innerHTML = "";
                let XMenArray = fullArray.filter(movie => movie.Title.includes("X-Men"));
                XMenArray.map(item => {
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })
                break;
            case "Princess":
                container.innerHTML = "";
                let princessArray = fullArray.filter(movie => movie.Title.includes("Princess"));
                princessArray.map(item => {
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })
                break;
            case "Batman":
                container.innerHTML = "";
                let batmanArray = fullArray.filter(movie => movie.Title.includes("Batman"));
                batmanArray.map(item => {
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })
                break;
            default: container.innerHTML = "";


               fullArray.map(item => {
                    
                    const img = document.createElement("img");
                    img.src = item.Poster
                    const a = document.createElement("a");
                    a.appendChild(img)
                    a.target = "_blank";
                    a.href = `http://www.imdb.com/title/${item.imdbID}`
                    container.appendChild(a)
                })           
        }
    })
}




let searchByTitle = document.getElementById("searchByTitle");

searchByTitle.addEventListener("click", function () { // to make search field able
    if (searchByTitle.checked === true) {
        search.disabled = false
    }
})

let search = document.getElementById("search");

search.addEventListener("keyup", function (e) {
    if(e.key === "Enter"){
        container.innerHTML = "";
   
    let filteredArray = fullArray.filter(item => item.Title.toUpperCase().indexOf(search.value.toUpperCase()) > -1)


    if (search.value.length > 0) {


        filteredArray.map(item => {
                    
            const img = document.createElement("img");
            img.src = item.Poster
            const a = document.createElement("a");
            a.appendChild(img)
            a.target = "_blank";
            a.href = `http://www.imdb.com/title/${item.imdbID}`
            container.appendChild(a)
        }) 
    } else if(search.value.length == 0) {
       const newDiv = document.createElement("div");
       newDiv.classList.add("noMovie")
       newDiv.innerHTML ="You must put name of the movie to search for it ..."
       container.appendChild(newDiv) 
    } 
}
})
