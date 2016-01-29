import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
    hotels: any = undefined;
    http: any = undefined;
    searchFilter: string = "";

    constructor(http) {
        this.http = http;
        this.retrieveHotels();
    };


    retrieveHotels() {
        this.http.fetch('http://localhost:1337/locations')
            .then(response => response.json())
            .then(data => {
                this.hotels = data;
            })
            .catch(error => {
                console.log('Error getting hotels from remote: ' + error.message);
            });
    };
    
get filterHotels():array {
    let searchString = this.searchFilter;
    if (this.searchFilter){
            return this.hotels.filter(function(hotelItem) { return hotelItem.hotelName.toLowerCase().includes(searchString.toLowerCase())});  
    }
else {
    return this.hotels;
}
    }
}
