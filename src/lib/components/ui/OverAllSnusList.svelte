<script lang="ts">


import {alldata} from "$lib/assets/data/snusData";
import SnusCard from "$lib/components/ui/SnusCard.svelte";


    let snusNames = Object.keys(alldata);
    console.log(snusNames)
    let snusData = alldata



</script>

<div class="flex">

    {#each snusNames as thing}
        <SnusCard link={snusData[thing].Link} name={snusData[thing].Name} Ratings={snusData[thing].Ratings}></SnusCard>
        {/each}

</div>