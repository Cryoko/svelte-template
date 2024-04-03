<script>
	import {
		MoonIcon,
		SunIcon,
	} from "svelte-feather-icons";


</script>



<div class="text-lg flex">
    <MoonIcon
        size="24"
        class="stroke-accent-100
    rounded-lg cursor-pointer
    rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-150
    " />
    <SunIcon
        size="24"
        class="absolute
    rounded-lg cursor-pointer
    dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100 duration-150
    "/>
</div>