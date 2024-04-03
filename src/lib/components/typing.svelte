<script>
	import { onMount } from "svelte";

	export let titles;

    let barKey = "|"
	let removingText = true;
	let index = 0;
    let delay = 0;
	let currentWord = titles[index];



	onMount(() => {
		setInterval(() => {
            if (delay != 0) { delay--; return};
            if (removingText) {
                if (currentWord.length > 0) {
                    currentWord = currentWord.slice(0, currentWord.length - 1);
                } else {
                    index++
                    if (index == titles.length) {
                        index = 0
                    }
                    removingText = false
                }
            } else {
                if (currentWord.length == titles[index].length) {
                    removingText = true
                    delay=20
                } else {
                    currentWord = currentWord + titles[index].substring(currentWord.length, currentWord.length+1)
                }
            }
        }, 95)


        });


</script>


<div class="">
<div class="inline-flex">
	<h1 class="flex-row"><br>{currentWord}</h1>
	<p class="anim-keyb h-0">|</p>
</div>
</div>





<style>





@keyframes blink-caret {
  from, to { opacity: 0 }
  50% { opacity: 1; }
}

.anim-keyb {
    animation: blink-caret .75s step-end infinite;

}


    
</style>