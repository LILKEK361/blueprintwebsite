<script>
import BuyCard from "$lib/components/ui/BuyCard.svelte";
</script>

<table>
    <tbody>
    <tr>
        <td>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="purple"
            ></BuyCard>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="red">
            </BuyCard>

        </td>
        <td>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="purple"
            ></BuyCard>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="green">
            </BuyCard>

        </td><td>
        <BuyCard
                btnLabel="Buy"
                infoText="Buy Buy Buy Buy Buy"

                color="purple"
        ></BuyCard>
        <BuyCard
                btnLabel="Buy"
                infoText="Buy Buy Buy Buy Buy"

                color="red">
        </BuyCard>

    </td>
        <td>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="purple"
            ></BuyCard>
            <BuyCard
                    btnLabel="Buy"
                    infoText="Buy Buy Buy Buy Buy"

                    color="green">
            </BuyCard>

        </td>
    </tr>

    </tbody>
</table>