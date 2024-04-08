<script lang="ts">
	import type { BooksByGenreCarousel } from '../ambient';
	import { validateGetBooksByGenre } from '$lib';
	import { Rating } from 'flowbite-svelte';

  export let genreTitle : string


  export let booksByGenre : BooksByGenreCarousel | unknown;


</script>




<h2 class="text-3xl">{genreTitle}</h2>

{#if validateGetBooksByGenre(booksByGenre)}
  <a href="/"  class="block flex justify-end w-full">

    <h3 class="mr-2" >View all: {booksByGenre.totalBooks} </h3>

  </a>

  <div   class="overflow-x-scroll w-full scroll">
    {#each  booksByGenre.books as book }


      <div  class="inline-block m-2   grow" >

        <a href="/">
          <img src={book.coverPhotoUrl} class="inline m-1" alt="expected a img"  >
        </a>
        <h5 class="truncate overflow-hidden font-semibold w-40 ... ">{book.title}</h5>
        <h5 class="truncate overflow-hidden w-40 ... ">{book.authors[0].name} {book.authors[0].lastname}</h5>
        <Rating total={5} rating={book.rating ? Number(book.rating) : 0 } size{20} />
      </div>
    {/each}

  </div>
{:else}
  Could not load books
{/if}

<!-- else if content here -->


<style>
  .scroll {
    white-space: nowrap;
  }
</style>
