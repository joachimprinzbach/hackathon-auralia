import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {    
    hotels: any = undefined;

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
}