<script lang="ts">
  import { Carousel , Thumbnails, Card} from 'flowbite-svelte';
  import Slide from 'flowbite-svelte/Slide.svelte';

  export let genreTitle : string

  export const images = [
    {
      src: 'https://images-us.bookshop.org/ingram/9780307387899.jpg?height=250&v=v2-d1fff228d4711929355d4f6c0f8fb8c4',
      mess : "aasdkjasa"
    },

    {
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "askjdaskdja"
    },

{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },

{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },

{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },

{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },
{
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      mess : "aa"
    },




  ];


  let index = 0;
  let forward = true; 
  let inactiveClass = "bg-black" 
</script>



<div class="">

  <h2>{genreTitle}</h2>
  <div  class="overflow-x-scroll flex " >
      {#each images as image }
        <img src={image.src} class="inline m-1 "  style="width: 200px; height: 300px;">
        
      {/each}
  </div>
</div>
