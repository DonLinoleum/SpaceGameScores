import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IScores } from '../../types/IScores';
import { config } from '../../config/main-config';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getTopTenScores(): Observable<IScores[]> {
    return this.http.get<IScores[]>(config.topTenScoresUrl);
  }
}
