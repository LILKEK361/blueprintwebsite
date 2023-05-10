<script>


    export let btnLabel;

    export let color;

    let colors = {
        "red" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-YDaW922aKPMge5Y3RonCxwYtkc_B-WYAL8MtWDEyA&s",
        "purple" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAB+CAMAAACH8qq0AAAAA1BMVEV9Js3dWPvwAAAALElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAA4MUAUy4AAZV67RMAAAAASUVORK5CYII=",
        "green" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAB4CAMAAABsOSjPAAAAA1BMVEUAhUJ5XHFoAAAALElEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4DVNgAAdj/e1UAAAAASUVORK5CYII="
    }
</script>


<div class="card w-96 bg-base-100 shadow-xl  m-5">
    <figure><img src={colors[color]} alt={color} /></figure>
    <div class="card-body">
        <h2 class="card-title">Buy: {color}</h2>
        <p>Buy {color} for only 0.00$</p>
        <div class="card-actions justify-end">
            <label for="my-modal" class="btn">{btnLabel}</label>
        </div>
    </div>
</div>
<!-- The button to open modal -->


<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Congrats you bought the color {color}</h3>
        <p class="py-4">Details:</p>
        <p class="">Color Code: </p>
        <div class="modal-action">
            <label for="my-modal" class="btn">Yay!</label>
        </div>
    </div>
</div>