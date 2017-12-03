import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var configWebit: { baseUrl: string };

@Injectable()
export class LiaProxy {
    body: any;

    constructor(private http: HttpClient) {
        this.body = {};
    }

    post(func: string): Promise<any> {
        console.log(`http://ws.webit-track.com/LiaWS_QA/Service1.svc/GetPackages`);
        return this.http.post(`http://ws.webit-track.com/LiaWS_QA/Service1.svc/${func}`, {
                "iUserId": "1",
                "nvGuide": "45D49511-BED0-483E-9A50-789612BD6F8C"
            }
        ).toPromise();
    }
}