<script lang="ts">


import SnusCard from "$lib/components/ui/SnusCard.svelte";

    let snuslist = ["VeloArticForst", "BerryMadness"]

</script>

<div class="flex">
    {#each snuslist as Name }
        <SnusCard  name={Name} ></SnusCard>
        {/each}
</div>