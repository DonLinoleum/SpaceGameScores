import { Component } from '@angular/core';
import { ScoresList } from '../../components/scores-list/scores-list';

@Component({
  selector: 'scores-home',
  imports: [ScoresList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
