




const writeMovie = (arrayOfMovie) => {
    let newString = '';
arrayOfMovie.forEach((movie) => {
    newString += `<div class="movieClick bigger card col-md-3 col-md-offset-3">
        <div class="caption" id="big">
            <h3 id="thumbnail-label">${movie.name}</h3>
            <p>
                <span class="genre">${movie.genre}</span>
            </p>
            <p>Estimated Release Date: ${movie.estimatedReleaseDate}</p>
            <p>${movie.description}</p>
        </div>
    </div>
</div>`
});
// Write to the available div
$("#movieId").append(newString);
movieClicking();
}


const movieClicking = () => {
    $(".movieClick").click((e)=>{
        console.log('click works')
        e.target.classList.toggle('selected')
        //if(e.target == locations.id)
        //let clicky = $(event.target).closest('.movieClick')[0].id;

        //$(".locationClass").not(".morning").toggle();
    })
    }


$(document).ready(function(){
    $("#typeHereId").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".bigger #big").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });   
    });
  });


//Load fish
$.get('../db/movie.json')
.done((data)=> {
    console.log(data);
    writeMovie(data.movie);
    //applySale();
})
.fail((error) =>{
    console.error({error});
});