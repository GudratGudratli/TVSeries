fetch('https://api.tvmaze.com/shows/1')
  .then(response => response.json())
  .then(json => console.log(json))


function detail() {
    
    fetch(`https://api.tvmaze.com/shows/`)
  .then(response => response.json())
  .then(json => {
    film.innerHTML += 
        `<section class="inside">
        <div class="main-div">
            <div class="card-item">
                <img src="${json.image}" class="" alt="null">
                <div class="">
                    <h1 class="">${json.name}</h1>
                    <p class="">${json.genres}</p>
                    <a href="#" class="">${json.summary}</a>
                </div>
            </div>
        </div>
        </section>`
  })
}