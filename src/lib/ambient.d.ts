export interface BookFilter {
    Genre: string;
    SearchTerm: string;
    RangePrices: string;
    RangePrice1: string;
    RangePrice2: string;
    HighToLowPrice: string;
    Rating: string;
    Languages: string;
    DatesFrom: string;
    DatesTo: string;
    Page: number;
    ItemsPerPage: number;
}

interface SearchBook {
    ID: number;
    Title: string;
    Rating?: string;
    CoverPhotoUrl: string;
    PublicationDate: string;
    HardCoverPrice?: number;
    DigitalPrice?: number;
    AudioPrice?: number;
    Authors: AuthorsDTO[];
}

interface AuthorsDTO {
    ID?: string;
    Name?: string;
    Lastname?: string;
}
