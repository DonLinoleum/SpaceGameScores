import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http-service';
import { Observable } from 'rxjs';
import { IScores } from '../../../types/IScores';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-scores-list',
  imports: [CommonModule],
  templateUrl: './scores-list.html',
  styleUrl: './scores-list.css',
  providers: [HttpService],
})
export class ScoresList implements OnInit {
  scoresList: Observable<IScores[]> | undefined;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.scoresList = this.httpService.getTopTenScores();
    console.log(this.scoresList);
  }
}
