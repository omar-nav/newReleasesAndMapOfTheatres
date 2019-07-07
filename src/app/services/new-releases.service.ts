import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService extends DataService{

  constructor(http: HttpClient) {
 
    // add appropriate headers to the HTTP request 
    const headers = new HttpHeaders()
      .set('x-api-key', 'qi1ipuk0lUcE7amJd6gEYywsPm96A1ZX');

    // get new releases
     super('https://api.internationalshowtimes.com/v4/movies/?cinema_id=46779', http, headers);
   }
}
