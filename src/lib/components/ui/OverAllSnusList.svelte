<script lang="ts">

import {onMount} from "svelte";


import {alldata} from "$lib/assets/data/snusData";
import SnusCard from "$lib/components/ui/SnusCard.svelte";
import {awaitData, readSnusData} from "../../../firebase.ts";




export let snusData;


console.log(snusData)







</script>

<div class="flex">
    {#if snusData}
        {#each Object.keys(snusData) as thing}
            <SnusCard
                    link={snusData[thing]?.Link || "Link"}
                    name={snusData[thing]?.Name || "Name"}

                    Ratings={snusData[thing]?.Ratings || {
            Smell : 6,
            Taste : 8,
            Box : 5,
            Tast : 7,
            Overall : 6.5
        }}
            ></SnusCard>
        {/each}
    {:else}
        <p>Loading</p>
    {/if}



</div>