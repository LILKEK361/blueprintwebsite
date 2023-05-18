<script lang="ts">


import {alldata} from "$lib/assets/data/snusData";
import SnusCard from "$lib/components/ui/SnusCard.svelte";
import {readSnusData} from "../../../firebase.ts";




    let snusData = readSnusData
    let snusNames = Object.keys(snusData);

    console.log(snusNames)



</script>

<div class="flex">

    {#each snusNames as thing}
        <SnusCard link={snusData[thing].Link} name={snusData[thing].Name} Ratings={snusData[thing].Ratings}></SnusCard>
        {/each}

</div>