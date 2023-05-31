<script lang="ts">
    import Navbar from "$lib/components/ui/Navbar.svelte";
    import TrendingList from "$lib/components/ui/TrendingList.svelte";
</script>

<div class="w-[100vw] h-[100vh]">
    <Navbar pages={["All Products"]} head="Trending"></Navbar>
    <div class="w-[100vw] h-[90vh]">
        <TrendingList></TrendingList>
    </div>
</div>