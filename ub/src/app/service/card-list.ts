import { Injectable } from '@angular/core';
import { Card } from '../classes/card';

@Injectable({
  providedIn: 'root',
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "Quasar",
      "AIO",
      "A very unknown proxy. I think it is very simplistic and underrated.",
      {
        src: "/images/quasar.png",
        alt: "Quasar search bar and apps"
      },
      {
        text: "Go",
        link: "https://quasar.ubg.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "AfiliteOS",
      "AIO",
      "A platform with multiple stuff, like games, a webOS and more.",
      {
        src: "/images/afilite.png",
        alt: "Afilite homepage"
      },
      {
        text: "Go",
        link: "https://afilite.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "DogeUB",
      "AIO",
      "Doge Unblocker is a simple, yet nice looking proxy with some games.",
      {
        src: "/images/doge.png",
        alt: "DogeUB homescreen and search"
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
        src: "/images/fern.png",
        alt: "Fern logo, search bar and apps"
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
      "This mock operating system has a working browser and some games. (Does not work)",
      {
        src: "/images/broken.png",
        alt: "Placeholder icon for no image"
      },
      {
        text: "Go",
        link: "https://ub.phuri.cc/#",
        disabled: true
      }
    ),
    new Card(
      "Neo",
      "AIO",
      "This used to be known as MexiMath, but rebranded.",
      {
        src: "/images/neo.png",
        alt: "Neo proxy searchbar and games"
      },
      {
        text: "Go",
        link: "https://neo.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Vapor",
      "Proxy",
      "A simple proxy. Rebranded to Prism and back.",
      {
        src: "/images/vapor.png",
        alt: "Vapor homepage (Logo)"
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
      "Never used this before. Very clean and modern, just has ads.",
      {
        src: "/images/tglsc.png",
        alt: "Homepage of TGLSC Unblocked"
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
      "Probably one of the most popular proxies. Has its own chatbot.",
      {
        src: "/images/utopia.png",
        alt: "Utopia search bar"
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
        src: "/images/waves.png",
        alt: "Waves search bar and apps"
      },
      {
        text: "Go",
        link: "https://waves.ub.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Vortex",
      "Other",
      "An online chatting app (and more!) with schools in mind",
      {
        src: "/images/vortex.png",
        alt: "Vortex chat"
      },
      {
        text: "Go",
        link: "https://vortex.ub.phuri.cc",
        disabled: false
      }
    ),
    
  ]
}
