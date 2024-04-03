<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import {
		HomeIcon,
		InfoIcon,
        SidebarIcon,
        XIcon,
        MenuIcon,
        SettingsIcon,
	} from "svelte-feather-icons";

	import { goto } from "$app/navigation";

    import SideNavButton from "./sidebarButton.svelte";

    import ThemeIcon from "./themeIcon.svelte";
  import { toggleMode } from "mode-watcher";




    let open = false

    function toggleOpen() {
        open = !open
    }






</script>





<div class="{open ? "rounded-r-[20px]" : ""} 
flex flex-col
border-r-2 border-primary 
border-opacity-10 bg-secondary 
w-52 min-h-screen 
py-5 pl-2 pr-2">


    <div class="flex flex-row">

        <!-- The button is on the left -->
        <div class="{open ? "flex-grow" : ""}"/>
        
        <Button variant="ghost" size="icon" 
        on:click={toggleOpen}
        class="ml-2 hover:border-2 border-primary">
            {#if open}
            <XIcon size="24" class="h-5 w-5"/>
            {:else}
            <MenuIcon size="24" class="h-5 w-5"/>
            {/if}
        </Button>
    </div>
    
    <div class="{open ? "w-[300px]": "w-10"} transition-all duration-500"/>



    <SideNavButton onClick={() => {goto("/")}} text="Home" {open}>
        <HomeIcon size="24" />
    </SideNavButton>



    <div class="flex-grow"/>
  







    <div class="flex flex-row overflow-hidden ml-[15px] mr-[5px] min-w-5">
        <button on:click={() => {goto("/settings")}}>
            <SettingsIcon size="24" class="hover:rotate-90 transition-all duration-500"/>
        </button>
    

        <div class="flex-grow"/>

        {#if true}
        <button class="absolute left-[150px] bottom-[20px] hover:border-primary border-2 rounded-full border-opacity-10 transition-all duration-500 {open  ? "scale-100" : "absolute scale-0 w-0"}" on:click={() => {goto("/about")}}>
            <InfoIcon size="24"/>
        </button>
        {/if}

    </div>

</div>
