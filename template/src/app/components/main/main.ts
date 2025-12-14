import { Component, inject } from '@angular/core';
import { Linkcard } from '../linkcard/linkcard';
import { CardList } from '../../service/card-list';

@Component({
  selector: 'app-main',
  imports: [Linkcard],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  readonly cardList = inject(CardList).cardlist
}
