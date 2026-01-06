import { Component, inject } from '@angular/core';
import { input} from '@angular/core';
import { Card } from '../../classes/card';
import {DomSanitizer} from '@angular/platform-browser';
import { CardList } from '../../service/card-list';

@Component({
  selector: 'app-linkcard',
  imports: [],
  templateUrl: './linkcard.html',
  styleUrl: './linkcard.scss',
})
export class Linkcard {
  readonly cardlist = inject(CardList).cardlist
  card = input.required<Card>();
  index = input.required<number>();

  //image: string = this.cardlist[this.index()].image;
  //link: string = this.cardlist[this.index()].button.link;
  image:string ="/images/placeholder.jpg"
  link:string="javascript:void(0)"
}
