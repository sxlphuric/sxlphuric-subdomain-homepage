import { Injectable } from '@angular/core';
import { Card } from '../classes/card';

@Injectable({
  providedIn: 'root',
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "DuckMath",
      "Platform",
      "One of the biggest game websites out there for schools",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://duck.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Frogie's arcade",
      "Platform",
      "A very known games website for schools with a proxy, somewhat controversial.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://frogies.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Truffled",
      "Platform",
      "A very known games website for schools, somewhat controversial.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://truffled.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Quasar",
      "Platform",
      "A very unknown games website. I think it's high quality.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://quasar.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Pixel Client 1.12.2",
      "Games",
      "Minecraft 1.12.2 in your browser! This is the WASM version.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://pixel12.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Sandboxels",
      "Games",
      "An element playground. Straight on your browser.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://sandboxels.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Google Snake Mods",
      "Games",
      "Google snake, but with mods! Have some extras in your game.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://snake.ubg.phuri.cc",
        disabled: false
      }
    ),
  ]
}
