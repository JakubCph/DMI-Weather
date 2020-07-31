class Storage{
    constructor(){
        this.stationId = this.getStation();
        this.defaultStationId = '06082'; 
    }

    getStation(){
        let station;
        station = localStorage.getItem('stationId');
        if(station === null){
            station = this.defaultStationId;
        }
        return station;
    }

    setStation(stationId){
        localStorage.setItem('stationId', stationId);
        this.stationId = stationId;
    }
}