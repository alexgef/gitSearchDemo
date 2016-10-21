import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'alexgef';
    private client_id = '787c1ba534d4244db5fa';
    private client_secret = '22c4f64c8c0bad0c20a89493b9ff39dcc315c98a';

    constructor(private _http:Http){
        console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+ this.username).map(res => res.json());
    }
     
    getRepos(){
        return this._http.get('https://api.github.com/users/'+ this.username + '/repos').map(res => res.json());
    }

    updateUsername(username:string){
        this.username=username;
    }
}
