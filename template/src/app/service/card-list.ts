import { Injectable } from "@angular/core";
import { Card } from "../classes/card";

@Injectable({
  providedIn: "root",
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "Link #1",
      "Template",
      "Template format for card.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot",
      },
      {
        text: "Go",
        link: "https://sxl.phuri.cc",
        disabled: false,
      },
    ),
    new Card(
      "Link #2",
      "Template",
      "Template format for card.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot",
      },
      {
        text: "Go",
        link: "https://sxl.phuri.cc",
        disabled: false,
      },
    ),
    new Card(
      "Link #3",
      "Template",
      "Template format for card.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot",
      },
      {
        text: "Go",
        link: "https://sxl.phuri.cc",
        disabled: false,
      },
    ),
  ];
}
