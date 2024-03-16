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
  colors1=''
  colors2=''
  colors3=''
  colors4=''
  colors5=''
  colors6=''
  colors7=''
  colors8=''
  colors9=''
  text=''
  message=0
  colr:string[]=['blue','black','red']
  constructor() {
    this.subscription = new Subscription(); // Initialize the property in the constructor
  }

  ngOnInit(): void {
    this.subscription = interval(1000) // 3000 milliseconds = 3 seconds
      .pipe(
        take(100) // Run the function 10 times (for demonstration purposes)
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
    const text = Math.floor(Math.random() * this.colr.length);

    this.colors1=this.colr[randomIndex]
    this.colors2=this.colr[c2]
    this.colors3=this.colr[c3]


    this.text=this.colr[text]
  }
  smash(event:string){
    if(event=='blue'){
      this.message=this.message+10
      console.log(event)

    }else if(event!='blue'){
      this.message=this.message-10
    }
    console.log(event)
  }
}