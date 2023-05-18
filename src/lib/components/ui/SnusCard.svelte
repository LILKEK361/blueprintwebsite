<script>

    readSnusData()

    export let name;
    export let link
    export let Ratings;






</script>


<div class="card w-[%] bg-base-300 shadow-xl pt-10  m-5">
    <figure class="text-center w-[100%] h-[auto]"><img src={link} alt={name}/></figure>
    <div class="card-body">
        <h2 class="card-title">Snus: {name} </h2>
        <p>Rating Overall: {Ratings.Overall} </p>
        <div class="card-actions justify-end">
            <label for="my-modal" class="btn">{"More Info"}</label>
        </div>
    </div>
</div>
<!-- The button to open modal -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Snus: {name}</h3>
        {#each Object.entries(Ratings) as [title,value]}
            <p class="text-xl p-1">{title}: {value + "/10"} <p>
        {/each}




        <div class="modal-action">
            <label for="my-modal" class="btn" >Exit</label>
        </div>
    </div>
</div>

