import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,public platform: Platform) {
  
  }

click() {
  if (this.platform.is('core')) {
    alert("Please use mobile device")
  }
  else {
  this.barcodeScanner.scan().then((result) => {
        alert(
          "We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled
        )
      })
      .catch((error) => {
        alert(error);
      })
  
  }
    
  }
}
