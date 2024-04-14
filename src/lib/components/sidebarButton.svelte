
<script>

	import Button from "$lib/components/ui/button/button.svelte";


    export let onClick = () => {}
    export let text = ""



</script>





<Button on:click={onClick} variant="ghost" class="flex flex-row justify-start imin-w-full tems-start gap-x-5 text-lg">
    <slot/>
    <p>{text}</p> 
</Button>