export interface BookFilter {
    genre: string;
    searchTerm: string;
    rangePrices: string;
    rangePrice1: string;
    rangePrice2: string;
    highToLowPrice: string;
    rating: string;
    languages: string;
    datesFrom: string;
    datesTo: string;
    page: number;
    itemsPerPage: number;
}

export interface SearchBook {
    ID: number;
    title: string;
    rating?: string | null;
    coverPhotoUrl: string;
    publicationDate: string;
    hardCoverPrice?: number | null;
    digitalPrice?: number | null;
    audioPrice?: number | null;
    authors: AuthorsDTO[];
}

export interface AuthorsDTO {
    ID?: string | null;
    name?: string | null;
    lastname?: string | null;
}

export interface BooksByGenreCarousel  {
  books : SearchBook[]
  totalBooks : number
}
