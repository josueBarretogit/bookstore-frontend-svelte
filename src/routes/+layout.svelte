<script lang="ts">
	import '../app.pcss';
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Input , Button,} from 'flowbite-svelte';
  import {   SearchOutline} from 'flowbite-svelte-icons';
	import NavContainer from 'flowbite-svelte/NavContainer.svelte';
  let menu = [
    { name: 'New books', href: '/about' },
    { name: 'Best Sellers', href: '/blog' },
    { name: 'Fiction', href: '/contact' },
    { name: 'Nonfiction', href: '/library' },
    { name: 'Drama', href: '/news' },
  ];
</script>

<div class="relative px-8">


  <Navbar let:hidden let:toggle class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b" rounded color="dark">
    <NavContainer class="p-4">

      <Input id="search-navbar" class="mb-4" placeholder="Search for a  book title, authors, etc" > 


        <SearchOutline slot="left" class="mb-4" />
      </Input>

    <NavHamburger />
      <NavBrand href="/">
        <img src="https://rails-assets-us.bookshop.org/ds/images/logo.041f4577edde0efff6b67907832d4c3dfd52407b.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      </NavBrand>
      <NavUl {hidden} >
        {#each menu as itemMenu }
          <NavLi href="/" class="hover:bg-gray-950">{itemMenu.name}</NavLi>
        {/each}
      </NavUl>

    </NavContainer>
  </Navbar>

</div>


<slot />


<footer>a footer </footer>
