class UI{
    constructor(){
        this.stationId = document.querySelector('#stationId');
        this.list = document.querySelector('#parameters_list');
        this.parameters = ['temp_dry', 'temp_dew','pressure','wind_speed','humidity','visibility','weather'];
    }
    
    renderParameters(data){
        const filteredParameters = data.filter(obj => this.parameters.includes(obj.parameterId));
        const latestObservations = filteredParameters.slice(0, this.parameters.length);
        const result = this.removeDuplicateParameters(latestObservations);
        this.list.textContent = '';
        result.forEach(data => this.renderParam(data.param, data.value));
    }

    renderParam(param, data){

        const idx = this.parameters.findIndex(s => s === param);
        let content;
        switch (idx) {
            case 0:
                content = `Temperature: ${data} degC`;
                break;
            case 1:
                content = `Dew point: ${data} degC`;
                break;
            case 2:
                content = `Pressure: ${data} hPa`;
                break;
            case 3:
                content = `Wind speed: ${data} m/s`;
                break;
            case 4:
                content = `Humidity: ${data} %`;
                break;
            case 5:
                content = `Visibility: ${data} m`;
                break;
            case 6:
                content = `Weather: ${data} 
                <a href="https://confluence.govcloud.dk/pages/viewpage.action?pageId=26476621" target="_blank">Check weather code.
                </a>
                `;
                break;
            default:
                break;
        }

        const li = document.createElement('li');
        li.className = 'group-list-item';
        li.appendChild(document.createTextNode(content));
        this.list.appendChild(li);
    }

    removeDuplicateParameters(latestObservations){
        const repetitionTracker = new Set;

        let idx = 0;
        let currData = latestObservations[idx];
        const result = [];

        //look for the first duplicate in parameterId
        while (!repetitionTracker.has(currData.parameterId) && idx < (latestObservations.length - 1)) {
            repetitionTracker.add(currData.parameterId);
            result.push({
                param: currData.parameterId,
                value: currData.value
            });

            idx++;
            currData = latestObservations[idx];
        }

        return result;
    }

    renderStationId(stationId){
        this.stationId.textContent = `StationId: ${stationId}`;
    }

}