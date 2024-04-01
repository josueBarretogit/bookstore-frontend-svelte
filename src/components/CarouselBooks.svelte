<script lang="ts">
 import { Carousel } from 'flowbite-svelte';
	import Slide from 'flowbite-svelte/Slide.svelte';
  export const images = [
    {
      alt: 'Cosmic timetraveler',
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
     mess : "aa"
    },
    
    {
      alt: 'Cosmic timetraveler',
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
     mess : "b"
    },
    {
      alt: 'Cosmic timetraveler',
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
     mess : "4"
    },
    {
      alt: 'Cosmic timetraveler',
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
     mess : "aa"
    },
    {
      alt: 'Cosmic timetraveler',
      src: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
     mess : "aa"
    },
    
  ];

</script>


<div class="max-w-4xl mb-5">
  <Carousel {images}  let:Controls >
    <div slot="slide" let:index >
      <h2>{images[index].mess}</h2>
      <Slide  image={images[index]}/>

    </div>
    <Controls />
  </Carousel>

</div>
