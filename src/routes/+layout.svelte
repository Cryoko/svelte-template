<script>

import "../app.css";

import TopNav from "$lib/components/topbar.svelte";
import SideNav from "$lib/components/sidebar.svelte";

import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

import { ModeWatcher } from "mode-watcher";

</script>

<ModeWatcher/>





<!-- <div class="absolute bg-accent h-[65px] border-accent"/> -->

<div class="flex flex-row">
<SideNav/>

<div class="flex-col">
    <TopNav/>
    <slot />
</div>



    
</div>

