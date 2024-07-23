const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
const book = getBook(1);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // ... Spread Operator는 가장 마지막에 와야함
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread Operator를 활용한 새로운 데이터 만들기
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  // pages: 1210,
};
updatedBook;

// Template Literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has${hasMovieAdaptation ? " " : " not "}been adapted as a movie `;
summary;

// Ternary Operators
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`The book has ${pagesRange} pages`);

// Arrow Function
// - Function Declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

// - Function Expression
// const getYear = (str) => {
//   return str.split("-")[0];
// };
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Short-Circuiting
// && 연산자 사용시 결과 값이 false이면 첫번째 falsy value를 반환하고, 결과 값이 true이면 두번째 truty value를 반환
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// || 연산자 사용시 결과 값이 true이면 첫번째 truthy value를 반환하고, 결과 값이 false이면 두번째 falsy value를 반환
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";

// ??, Nullish Coalescing Operator
// Nullish value는 null, undefined만 해당(NOT 0 or '')하므로 Nullish 값인지를 확인하는 ?? 연산자는 0을 반환
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// Optional Chaining
// 데이터가 없을 경우 undefined 리턴
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
// Array "map" Method
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
})); // '=> {}'로 사용할 경우 {}가 declaration block으로 간주되므로 object를 리턴하고 싶으면 ()로 감싸서 리턴
essentialData;

// Array "filter" Method
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Array "reduce" Method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// Array "sort" Method
const arr = [3, 6, 1, 2, 7, 5];
// const sorted = arr.sort((a, b) => a - b);
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr; // sort는 original array를 mutate하는 메소드, slice로 새 array를 사용할 것

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Immutable Arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// async
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data)); // Promise 객체를 then 메소드를 활용해 데이터를 도착한 후의 동작 작성

// console.log("jonas");

// then 보다 조금 더 clear하게
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos); // Promise 상태의 데이터가 먼저 출력됨

console.log("jonas");
