const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

// Printing details
books.forEach((book) => {
  console.log(`${book.title} by ${book.author}, published in ${book.year}`);
});
