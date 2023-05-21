<script lang="ts">

import {onMount} from "svelte";


import {alldata} from "$lib/assets/data/snusData";
import SnusCard from "$lib/components/ui/SnusCard.svelte";
import {awaitData, readSnusData} from "../../../firebase.ts";











</script>

<div class="flex ">


    <SnusCard
            name={"Name..."}
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            name={"Name..."}
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            name={"Name..."}
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            name={"Name..."}
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>

</div>