<script lang="ts">
    import Navbar from "../lib/components/ui/Navbar.svelte";

    import ColorTable from "$lib/components/ui/ColorTable.svelte";
    export let pagenumber = 0;


</script>


<div class="overflow-hidden h-[100vh] w-[100vw]">
    <div class="h-[10vh]">
        <Navbar />
    </div>
    <div class="flex h-[90vh] w-[100%] items-center justify-center">
        <div class="">

            {#if pagenumber === 0}
                <ColorTable></ColorTable>
                {:else if pagenumber === 1}
                    <ColorTable></ColorTable>

                {:else if pagenumber === 2}
                    <ColorTable></ColorTable>


                {/if}

        </div>

    </div>
</div>