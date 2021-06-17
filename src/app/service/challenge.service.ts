import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Challenge} from "../entity/challenge";


@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private challengeUrl = " ";
  private baseUrl = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) {
    this.challengeUrl = this.baseUrl + 'api/challenge';
  }

  public findAll(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.challengeUrl);
  }


}
