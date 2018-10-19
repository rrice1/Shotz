






const writeLocations = (arrayOfLocations) => {
    let newString = '';
arrayOfLocations.forEach((locations) => {
    newString += `<div class="movieClass card col-md-6 col-md-offset-3">
        <div class="caption">
            <h3 id="thumbnail-label">${locations.Location}</h3>
            <p>
                <span class="genre">${locations.Name}</span>
            </p>
            <p>Estimated Release Date: ${locations.LocationAddress}</p>
            <p>${locations.ShootTime}</p>
        </div>
    </div>
</div>`
});
// Write to the available div
$("#locationId").append(newString);
}





//Load fish
$.get('../db/locations.json')
.done((data)=> {
    console.log(data);
    writeLocations(data.locations);
    //applySale();
})
.fail((error) =>{
    console.error({error});
});