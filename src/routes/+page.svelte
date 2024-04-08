<script>
  import CarouselBooks from '../components/CarouselBooks.svelte';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>


<div style="margin-top: 300px;" class="main-container w-full ">


  <div class="flex justify-center mb-5 p-5">
    <CarouselBooks genreTitle="Books about drama"  />
  </div>



</div>
