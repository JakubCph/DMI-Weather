class DMI_Agent{
    constructor(){
        this.api_key = '37b030a9-e09d-47e3-bb0a-6c5d1861f0cb';
        this.base_url = 'https://dmigw.govcloud.dk/metObs/v1';
    }

    async getMultipleParameters(stationId){
        return await fetch(`${this.base_url}/observation?stationId=${stationId}&api-key=${this.api_key}`)
                    .then(this.handleErrors);
    }

    async handleErrors(response){
        if(!response.ok){
            throw Error(response.statusText);
        }
        else{
            return response.json();
        };
    }
}