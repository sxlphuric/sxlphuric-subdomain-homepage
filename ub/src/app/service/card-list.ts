import { Injectable } from '@angular/core';
import { Card } from '../classes/card';

@Injectable({
  providedIn: 'root',
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "AfiliteOS",
      "WebOS",
      "A mock operating system with a web browser and a few apps.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://afilite.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Arsenic",
      "Proxy",
      "Arsenic is a simple, sleek, and efficient proxy.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://arsenic.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "DogeUB",
      "AIO",
      "Doge Unblocker is a simple, yet nice looking proxy with some games.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://doge.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Fern",
      "Proxy",
      "Instead of using a Scramjet proxy on the backend, it has a VPN.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://fern.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "GalaxyOS",
      "WebOS",
      "This mock operating system has a working browser and some games.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://galaxy.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Neo",
      "AIO",
      "This used to be known as MexiMath, but rebranded.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://neo.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Prism",
      "Proxy",
      "A simple proxy. This used to be known as Vapor",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://prism.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "TGLSC Unblocked",
      "AIO",
      "Never used this before",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://tglsc.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Utopia",
      "AIO",
      "Probably the most popular one. Has its own chatbot.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://utopia.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Waves",
      "AIO",
      "Simple, clean proxy with some games. Usually my favorite.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://waves.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Vortex",
      "Chat",
      "An online chatting app with schools in mind",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://vortex.ub.phuri.cc",
        disabled: false
      }
    ),
    
  ]
}
