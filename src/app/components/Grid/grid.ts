import { Component, OnInit } from '@angular/core';


@Component({
    selector: "grid",
    templateUrl: "./grid.html",
    styleUrls: ["grid.css"],
})

export class Grid  {
    showAlert() {
        alert("Alert");
    }
    
}