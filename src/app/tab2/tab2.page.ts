import { Component } from '@angular/core';
import { Camera,CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public images: { name: string; dataUrl: string }[] = [];
  public counter = 1;

  constructor() {
    // retrieve the array of images from Local Storage
    const savedImages = localStorage.getItem('images');
    
    // check if the savedImages is not null
    
    if (savedImages) {
    // parse the savedImages and assign it to the images property
    this.images = JSON.parse(savedImages);
    
    // retrieve the last image sequence number from Local Storage
    const lastSequenceNumber = localStorage.getItem('lastSequenceNumber');
    
    // check if the lastSequenceNumber is not null
    
    if (lastSequenceNumber) {
    // parse the lastSequenceNumber and assign it to the counter variable
    this.counter = parseInt(lastSequenceNumber) + 1;

    }
   }
  }
    
    async TakePic() {
    // capture or select an image using the Capacitor Camera plugin
    const image = await Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    });
    
    // check if the dataUrl property is defined
    if (image.dataUrl) {
    // create a custom name for the image using the counter variable
    const name =
    'img_ ' +
    this.counter.toString().padStart(3, '0') +
    '_'+
    new Date().toISOString().split('T')[0];
    
    // add the image to the array of images
    this.images.push({ name, dataUrl: image.dataUrl });
    
    // save the array of images to Local Storage
    localStorage.setItem('images', JSON.stringify(this.images));
    
    // save the last image sequence number to Local Storage
    localStorage.setItem('lastSequenceNumber', this.counter.toString());
    
    // increment the counter variable
    this. counter++;
    
    
    }
  }
}
