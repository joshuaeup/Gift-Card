import { Component } from "@angular/core";

@Component({
    selector: "card",
    templateUrl: "./card.html",
    styleUrls: ["./card.css"]
})

export class Card {

   
    openCard() {
        document.getElementById("signsContainer").classList.add("signsAnimation");
        document.getElementById("giftContainer").classList.add("giftAnimation");
    }
}