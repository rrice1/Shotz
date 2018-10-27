




const writeMovie = (arrayOfMovie) => {
    let newString = '';
arrayOfMovie.forEach((movie) => {
    newString += `<div class="movieClass card col-md-3 col-md-offset-3">
        <div class="caption">
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
}





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