const storage = new Storage;
const api = new DMI_Agent;
const ui = new UI;


document.addEventListener('DOMContentLoaded', getMeasurements);

document.querySelector('#SaveChanges').addEventListener('click', ()=>
{
    const station = document.querySelector('#station_input').value;
    storage.setStation(station);

    getMeasurements();

    $('#setStationId').modal('hide');    
})


function getMeasurements(){
    api.getMultipleParameters(storage.getStation())
        .then(data => {
            ui.renderParameters(data);
            ui.renderStationId(data[0].stationId);
        });
}

