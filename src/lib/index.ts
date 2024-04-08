// place files you want to import through the `$lib` alias in this folder.

import type { BooksByGenreCarousel, SearchBook } from "../ambient";

//
export  function validateGetBooksByGenre(data : unknown) : data is BooksByGenreCarousel {
  return typeof data == 'object' && data != null && data != undefined && 'books' in data && Array.isArray(data.books)
}
