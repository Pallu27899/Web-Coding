
window.onscroll = function () { myFunction() };

var main_header = document.getElementById("navbar");
var sticky = main_header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_header.classList.add("sticky")
  } else {
    main_header.classList.remove("sticky");
  }
}

let movieImg = [
  "https://static.parade.com/wp-content/uploads/2021/11/Dont.jpeg",
  "https://i.ytimg.com/vi/aMxNqxDfGfw/maxresdefault.jpg",
  "https://qqcdnpictest.mxplay.com/pic/6a9e683185debc331b99f524b9520600/en/16x9/492x277.5/test_pic1653643935601.webp",
  "https://wallpaperaccess.com/full/329658.jpg"
];
localStorage.setItem("moviesPic", JSON.stringify(movieImg));

let movieImages = JSON.parse(localStorage.getItem("moviesPic"));


let i = 0;
let imgDiv = document.getElementById("slideshow");

let imgSlide = document.createElement("img");

let id = setInterval(function () {
  if (i == movieImages.length) {
    i = 0;
  }
  imgDiv.innerHTML = null;
  imgSlide.src = movieImages[i]
  imgDiv.append(imgSlide);
  i++;

}, 2000);



// movie app IV: list of movies

let movieList = [ 
    {
        name: "Baahubali 2: The Conclusion",
        releaseDate: "28 April 2017",
        posterUrl: "https://media2.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion.jpg",
        IMDb: "8.1"
      },
      {
        name: "Morbius",
        releaseDate: "17 January 2022",
        posterUrl: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/morbius-et00078838-03-03-2022-03-57-24.jpg",
        IMDb: "6"
      },
      {
        name: "Batman Begins",
        releaseDate: "17 June 2005",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        IMDb: "8.1"
      },
      {
        name: "Avatar II(The Way of Water)",
        releaseDate: "December 2022",
        posterUrl: "https://i.pinimg.com/564x/53/2c/72/532c72d3e0647641f376cdafd6dad984.jpg",
        IMDb: "9.0"
      },
  {
    name: "Joker",
    releaseDate: "24 March 2019",
    posterUrl: "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
    IMDb: "9.0"
  },
  {
    name: "Inception",
    releaseDate: "26 April 2014",
    posterUrl: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    IMDb: "8"
  },
  {
    name: "K.G.F: Chapter 2",
    releaseDate: "14 April 2022",
    posterUrl: "https://cdn.123telugu.com/content/wp-content/uploads/2022/04/KGF-10.jpg",
    IMDb: "7.5"
  },
  {
    name: "The Suicide Squade",
    releaseDate: "11 January 2019",
    posterUrl: "https://c4.wallpaperflare.com/wallpaper/763/245/276/suicide-squad-margot-robbie-dc-comics-harley-quinn-wallpaper-preview.jpg",
    IMDb: "6"
  },
 
  {
    name: "Thor:Love and Thunder",
    releaseDate: "3 November 2022",
    posterUrl: "https://images.thedirect.com/media/article_full/thor-love-and-thunder-art_1.jpg?imgeng=cmpr_75/",
    IMDb: "8.0"
  }
];


localStorage.setItem("movies", JSON.stringify(movieList));

let movies = JSON.parse(localStorage.getItem("movies"));



// Search bar 

function serachresult(event) {
  event.preventDefault();
  document.getElementById("head").innerHTML = "";
  let search = document.getElementById("search-form");
  let titles = search.searchMovie.value.trim();
  const url = `https://www.omdbapi.com/?s=${titles}&apikey=adc7c134`
  // console.log(url);
  let head = document.createElement("h2");
  head.textContent = `Showing all results for ${titles}`
  head.style.color = "white";
  // console.log('head:', head)

  document.getElementById("head").append(head);
  let flag = 0;
  fetchUrl(url, flag);
}

// let titles;
function findMovie() {
  let searchlist = document.getElementById("search-list");
  let search = document.getElementById("search-form");
  titles = search.searchMovie.value.trim();
  // console.log(titles);
  if (titles.length > 0) {
    searchlist.style.visibility = "visible";
  } else {
    searchlist.style.visibility = "hidden";
  }
  const url = `https://www.omdbapi.com/?s=${titles}&apikey=adc7c134`
  // console.log(url);
  let flag = 1;
  fetchUrl(url, flag);
}
function fetchUrl(url, flag) {
  fetch(url)
    .then(function (res) {
      // console.log('res:', res.json());
      return res.json();
    }).then(function (res) {
      if (res.Error != undefined) {
        // console.log(res.Error);
        document.getElementById("movies").innerHTML = null;
        document.getElementById("head").innerHTML = null;
        document.getElementById("errorPage").innerHTML = null;
        if (flag == 0) {
          errorPage();
        }

      } else {
      
        `${flag == 1 ? showList(res.Search) : appendData(res.Search)}`

      }

    })
    .catch(function (err) {
      console.log('err:', err);
    })
}

function appendData(movies) {


  document.getElementById("movies").innerHTML = null;
  document.getElementById("errorPage").innerHTML = null;

  movies.forEach(function (el) {
    const details = el.imdbID;
    const detailsUrl = `https://www.omdbapi.com/?i=${details}&apikey=adc7c134`
    fetchdetails(detailsUrl);

  });
}

// this will fetch all details of movie 
function fetchdetails(url) {

  fetch(url)
    .then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.Error != undefined) {
        console.log(res.Error);

      } else {
        console.log("res", res);

        appendData1(res);
      }

    })
    .catch(function (err) {
      console.log('err:', err);
    })



}

function appendData1(el) {

  // console.log('movie:', el)
  let box = document.createElement("div");

  let img = document.createElement("img");
  let noPic = "https://c.tenor.com/NpZyGNG3SLEAAAAM/this-content-is-not-available.gif";
  img.src = `${el.Poster != "N/A" ? el.Poster : noPic}`

  let name = document.createElement("p");
  name.setAttribute("id", "movieName");
  name.textContent = el.Title;
  name.style.fontWeight = "bold";

  let releaseDate = document.createElement("p");
  // releaseDate.textContent = `Released On: ${el.Released}`;
  releaseDate.textContent = `${el.Runtime}, ${el.Genre}`;

  let lang = document.createElement("p");
  lang.textContent = `${el.Language}, ${el.Year}`;

  let IMDb = document.createElement("p");
  let rating = `${el.imdbRating}/10`;
  IMDb.textContent = `IMDb rating: ${el.imdbRating != "N/A" ? rating : el.imdbRating} `;

  let recommanded = document.createElement("div");
  if (el.imdbRating > 8.5) {
    recommanded.textContent = "Recommended"
    recommanded.setAttribute("id", "recommended");
    // recommanded.style.color = "orange";
    box.append(img, name, releaseDate, lang, IMDb, recommanded);
  } else {
    box.append(img, name, releaseDate, lang, IMDb);
  }
  document.getElementById("movies").append(box)

}

function errorPage() {
  console.log("Inside error page");
  let errorPage = document.getElementById("errorPage");

  let error = document.createElement("img");
  error.src = "https://c.tenor.com/NpZyGNG3SLEAAAAM/this-content-is-not-available.gif";

  errorPage.append(error);
}

function showList(showData) {
  console.log(showData);
  document.getElementById("search-list").innerHTML = null;
  showData.forEach(function (el) {

    let box = document.createElement("div");
    box.setAttribute("class", "search-list-item");

    let thumb = document.createElement("div");
    thumb.setAttribute("class", "search-item-thumbnail");

    let thumImg = document.createElement("img");
    let noPic = "https://c.tenor.com/NpZyGNG3SLEAAAAM/this-content-is-not-available.gif";
    thumImg.src = `${el.Poster != "N/A" ? el.Poster : noPic}`
    thumb.append(thumImg);

    let info = document.createElement("div");
    info.setAttribute("class", "search-item-info");

    let title = document.createElement("h3");
    title.textContent = el.Title;

    let year = document.createElement("h3");
    year.textContent = el.Year;

    info.append(title, year);

    box.append(thumb, info);

    document.getElementById("search-list").append(box);


  });

}



