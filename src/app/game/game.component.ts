import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  private subscription: Subscription;
  colors1 = ''
  colors2 = ''
  colors3 = ''
  colors4 = ''
  colors5 = ''
  colors6 = ''
  colors7 = ''
  colors8 = ''
  colors9 = ''
  text = ''
  heatlth = 10
  message = 0
  take=10
  
  colr: string[] = ['blue', 'black', 'red','white','white','white','white','white','white',]
  constructor() {
    this.subscription = new Subscription(); // Initialize the property in the constructor
  }

  ngOnInit(): void {
    this.subscription = interval(3000) 
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

    this.colors1 = this.colr[randomIndex]
    this.colors2 = this.colr[c2]
    this.colors3 = this.colr[c3]
    this.colors4 = this.colr[c4]
    this.colors5 = this.colr[c5]
    this.colors6 = this.colr[c6]
    this.colors7 = this.colr[c7]
    this.colors8 = this.colr[c8]
    this.colors9 = this.colr[c9]



 
  }
  smash(event: string) {
    if (event == 'blue'&& this.heatlth >1) {
      this.message = this.message + 10


    } else if (event != 'blue'&& this.heatlth > 1) {
      this.message = this.message - 10
      this.heatlth = this.heatlth - 1

    }
    else if(this.heatlth < 1){
      this.message = this.message
      this.colors1 = 'white'
      this.colors2 = 'white'
      this.colors3 = 'white'
      this.text = 'game over'
      this.take=this.heatlth

      // this.subscription.unsubscribe();

    }
  }
}
