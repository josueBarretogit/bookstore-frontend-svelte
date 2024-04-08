import { json, type RequestHandler } from '@sveltejs/kit'
import type {  BooksByGenreCarousel, SearchBook } from '../../../ambient'

/**
 * Block CPU for the given amount of seconds
 * @param {Number} [seconds]
 */
function slowdown(seconds = 0.5) {
  const start = (new Date()).getTime()
  while ((new Date()).getTime() - start < seconds * 1000){}
}

export const GET: RequestHandler = async ({request}) => {

  const booksReponse : BooksByGenreCarousel =  {
    books : [
    {
      "ID": 10,
      "title": "Irene Beer I",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2025-02-18T19:00:50.325-05:00",
      "hardCoverPrice": null,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "1",
          "name": "nerd, dreamer, nerd",
          "lastname": "recall fan"
        }
      ]
    },
    {
      "ID": 1,
      "title": "Lucas Kemmer",
      "rating": "1.5000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2024-02-28T00:40:34.235-05:00",
      "hardCoverPrice": null,
      "digitalPrice": null,
      "audioPrice": 13340,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        },
        {
          "ID": "1",
          "name": "nerd, dreamer, nerd",
          "lastname": "recall fan"
        }
      ]
    },
    {
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },
{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },
{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },
{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },
{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },
{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "5.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕",
          "lastname": "writer, business owner"
        }
      ]
    },{
      "ID": 8,
      "title": "Vicky Volkman IV",
      "rating": "3.0000000000000000",
      "coverPhotoUrl": "https://images-us.bookshop.org/ingram/9780679728757.jpg?height=250&v=v2",
      "publicationDate": "2023-07-31T10:57:33.542-05:00",
      "hardCoverPrice": 912122350,
      "digitalPrice": null,
      "audioPrice": null,
      "authors": [
        {
          "ID": "2",
          "name": "taxicab supporter  🐕 aaaaaaaaaaaaa",
          "lastname": "writer, business owner aaaaaaaaaaaaa"
        }
      ]
    },
    
  ],
    totalBooks : 6
  }



  return json(booksReponse)

}
