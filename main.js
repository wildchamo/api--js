const api_random =
  "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_vih61PK0ZQGbXpTRRv8KDCUrC4KXhmGjnKQ63tmplsD3hMAO8r74Kg48LSJJ36EA";
const api_favorite =
  "https://api.thecatapi.com/v1/favourites/?&api_key=live_vih61PK0ZQGbXpTRRv8KDCUrC4KXhmGjnKQ63tmplsD3hMAO8r74Kg48LSJJ36EA";

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const button = document.querySelector("button");

const spanError = document.getElementById("error");

loadRandomMichis();
loadFavoritesMichis();

async function loadRandomMichis() {
  const res = await fetch(api_random);
  const data = await res.json();
  console.log("Random:");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(api_favorite);
  const data = await res.json();

  console.log("Favorites:");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    img3.src = data[0].url;
    img4.src = data[1].url;
  }
}

//  .then((res) => res.json())
//     .then((data) => {
//
//     });
// fetch(api)
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
//   img1.src = data[0].url;
//   img2.src = data[1].url;
//   img3.src = data[2].url;
// })
