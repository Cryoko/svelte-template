
<script>

	import Button from "$lib/components/ui/button/button.svelte";


    export let onClick = () => {}
    export let open = true
    export let text = ""



</script>





<Button on:click={onClick} variant="ghost" class="flex flex-row transition-all duration-500 justify-start items-start {open ? "gap-x-5" : ""} text-lg">
    <slot/>
    <p class="transition-all duration-500 {open ? "": "w-0 scale-0"}">{text}</p> 
</Button>