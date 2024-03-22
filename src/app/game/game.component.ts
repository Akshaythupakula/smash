import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Howl } from 'howler';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
@Injectable({ providedIn: 'root' })
export class GameComponent implements OnInit {
  private subscription: Subscription;
  private sound = new Howl({
    src: ['./../../assets/hq-explosion-6288.mp3'] // Path to your sound file
  });
  private sound1 = new Howl({
    src: ['./../../assets/080190_pig-86603.mp3'] // Path to your sound file
  });
  private background = new Howl({
    src: ['./../../assets/a-space-journey-through-the-solar-system-153272.mp3'],
    volume: 0.5,
    loop: true // Path to your sound file
  });
  private button = new Howl({
    src: ['./../../assets/click.wav'] // Path to your sound file
  });
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
  change = 0
  take = this.health+this.message; // Initialize take with health
  // take = 1



  colr: string[] = [
    './../../assets/pig-rosa-pig-amiga-pig-correndo.gif',
    './../../assets/pig-rosa-pig-amiga-pig-correndo.gif',
    './../../assets/energy-removebg-preview.png',
    './../../assets/energy-removebg-preview.png',
    './../../assets/download-removebg-preview.png',
    './../../assets/download-removebg-preview.png',
    './../../assets/download-removebg-preview.png',
    './../../assets/download-removebg-preview.png',
    './../../assets/download-removebg-preview.png'
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.subscription = new Subscription(); // Initialize the property in the constructor
  }

  ngOnInit(): void {
    this.subscription = interval(1500)
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
    this.background.play();

  }

  smash(event: string): void {
    if (event == './../../assets/energy-removebg-preview.png') {
      this.health += 10;
    }
    if (event == './../../assets/pig-rosa-pig-amiga-pig-correndo.gif' && this.health > 0) {
      this.message += 10;
      this.sound1.play();
    } else if (event != './../../assets/pig-rosa-pig-amiga-pig-correndo.gif' && './../../assets/energy-removebg-preview.png' && this.health > 0) {
      this.message -= 10;

      this.health -= 30;
      this.colors1 = './../../assets/explode-explosion.gif'
      this.colors2 = './../../assets/explode-explosion.gif'
      this.colors3 = './../../assets/explode-explosion.gif'
      this.colors4 = './../../assets/explode-explosion.gif'
      this.colors5 = './../../assets/explode-explosion.gif'
      this.colors6 = './../../assets/explode-explosion.gif'
      this.colors7 = './../../assets/explode-explosion.gif'
      this.colors8 = './../../assets/explode-explosion.gif'
      this.colors9 = './../../assets/explode-explosion.gif'
      this.sound.play();




    } else if (this.health <= 0) {
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
      this.background.stop();
      this.subscription.unsubscribe();
    }
  }
  reloadPage() {
    this.document.location.reload();
    this.button.play();

  }

}
