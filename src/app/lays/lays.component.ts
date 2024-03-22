import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-lays',
  standalone: true,
  imports: [],
  templateUrl: './lays.component.html',
  styleUrl: './lays.component.scss'
})
export class LaysComponent {
  private background = new Howl({
    src: ['./../../assets/click.wav'] // Path to your sound file
  });

  start(){
    this.background.play();
  }

}
