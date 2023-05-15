<script lang="ts">
    import Navbar from "../lib/components/ui/Navbar.svelte";
    import BuyCard from "$lib/components/ui/SnusCard.svelte";
    import OverAllSnusList from "$lib/components/ui/OverAllSnusList.svelte";





</script>


<div class="overflow-hidden h-[100vh] w-[100vw]">
    <div class="h-[10vh]">
        <Navbar  />
    </div>
    <div class="flex h-[90vh] w-[100%] items-center justify-center">
        <div class="flex">

        <OverAllSnusList></OverAllSnusList>

        </div>

    </div>
</div>