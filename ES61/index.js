let api="AIzaSyCgDIZhYdQAr8n-Jx68B0LW0Fgg2b0AEak";

async function solveyou(){
     let urll= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${api}`;
     let ress= await fetch(urll)
     let dd= await ress.json();
     append(dd.items)
 }
 solveyou();
 let  search= async ()=>{
     var input=document.querySelector(".search-bar").value;
     let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${api}`
       let res= await fetch(url);
       let data = await res.json();
     //   console.log(data);
     append(data.items)
 }
 let append = async(data) =>{
     let box=document.querySelector("#result");
     data.forEach(({id:{videoId},snippet:{title} })=>{
         // console.log(videoId,title)
         var div=document.createElement("div")
         let iframe=document.createElement("iframe");
         iframe.src=`https://www.youtube.com/embed/${videoId}`
         iframe.allow="fullscreen";
         let ti=document.createElement("h4");
         ti.innerText=title;
         ti.style.color="black"
         div.append(iframe,ti)
         let video={
              title,
              videoId,
          };
 
         div.onclick= function() {
          playvideo(video);
              };
           box.append(div);
     })
 }
      let playvideo= (video)=>{
       localStorage.setItem("video",JSON.stringify(video));
       window.location.href="video.html";
      }