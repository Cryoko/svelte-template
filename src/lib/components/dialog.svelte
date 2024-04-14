<script>
    import { Button } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { PlusCircleIcon } from "svelte-feather-icons";
    import { Textarea } from "$lib/components/ui/textarea";
    import DatePicker from "$lib/components/datepicker.svelte"
    // import { insertPost } from "$lib/supabaseClient";
    import { getLocalTimeZone } from "@internationalized/date";

    let title = "";
    let description = "";
    let expiration = 0;
    let latitude = 0;
    let longitude = 0;

    let open;
</script>

<Dialog.Root open={open}>
    <Dialog.Trigger>
        <Button
            class="justify-start w-full items-start my-3"
            on:click={() => {
                console.log("new post");
            }}
        >
            <div
                class="gap-x-3 w-full flex flex-row items-center justify-center text-lg"
            >
                <PlusCircleIcon size="24" />
                New Post
            </div>
        </Button>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            <Dialog.Title>Add Post</Dialog.Title>
            <Dialog.Description>
                Offer a food item that you no longer need to the local
                community!
            </Dialog.Description>
        </Dialog.Header>
        <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="title" class="text-right">Food Item</Label>
                <Input
                    id="title"
                    placeholder="Lettuce"
                    bind:value={title}
                    class="col-span-3"
                />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="description" class="text-right">Description</Label>
                <Textarea
                    id="description"
                    bind:value={description}
                    placeholder="Healthy leafy greens from my garden"
                    class="col-span-3"
                />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <Label for="description" class="text-right">Expiration</Label>
                <DatePicker bind:value={expiration}/>
            </div>


        </div>
        <Dialog.Footer>
            <Button type="button" on:click={
                async () => {
                   console.log("Submit")
                }
            }>Submit</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>