import { Component } from '@angular/core';
import { Howl } from 'howler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lays',
  standalone: true,
  imports: [CommonModule],
   templateUrl: './lays.component.html',
  styleUrl: './lays.component.scss'
})
export class LaysComponent {

  view = false
  private background = new Howl({
    src: ['./../../assets/click.wav'] // Path to your sound file
  });

  start() {
    this.background.play();
  }
  list() {
    this.background.play();
    this.view = true
  }

}
