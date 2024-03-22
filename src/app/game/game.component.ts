import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private subscription: Subscription;
  colors1 = '';
  colors2 = '';
  colors3 = '';
  colors4 = '';
  colors5 = '';
  colors6 = '';
  colors7 = '';
  colors8 = '';
  colors9 = '';
  text = '';
  health = 100;
  message = 0;
  take = this.health+this.message; // Initialize take with health

  colr: string[] = [
    './../../assets/duck.webp',
    './../../assets/duck.webp',
    './../../assets/duck.webp',
    './../../assets/duck.webp',
    './../../assets/download.jpeg',
    './../../assets/download.jpeg',
    './../../assets/download.jpeg',
    './../../assets/download.jpeg',
    './../../assets/download.jpeg'
  ];

  constructor() {
    this.subscription = new Subscription(); // Initialize the property in the constructor
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(
        take(this.take)
      )
      .subscribe(() => {
        this.myFunction(); // Call your function here
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Clean up subscription when component is destroyed
    }
  }

  myFunction(): void {
    const randomIndex = Math.floor(Math.random() * this.colr.length);
    const c2 = Math.floor(Math.random() * this.colr.length);
    const c3 = Math.floor(Math.random() * this.colr.length);
    const c4 = Math.floor(Math.random() * this.colr.length);
    const c5 = Math.floor(Math.random() * this.colr.length);
    const c6 = Math.floor(Math.random() * this.colr.length);
    const c7 = Math.floor(Math.random() * this.colr.length);
    const c8 = Math.floor(Math.random() * this.colr.length);
    const c9 = Math.floor(Math.random() * this.colr.length);

    this.colors1 = this.colr[randomIndex];
    this.colors2 = this.colr[c2];
    this.colors3 = this.colr[c3];
    this.colors4 = this.colr[c4];
    this.colors5 = this.colr[c5];
    this.colors6 = this.colr[c6];
    this.colors7 = this.colr[c7];
    this.colors8 = this.colr[c8];
    this.colors9 = this.colr[c9];
  }

  smash(event: string): void {
    if (event == './../../assets/duck.webp' && this.health > 0) {
      this.message += 10;
    } else if (event != './../../assets/duck.webp' && this.health > 0) {
      this.message -= 10;
      this.health -= 10;
    } else if (this.health === 0) {
      this.message = this.message;
      this.colors1 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors2 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors3 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors4 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors5 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors6 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors7 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors8 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.colors9 = './../../assets/game-with-glitch-effect_225004-661.avif';
      this.text = 'game over';
      this.take = this.health;
      this.subscription.unsubscribe();
    }
  }
}
