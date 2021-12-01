//container
let container = document.getElementById("container");


//types of search with radio buttons
let newMovies = document.getElementById("newMovies");
let Avenger = document.getElementById("Avenger");
let XMen = document.getElementById("X-Men");
let Princess = document.getElementById("Princess");
let Batman = document.getElementById("Batman");



let fullArray = movies; // this is just to save movies from another js file to fullArray as variable





document.addEventListener("DOMContentLoaded", function () {


    container.innerHTML = `<div class="flex-box">${fullArray.map(movie => `
    <div>

<a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
</div>
    `)}</div>`;

});


let filter = document.querySelectorAll(".filter")

for (let i = 0; i < filter.length; i++) {

    filter[i].addEventListener("click", function () {

        search.disabled = true; // to disable search field

        switch (this.value) { // to check if the radio button value is one of types of search movies.
            case "newMovies":
                container.innerHTML = "";
                let newMoviesArray = fullArray.filter(movie => movie.Year >= 2014);

                container.innerHTML = `<div class="flex-box">${newMoviesArray.map(movie => `
                                              
                                                 
                                                 <div>
                                              
                                                <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                                                </div>
                                                
                                           
                                                `)}</div>`
                break;
            case "Avenger":
                container.innerHTML = "";
                let avengerArray = fullArray.filter(movie => movie.Title.includes("Avenger"));

                container.innerHTML = `<div class="flex-box">${avengerArray.map(movie => `
                                
                                 <div>
                              
                                 <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                                 </div>
                                
                                 `)}</div>`;
                break;

            case "X-Men":
                container.innerHTML = "";
                let XMenArray = fullArray.filter(movie => movie.Title.includes("X-Men"));

                container.innerHTML = `<div class="flex-box">${XMenArray.map(movie => `
                            
                             
                             <div>
                        
                             <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                             </div>
                             
                            
                             `)}</div>`;
                break;
            case "Princess":
                container.innerHTML = "";
                let princessArray = fullArray.filter(movie => movie.Title.includes("Princess"));

                container.innerHTML = `<div class="flex-box">${princessArray.map(movie => `
                                
                                 <div>
                           
                                 <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                                 </div>
                                
                                 `)}</div>`;
                break;
            case "Batman":
                container.innerHTML = "";
                let batmanArray = fullArray.filter(movie => movie.Title.includes("Batman"));

                container.innerHTML = `<div class="flex-box">${batmanArray.map(movie => `
                                                    
                                                     
                                                     <div>
                                                 
                                                     <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                                                     </div>
                                                    
                                                     `)}</div>`;
                break;
            default: container.innerHTML = "";
                let allArray = fullArray.filter(movie => movie.Title.includes("all"));

                container.innerHTML = `<div class="flex-box">${fullArray.map(movie => `
                            
                             <div>
                             <h2>${movie.Title}</h2>
                             <h4>${movie.Year}</h4>
                             <h4>${movie.Type}</h4>
                             <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                             </div>
                            
                             `)}</div>`;
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

   
    let filteredArray = fullArray.filter(item => item.Title.toUpperCase().indexOf(search.value.toUpperCase()) > -1)


    if (search.value.length > 0) {


        container.innerHTML = `<div class="flex-box">${filteredArray.map(movie => `
                    
                        <div>
                   
                        <a href='https://www.imdb.com/title/${movie.imdbID}'><img src=${movie.Poster} /></a>
                        </div>
                       
                        `)}</div>`;
    } else if(search.value.length == 0) {
        container.innerHTML = "<div class='noMovie'>You must put name of the movie to search for it ...</div>"
    } 
}
})
