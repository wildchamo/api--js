const api = "https://api.thecatapi.com/v1/images/search?limit=3";
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const button = document.querySelector("button");

reload();

async function reload() {
  const res = await fetch(api);
  const data = await res.json();

  console.log(data);

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;

  

  //  .then((res) => res.json())
  //     .then((data) => {
  //
  //     });
}

// fetch(api)
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
//   img1.src = data[0].url;
//   img2.src = data[1].url;
//   img3.src = data[2].url;
// })