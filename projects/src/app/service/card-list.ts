import { Injectable } from '@angular/core';
import { Card } from '../classes/card';

@Injectable({
  providedIn: 'root',
})
export class CardList {
  cardlist: Card[] = [
    new Card(
      "Adrouter",
      "School",
      "Adrouter is a small website I made for an english project.",
      {
        src: "/images/adrouter.png",
        alt: "Screenshot of adrouter.projects.phuri.cc containing text"
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
        src: "/images/burstnews.png",
        alt: "Screenshot of burstnews.projects.phuri.cc"
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
        src: "/images/oldwebsite.png",
        alt: "Screenshot of oldwebsite.projects.phuri.cc"
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
        src: "/images/peopleandcars.png",
        alt: "Screenshot of cars-test.projects.phuri.cc"
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
        src: "/images/foodinfo.png",
        alt: "Short information about curry"
      },
      {
        text: "Go",
        link: "https://food-test.projects.phuri.cc",
        disabled: false
      }
    ),
    new Card(
      "Iwannaguessthenumber",
      "Learning Angular",
      "This is a small website I made to help me learn Angular",
      {
        src: "/images/guessthenumber.png",
        alt: "Field to enter a number"
      },
      {
        text: "Go",
        link: "https://number-guess.projects.phuri.cc",
        disabled: false
      }
    ),
  ]
}
