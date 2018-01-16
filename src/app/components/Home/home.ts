import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  startAnimation() {
    alert("It Worked");
    // document.getElementById("oneContainer").classList.add("firstAnimation");
  }
}
