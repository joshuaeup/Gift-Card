import { Component } from "@angular/core";

@Component({
    selector: "card",
    templateUrl: "./card.html",
    styleUrls: ["./card.css"]
})

export class Card {

   
    openCard() {
        document.getElementById("signsContainer").classList.add("signsAnimation");
        document.getElementById("signsContainer").classList.remove("beforeSignsRotate");
        
        document.getElementById("giftContainer").classList.add("giftAnimation");
        document.getElementById("giftContainer").classList.remove("beforeGiftRotate");
    }
}