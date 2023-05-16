<script lang="ts">


import SnusCard from "$lib/components/ui/SnusCard.svelte";
import {readSnusData, readSnusNames} from "$lib/firebasedb";


    const snusData = readSnusData();
    console.log("SnusData:"+snusData)

    let snusNames = readSnusNames();

    console.log("SnusNames: " + snusNames)


</script>

<div class="flex">

    {#each snusNames as thing}
        <SnusCard link={snusData[thing].Link} name={snusData[thing].Name}></SnusCard>
        {/each}

</div>