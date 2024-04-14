<script>
    import "../app.css";
    import Sidebar from '$lib/components/sidebar.svelte'
    import { ModeWatcher } from 'mode-watcher';
</script>


<ModeWatcher />

<div class="flex flex-row">
    <Sidebar />

    <slot />
</div>