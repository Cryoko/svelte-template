<script>
    import SideNavButton from "$lib/components/sidebarButton.svelte";
import ThemeIcon from "$lib/components/themeIcon.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
    import { toggleMode } from "mode-watcher";
</script>

The settings page!








<SideNavButton onClick={toggleMode}>
    <ThemeIcon/> Toggle Theme
</SideNavButton>
