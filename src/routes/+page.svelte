<script>
  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import CarouselBooks from '../components/CarouselBooks.svelte';
  import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>


<div style="margin-top: 300px;" class="main-container w-full ">
  <h1 class="mt-10" >aaaaa</h1>

  <CarouselBooks />
  <CarouselBooks />
  <CarouselBooks />
  <CarouselBooks />
  <CarouselBooks />


</div>
