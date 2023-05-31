<script lang="ts">

    import OverAllList from "$lib/components/ui/OverAllList.svelte";
    import Navbar from "$lib/components/ui/Navbar.svelte";




</script>


<div class="overflow-hidden h-[100vh] w-[100vw]">
    <Navbar pages={["Trending"] }  head="OverAllList"> </Navbar>
    <div class="flex h-[90vh] w-[100vw] items-center justify-center overflow-y-hidden ">



        <div class="w-[100%] h-[100%]  overflow-y-scroll"><OverAllList></OverAllList></div>



    </div>
</div>