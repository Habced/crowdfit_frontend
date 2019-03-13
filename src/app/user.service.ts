import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  serverurl = 'http://192.168.1.6:8000';
  
  constructor( private http: HttpClient, ) { }

  registerUser(userData): Observable<any>{
    //return this.http.post('http://210.105.48.120:8000/api/users/', userData);
    return this.http.post(this.serverurl + '/api/users/', userData, httpOptions);
  }

  loginUser(userData): Observable<any>{
    //return this.http.post('http://210.105.48.120:8000/api/users/', userData);
    return this.http.post(this.serverurl + '/api/auth/', userData);
  }

  getAllUsers(): Observable<any>{
    return this.http.post(this.serverurl + '/api/users/', httpOptions);
  }

  getOneUser(aUsername): Observable<any>{
    return this.http.get(this.serverurl + '/api/users/15/', httpOptions);
  }

}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token f79183bcf4405734d43147bb8727fb6df85ddf29'
  })
};