<script>


    export var snus;
    export var link;

    export var Taste;
    export var Look;
    export var Price;
    export var Box;
    export var Overall;


</script>


<div class="card w-96 bg-base-300 shadow-xl pt-10  m-5">
    <figure class="text-center"><img src={link} alt={snus}/></figure>
    <div class="card-body">
        <h2 class="card-title">Snus: {snus} </h2>
        <p>Rating: {Overall} </p>
        <div class="card-actions justify-end">
            <label class="btn">{"More Info"}</label>
        </div>
    </div>
</div>
<!-- The button to open modal -->


