import { Component } from "@angular/core";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styles: ['login.component.scss']
})
export class LoginComponent {
    constructor(/*public auth: AuthService,public router: Router*/) {
        /* if (!this.auth.isAuthenticated()) {
             auth.i++;
             //this.auth.login();
             this.router.navigate(['/packages']);
         }*/
        //auth.handleAuthentication();
        this.isClassMini = false;
        this.isClassBig = true;
    }
    isClassMini: boolean;
    isClassBig: boolean;
    ngOnInit() {

    }

    mini() {
        this.isClassMini = !this.isClassMini;
        this.isClassBig = !this.isClassBig;
        var body;
        if (this.isClassMini == true) {
            body = document.getElementById("body");
            body.style.width = "50%";
            body.style.cssFloat = "right";
        }
        else {
            body = document.getElementById("body");
            body.style.width = "100%";
            //body.style.cssFloat = "right";
        }
        //this.router.navigate(['/login']);
    }
}


// <div>
    // <img src="assets/pictures/logo-login.png"/>
    // </div>
    //     <button routerLink="/login" (click)="mini()" >---></button>

