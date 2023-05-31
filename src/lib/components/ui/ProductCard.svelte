<script>


    export let name;
    export let link
    export let info;
    export let details;
    export let price;


</script>


<div class="card w-[20vw] bg-base-300 shadow-xl   m-5">
    <figure class="text-center "><img alt={name} src="src/lib/assets/data/img.png"/></figure>
    <div class="card-body">
        <h2 class="card-title">Name: {name} </h2>
        <p>Short Info: {info} </p>
        <div class="card-actions justify-end">
            <label for="my-modal" class="btn">{"More Info"}</label>
            <label class="btn" for="buy-modal">{price + "€"}</label>
        </div>
    </div>
</div>
<!-- The button to open modal -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Name: {name}</h3>
        <p>{details}</p>
        <div class="modal-action">
            <label class="btn" for="my-modal">Exit</label>
        </div>
    </div>
</div>
<input type="checkbox" id="buy-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Name: {name}</h3>
        <p>Price: {price}</p>
        <div class="modal-action">
            <label class="btn" for="buy-modal">Exit</label>
        </div>
    </div>
</div>
