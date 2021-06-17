import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../service/challenge.service";
import {Challenge} from "../entity/challenge";
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  challenges: Challenge[] = [];
  selected?: any;
  constructor(
    private challengeService : ChallengeService){
  }

  ngOnInit(): void {
    this.challengeService.findAll().subscribe(data => {
      this.challenges = data;});
  }
}
