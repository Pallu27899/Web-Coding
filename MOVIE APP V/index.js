let poster=[{url:" https://i.ytimg.com/vi/HefuL9X3SCg/maxresdefault.jpg"},
{url:"https://images.indianexpress.com/2021/11/Jersey-1200-1.jpg"},
{url:"https://data1.ibtimes.co.in/en/full/702905/vijay-sarkar.jpg"}]
let movies=[{url:"https://i.ytimg.com/vi/qJaVj7bCB8Y/maxresdefault.jpg",
name:"MAGNIFICENT FIVE",
release:"1958",
imdb:8.0,},
{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXdYABxiSgb3GkpPAYs-BEs6Sb_lIVZ3XPg&usqp=CAU",
name:"Shershaah",
release:"2021",
imdb:7.9},
{
url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aHZN4cT8T50jluq7pN-Mw1wazQfGUR4wOQ&usqp=CAU",
name:"Border",
release:"2022",
imdb:7.8,},
{url:"https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
name:"Gangubai Kathiawadi",
release:"2022",
imdb:7.9,},
{url:"https://i.ytimg.com/vi/XFKz1DACGdE/maxresdefault.jpg",
name:"Antim",
release:"2021",
imdb:8.2,},
{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3HRXtNVbSts4aXM9jTR-v1Rs-_VYiSsi1Q&usqp=CAU",
name:"Sooryayanshi",
release:"2021",
imdb:9.2,},
{url:"https://images.firstpost.com/wp-content/uploads/2019/12/KGF-2-759-min.jpg",
name:"KGF 2",
release:"2022",
imdb:9.7,},
{url:"https://m.media-amazon.com/images/M/MV5BZjI0YmMzNDctZGFkZi00NmIyLTk5NWEtMTU1MGRmMDQwNWU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
name:"The Kashmir Files",
release:"2022",
imdb:8.8,},
{url:"https://i.ytimg.com/vi/P2KRKxAb2ek/maxresdefault.jpg",
name:"Turning Rebhool bhulaiyaa 2",
release:"2022",
imdb:7.9,},
]
localStorage.setItem("movies", JSON.stringify(movies))

let div=document.createElement("div")
let img=document.createElement("img")

let i=0
   
  setInterval(function(){
   if(i==poster.length){
       i=0
   }
        img.src=poster[i].url
        console.log(i)
      i++
  },1000)
  div.append(img)
  document.querySelector("#slideshow").append(div)


document.querySelector("#sortlh").addEventListener("click", showlowtohigh)
function showlowtohigh(){
    
        movies.sort(function(a,b){
          if(a.imdb<b.imdb) return -1
         if(a.imdb>b.imdb) return 1
         return 0;
        
        })
        document.querySelector("#movies").innerHTML=null
    displaydata()
}
document.querySelector("#sorthl").addEventListener("click", showhightolow)
function showhightolow(){
    
        movies.sort(function(a,b){
          if(a.imdb>b.imdb) return -1
         if(a.imdb<b.imdb) return 1
         return 0;
        
        })
        document.querySelector("#movies").innerHTML=null
    displaydata()
}
function displaydata(){
  movies.map(function(el){
      let div=document.createElement("div")
      let poster=document.createElement("img")
      let p=document.createElement("h2")
      let p1=document.createElement("p")
      let p2=document.createElement("p")

      poster.src=el.url;
      p.innerText=el.name;
      p1.innerText=el.release;
      p2.innerText=el.imdb;
      div.append(poster,p,p1,p2)
document.querySelector("#movies").append(div)
  })
}
displaydata()