import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
    async openBrowser(){
      await Browser.open({url: 'https://www.google.com/?safe=active&ssui=on'});
     }
  async openBrowser2(){
      await Browser.open({url: 'https://github.com/'});
     }
  async openBrowser3(){
      await Browser.open({url: 'https://ionicframework.com/'});
     }
  async openBrowser4(){
      await Browser.open({url: 'https://capacitorjs.com/'});
     }
}
