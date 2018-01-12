import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomHttpService {
    constructor(private http: Http) { }

    // To extract data from response


    public callServerApi(data: any ): any {
        
            return this.http.post('http://missionit.in/assign3/getdata.php', data)
                .map((res:Response) =>{return res} )
                
         

    }  
}
