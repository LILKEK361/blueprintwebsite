<script lang="ts">

    import OverAllList from "$lib/components/ui/OverAllList.svelte";
    import Navbar from "$lib/components/ui/Navbar.svelte";




</script>


<div class="overflow-hidden h-[100vh] w-[100vw]">
    <Navbar pages={["Trending"]}></Navbar>
    <div class="flex h-[90vh] w-[100%] items-center justify-center">
        <div class="flex">


<OverAllList></OverAllList>

        </div>

    </div>
</div>