<script>
import ProductCard from "$lib/components/ui/ProductCard.svelte";
</script>

<div class="flex">


    <ProductCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}
            >
    </ProductCard>
    <ProductCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </ProductCard>
    <ProductCard
            link={"Link... "}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details...."}>
    </ProductCard>
    <ProductCard
            link={"Link..."}
            info={"ShortInfo..."}
            price={0.00}
            details={"Details..."}>
    </ProductCard>

</div>