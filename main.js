const api_random =
  "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_vih61PK0ZQGbXpTRRv8KDCUrC4KXhmGjnKQ63tmplsD3hMAO8r74Kg48LSJJ36EA";
const api_favorite =
  "https://api.thecatapi.com/v1/favourites/";
const api_delete_favorite = (id) =>
  `https://api.thecatapi.com/v1/favourites/${id}/?&api_key=live_vih61PK0ZQGbXpTRRv8KDCUrC4KXhmGjnKQ63tmplsD3hMAO8r74Kg48LSJJ36EA`;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

const button = document.querySelector("button");

const btn1random = document.getElementById("btn1random");
const btn2random = document.getElementById("btn2random");

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
    img3.src = data[2].url;

    btn1random.onclick = () => {
      saveFavoriteMichi(data[0].id);
      loadFavoritesMichis();
    };
    btn2random.onclick = () => saveFavoriteMichi(data[1].id);
    btn3random.onclick = () => saveFavoriteMichi(data[2].id);
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(api_favorite,{
    method: "GET",
    headers:{
      'X-API-KEY': "live_vih61PK0ZQGbXpTRRv8KDCUrC4KXhmGjnKQ63tmplsD3hMAO8r74Kg48LSJJ36EA"
    }
  });
  const data = await res.json();

  console.log("Favorites:");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const section = document.getElementById("favoritesMichis");
    section.innerHTML = "";

    data.forEach((gatito) => {
      const article = document.createElement("article");
      const img = document.createElement("img");
      const button = document.createElement("button");
      const btnText = document.createTextNode("Sacar al michi de favoritos");

      button.appendChild(btnText);
      button.onclick = () => deleteFavoriteMichi(gatito.id);
      img.src = gatito.image.url;
      article.appendChild(img);
      article.appendChild(button);
      section.appendChild(article);
      // gatito.image.url;
    });
  }
}

async function saveFavoriteMichi(id) {
  const res = await fetch(api_favorite, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image_id: `${id}`,
    }),
  });

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    loadFavoritesMichis();
  }

  console.log(res);
}

async function deleteFavoriteMichi(id) {
  const res = await fetch(api_delete_favorite(id), {
    method: "DELETE",
  });
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    loadFavoritesMichis();
  }

  console.log(res);
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
