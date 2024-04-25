import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearnService } from './learn.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private learnService: LearnService) {}

  ngOnInit(): void {
    this.learnService.login(
      'kminchelle',
      '0lelplR'
    ).subscribe((res) => {
      console.log('res', JSON.stringify(res))
    })
  }
  title = 'angular-learn-testing';

  
}
