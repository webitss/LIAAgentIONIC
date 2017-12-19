// import { Component } from '@angular/core';

// /**
//  * Generated class for the SassHelperComponent component.
//  *
//  * See https://angular.io/api/core/Component for more info on Angular
//  * Components.
//  */
// @Component({
//   selector: 'sass-helper',
//   templateUrl: 'sass-helper.html'
// })
// export class SassHelperComponent {

//   text: string;

//   constructor() {
//     console.log('Hello SassHelperComponent Component');
//     this.text = 'Hello World';
//   }

// }


import { Component } from '@angular/core';

export const PREFIX = '--';

@Component({
    selector: 'sass-helper',
    template: '<div></div>'
})
export class SassHelperComponent {

    constructor() {

    }

    // Read the custom property of body section with given name:
    readProperty(name: string): string {
        let bodyStyles = window.getComputedStyle(document.body);
        return bodyStyles.getPropertyValue(PREFIX + name);
    }
}
