<script lang="ts">


import SnusCard from "$lib/components/ui/SnusCard.svelte";
import {readSnusData, readSnusNames} from "$lib/firebasedb";


    const snusData = readSnusData();
    console.log(snusData)

    let snusNames = readSnusNames();
    console.log(snusNames)



</script>

<div class="flex">

    {#each snusNames as thing}
        <SnusCard link={snusData[thing].Link} name={snusData[thing].Name} Ratings={snusData[thing].Rating}></SnusCard>
        {/each}

</div>