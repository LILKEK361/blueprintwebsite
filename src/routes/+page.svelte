<script lang="ts">
    import Navbar from "../lib/components/ui/Navbar.svelte";

    import ColorTable from "$lib/components/ui/ColorTable.svelte";


</script>


<div class="overflow-hidden h-[100vh] w-[100vw]">
    <div class="h-[10vh]">
        <Navbar />
    </div>
    <div class="flex h-[90vh] w-[100%] items-center justify-center">
        <div class="">
            <ColorTable></ColorTable>

        </div>

    </div>
</div>