<script>


    export let name;

    //Data will be moved later
    const allsnus = {
        VeloArticForst : {
            Name : "Velo Artic Frost",
            Link : "https://snus-lounge.at/wp-content/uploads/2023/03/Design_ohne_Titel__1_-removebg-preview-3-300x300.png",
            Ratings : {
                Taste : 3,
                Look  : 3,

                Box   : 4,
                Smell : 4,
                Overall : 3.2
            }},
        BerryMadness : {
            Name : "Berry Madness",
            Link : "https://snus-lounge.at/wp-content/uploads/2023/03/Design_ohne_Titel__1_-removebg-preview-3-300x300.png",
            Ratings : {
                Taste : 3,
                Look  : 3,
                Smell : 4,
                Box   : 4,
                Overall : 3
            }
        } }



</script>


<div class="card w-96 bg-base-300 shadow-xl pt-10  m-5">
    <figure class="text-center"><img src={allsnus[name].Link} alt={allsnus[name].Name}/></figure>
    <div class="card-body">
        <h2 class="card-title">Snus: {allsnus[name].Name} </h2>
        <p>Rating Overall: {allsnus[name].Ratings.Overall} </p>
        <div class="card-actions justify-end">
            <label for="my-modal" class="btn">{"More Info"}</label>
        </div>
    </div>
</div>
<!-- The button to open modal -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Snus: {allsnus[name].Name}</h3>
        {#each Object.entries(allsnus[name].Ratings) as [title,value]}
            <p class="text-xl p-1">{title}: {value + "/5"} <p>
        {/each}




        <div class="modal-action">
            <label for="my-modal" class="btn">Exit</label>
        </div>
    </div>
</div>

