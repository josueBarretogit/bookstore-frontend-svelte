<script lang="ts">
  import { Carousel, ImagePlaceholder } from 'flowbite-svelte';
  import type { BooksByGenreCarousel } from '../ambient';
  import CarouselBooks from '../components/CarouselBooks.svelte';
	import Controls from 'flowbite-svelte/Controls.svelte';
	import Indicators from 'flowbite-svelte/Indicators.svelte';
	import Slide from 'flowbite-svelte/Slide.svelte';


  const images : {src: string, title : string}[] = [

    {
      title : "prom1",
      src : "https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/294/original/Bookshop.BooksellersLIbrarians.2048X600rev.jpg?1712671316"
    },


    {
      title : "prom1",
      src : "https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/293/original/Familiar_Bookshop_2048x600.jpg?1712671667"
    },

  ]

  const duration = 3000

  async function getBooksByGenre(genre: string) : Promise<BooksByGenreCarousel | unknown> {
    try {

      const serverResponse = await fetch("api/books", {method : "GET"})
      const data = await serverResponse.json()

      return data

    } catch (error) {
      // todo! error handling
    }
  }

  const dramaBooksGenre = getBooksByGenre("drama")
  const fictionBooks = getBooksByGenre("fiction")

</script>


<div style="margin-top: 250px;" class="main-container w-full" >

  <div  class="bg-red-500">
    <Carousel {images} {duration}     let:Controls let:Indicators> 
      <a href="/" slot="slide"  let:Slide let:index>

      <Slide image={images[index]} class="h-full" />
    </a>
    <Controls />
    <Indicators />

  </Carousel>


  </div>
  <div class="p-5">
    {#await dramaBooksGenre}
      <ImagePlaceholder />
      {:then value}
      <CarouselBooks genreTitle="Books about drama" booksByGenre={value}  />
    {/await}
  </div>


  <div class="p-5">
    {#await fictionBooks}
      <ImagePlaceholder />
      {:then value}
      <CarouselBooks genreTitle="fiction" booksByGenre={value}  />
    {/await}
  </div>






</div>
