<script lang="ts">

import {onMount} from "svelte";


import {alldata} from "$lib/assets/data/snusData";
import SnusCard from "$lib/components/ui/SnusCard.svelte";












</script>

<div class="flex">


    <SnusCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>
    <SnusCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </SnusCard>

</div>