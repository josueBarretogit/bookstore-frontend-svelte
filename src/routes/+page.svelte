<script lang="ts">
  import { ImagePlaceholder } from 'flowbite-svelte';
  import type { BooksByGenreCarousel } from '../ambient';
  import CarouselBooks from '../components/CarouselBooks.svelte';


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


<div style="margin-top: 300px;" class="main-container w-full">


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
