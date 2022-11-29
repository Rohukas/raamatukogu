/* 
    Autor: Robi Rohumaa
    Kuupäev: 2022-17-11
    Koodi kirjeldus:
    - Koodi eesmärk on luua raamatute leht, kus on võimalik lisada raamatuid lemmikutesse ja neid kuvada.
*/
const RAAMATUD = [
  {
    id: 1,
    title: "Mockingjay",
    author: "Suzanne Collins",
    image: "images/covers/mockingjay.png",
  },
  {
    id: 2,
    title: "The Martian",
    author: "Andy Weir",
    image: "images/covers/martian.jpg",
  },
  {
    id: 3,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "images/covers/hunger-games.jpg",
  },
  {
    id: 4,
    title: "Red Rising",
    author: "Pierce Brown",
    image: "images/covers/red-rising.jpg",
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    image: "images/covers/dune.jpg",
  },
  {
    id: 6,
    title: "Leviathan Wakes",
    author: "James S.A. Corey",
    image: "images/covers/leviathan-wakes.jpg",
  },
  {
    id: 7,
    title: "All Systems Red",
    author: "Martha Wells",
    image: "images/covers/all-systems-red.jpg",
  },
  {
    id: 8,
    title: "The Maze Runner",
    author: "James Dashner",
    image: "images/covers/maze-runner.jpg",
  },
];

/* 
    Autor: Robi Rohumaa
    Kuupäev: 2022-17-11
    Koodi kirjeldus:
    - Sisestab raamatute andmed HTML-i.
*/
function insertBooks() {
  const books = document.getElementById("books");
  RAAMATUD.forEach((raamat) => {
    const book = document.createElement("div");
    book.classList.add("book-card");
    book.id = raamat.id;

    let btnText = "Lisa lemmikutesse";
    if (checkIfFavourite(raamat.id)) {
      btnText = "Eemalda lemmikutest";
    }
    book.innerHTML = `
          <div class="book-image">
            <img src="${raamat.image}" height="300px" />
          </div>
          <p class="card-header">${raamat.title}</p>
          <p class="card-author">${raamat.author}</p>
          <button class="add-to-favourites-btn" onclick="addToFavourites(${raamat.id})">${btnText}</button>
    `;
    books.appendChild(book);
  });
}
/* 
    Autor: Robi Rohumaa
    Kuupäev: 2022-17-11
    Koodi kirjeldus:
    - Lisab raamatu lemmikutesse id põhjal.
*/
function addToFavourites(id) {
  // favourites is an array of ids
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  // if already in favourites, remove it
  const btn = document
    .getElementById(id)
    .querySelector(".add-to-favourites-btn");
  if (favourites.includes(id)) {
    // change button text
    btn.innerText = "Lisa lemmikutesse";
    // add selected class
    btn.classList.remove("selected");
    favourites.splice(favourites.indexOf(id), 1);
  } else {
    btn.innerText = "Eemalda lemmikutest";
    btn.classList.add("selected");
    favourites.push(id);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
}
/* 
    Autor: Robi Rohumaa
    Kuupäev: 2022-17-11
    Koodi kirjeldus:
    - Vaatab, kas raamat on lemmikutesse lisatud.
*/
function checkIfFavourite(id) {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  return favourites.includes(id);
}

window.onload = function () {
  // Lehe laadimisel kuvatakse raamatud
  insertBooks();
};
