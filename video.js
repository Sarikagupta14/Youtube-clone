
let video = JSON.parse(localStorage.getItem("video"));

// console.log("video:",video);


// Append

  let container = document.getElementById("results");
  // console.log(data);


    let div = document.createElement("div");
    // let img = document.createElement("img");
    // img.src = thumbnails.default.url;
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
    iframe.allow = "fullscreen";
    let h3 = document.createElement("h3");
    h3.innerText = video.title;   

    div.append(iframe,h3);


    container.append(div);
 {/* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Br1Kr77Lv4M"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */}

