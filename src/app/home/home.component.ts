import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  downloadFile() {
    const link = document.createElement('a');
    link.href = "./assets/images/Sibin.R FD.pdf";
    link.download = 'Sibin.R FD.pdf';
    link.click();
  }
  
}
