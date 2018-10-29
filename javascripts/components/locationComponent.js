//import {loadStuff} from '../data/locationsData.js'

let locations=[];

const setPets = (newArray) => {
    locations=newArray;
};

const getPetsz = () => {
    return locations;
}

const applyTime = () => {
    $(".morning").each((i,locations)=>{
        const fullPrice = $(locations).find('.price')
        const newPrice = (parseInt(fullPrice.html()) * (1-discount)).toFixed(2);
        fullPrice.html(newPrice);
    })
}



const writeLocations = (arrayOfLocations) => {
    let newString = '';
arrayOfLocations.forEach((locations) => {
    newString += `<div class="bigger card col-md-3 col-md-offset-3 ${locations.Morning ? 'morning' : ''}${locations.Afternoon ? 'afternoon' : ''}${locations.Evening ? 'evening' : ''}${locations.AfterDark ? 'afterDark' : ''} locationClass"
    <div class=" ${locations.Morning ? 'morning' : ''}${locations.Afternoon ? 'afternoon' : ''}${locations.Evening ? 'evening' : ''}${locations.AfterDark ? 'afterDark' : ''} locationClass card col-md-6 col-md-offset-3">
        <div id="big" class="caption">
            <img class="pic" src="${locations.Location}">
            <p>
                <span id="locationName" class="genre">${locations.Name}</span>
            </p>
            <p>${locations.LocationAddress}</p>
            <p>${locations.ShootTime}</p>
        </div>
    </div>
</div>`
});
// Write to the available div
$("#locationId").append(newString);
}

// $("#all").click(()=>{

// })



$("#all").click(()=>{
    location.reload();
})

$("#morning").click(()=>{
    $(".locationClass").not(".morning").toggle();
})

$("#afternoon").click(()=>{
    $(".locationClass").not(".afternoon").toggle();
})
$("#evening").click(()=>{
    $(".locationClass").not(".evening").toggle();
        })
$("#afterDark").click(()=>{
    $(".locationClass").not(".afterDark").toggle();
            })
// const sortShootTimes = (e) => {
//     const type = e.target.id;
//     if(type === 'All'){
//         writeLocations(locations);
//     } else if (type === 'morning') {
//         const filteredMornings = locations.filter(x=>x.type === type)
//         writeLocations(filteredMornings);
//     } else if (type === 'afternoon') {
//         const filteredAfternoons = locations.filter(x=>x.type === type);
//         writeLocations(filteredAfternoons); 
//     } else if (type==='evening') {
//         const filteredEvenings = locations.filter(x=>x.type === type);
//         writeLocations(filteredEvenings);
//     } else if (type === 'afterdark') {
//         const filteredAfterDarks = locations.filter(x=>x.type === type);
//         writeLocations(filteredAfterDarks); 
//     }

// };

// $("#morning").click(()=>{
//    if($(".locationClass").includes("morning"))  $(".movieClass").not(".morning").toggle();
// })

// $("#afternoon").click(()=>{
//     $(".movieClass").not(".afternoon").toggle();
// })
// $("#evening").click(()=>{
//     $(".movieClass").not(".evening").toggle();
//         })
// $("#afterDark").click(()=>{
//     $(".movieClass").not(".afterDark").toggle();
//             })

$(document).ready(function(){
    $("#typeHereId").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".bigger #big").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });   
    });
  });


// const bindEvents = () => {
// $("#morning").click((e)=>{
//     sortShootTimes(e);   
// });
// }
// $(".search").text
// $('div:contains("Hot")');

const loadBoards = () => {
return new Promise((resolve,reject)  => {
$.get('../db/locations.json')
.done((data)=> {
    console.log(data);
    writeLocations(data.locations)
   resolve(data.locations);

})
.fail((error) =>{
    reject(error);
});
})
}
loadBoards();

// const loadBoards = () => {
//     return new Promise((resolve,reject)  => {
//         $.get('../db/boards.json')
//         .done((data) =>{
//             console.log(data);
//             resolve(data.boards)
//         })
//         .fail((error) => {
//             reject(error);
//         })
//     });
// }



// $.get('../db/locations.json')
// .done((data)=> {
//     console.log(data);
//     writeLocations(data.locations);
//     //bindEvents();
// })
// .fail((error) =>{
//     console.error({error});
// });



// $('#typeHereId').on('keyup', function() {
//     var val = $.trim(this.value);
//     if (val) {
//         $('div[data-filter=' + val + ']').show();
//     } else $('div[data-filter]').hide();
// });