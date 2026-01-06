import { Injectable } from '@angular/core';
import { Card } from '../classes/card';

@Injectable({
  providedIn: 'root',
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "Extra work",
      "English class",
      "100% i am clearly doing extra work trust",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Adrouter",
      "School",
      "Adrouter is a small website I made for an english project.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://adrouter.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Burst News",
      "School",
      "Burst News is a small website I made for an english project.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://burstnews.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "My old website",
      "Personal",
      "This is just an old website I made, very low quality.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://oldwebsite.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Cars",
      "Learning Angular",
      "This is a small website I made to help me learn Angular.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://cars-test.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Food",
      "Learning Angular",
      "This is a small website I made to help me learn Angular.",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://food-test.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Icanguessanumber?",
      "Learning Angular",
      "This is a small website I made to help me learn Angular",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://number-guess.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "My old website",
      "Personal",
      "freaky thing i made... it sucks",
      {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
      },
      {
        text: "Go",
        link: "https://oldwebsite.projects.phuri.cc",
        disabled: false
      }
    ),
  ]
}
