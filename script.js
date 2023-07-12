const api_key = "AIzaSyATWvKiTEZw87ADEdEIZLvr_qiP5n2aiVI";

const defaultQuery = "music"; // Specify your default query here

let search = async () => {
  try {
    let query = document.getElementById("query").value;
    let data;

    if (query) {
      let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${api_key}`;
      let res = await fetch(url);
      data = await res.json();
    } else {
      console.log("No data available");
      return;
    }

    updateUI(data);

    console.log("data:", data); // Log the response data

    if (!data || !data.items || data.items.length === 0) {
      console.log("No results found.");
    }

  } catch (err) {
    console.log("err:", err);
  }
};

let fetchDefaultData = async () => {
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${defaultQuery}&key=${api_key}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("data:", data); // Log the response data

    updateUI(data);

    if (!data || !data.items || data.items.length === 0) {
      console.log("No results found.");
    }
  } catch (err) {
    console.log("err:", err);
  }
};

// Update UI

let updateUI = (data) => {
  let container = document.getElementById("results");
  container.innerHTML = ""; // Clear existing results

  if (data && data.items && Array.isArray(data.items)) {
    data.items.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = thumbnails.default.url;

      let h3 = document.createElement("h3");
      h3.innerText = title;

      div.append(img, h3);

      let video = {
        title,
        videoId,
      };

      div.onclick = () => {
        playVideo(video);
      };

      container.append(div);
    });
  } else {
    console.log("Invalid or empty data");
  }
};

let playVideo = (video) => {
  window.localStorage.setItem("video", JSON.stringify(video));
  window.location.href = "video.html";
};

fetchDefaultData();
