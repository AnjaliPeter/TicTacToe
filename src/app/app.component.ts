import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  
  count:number = 0;

  winner(winner:any){
    Swal.fire({
      position: 'center',
      imageUrl: '../assets/images/winner.png',
      imageWidth: 150,
      imageHeight: 120,
      imageAlt: 'Winner',
      title: winner+' Won !',
      showConfirmButton: true,
      confirmButtonText: 'Play Again'
    }).then((result) => {
      location.reload();
    })
  }

  over(winner:any){
    if(winner === '../assets/images/cross.png')
    {
      this.winner("Player1");
    }
    else
    {
      this.winner("Player2");
    }
  }

  game(event:any){
    document.getElementById(event)?.classList.add("open");
    this.count ++;
    if(this.count == 1 || this.count == 3 || this.count == 5 || this.count == 7 || this.count == 9)
    {
      document.getElementById(event)?.setAttribute('src','../assets/images/cross.png');
    }
    if(this.count == 2 || this.count == 4 || this.count == 6 || this.count == 8)
    {
      document.getElementById(event)?.setAttribute('src','../assets/images/zero.png');
    }
    if(this.count == 9)
    {
      Swal.fire({
        position: 'center',
        imageUrl: '../assets/images/over.jpg',
        imageWidth: 150,
        imageHeight: 130,
        imageAlt: 'Game Over',
        title: 'Game Over !',
        showConfirmButton: true,
        confirmButtonText: 'Play Again'
      }).then((result) => {
        location.reload();
      })
    }
    var a = document.getElementById('img1')?.getAttribute('src');
    var b = document.getElementById('img2')?.getAttribute('src');
    var c = document.getElementById('img3')?.getAttribute('src');
    var d = document.getElementById('img4')?.getAttribute('src');
    var e = document.getElementById('img5')?.getAttribute('src');
    var f = document.getElementById('img6')?.getAttribute('src');
    var g = document.getElementById('img7')?.getAttribute('src');
    var h = document.getElementById('img8')?.getAttribute('src');
    var i = document.getElementById('img9')?.getAttribute('src');
    if(this.count > 4)
    {
      if(a === '../assets/images/cross.png' && e === '../assets/images/cross.png' && i === '../assets/images/cross.png' || a === '../assets/images/zero.png' && e === '../assets/images/zero.png' && i === '../assets/images/zero.png')
      {
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square9')?.classList.add('blink');
        setTimeout(() => {
          this.over(a);
        }, 200);
      }
      if(c === '../assets/images/cross.png' && e === '../assets/images/cross.png' && g === '../assets/images/cross.png' || c === '../assets/images/zero.png' && e === '../assets/images/zero.png' && g === '../assets/images/zero.png')
      {
        document.getElementById('square3')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square7')?.classList.add('blink');
        setTimeout(() => {
          this.over(c);
        }, 200);
      }
      if(a === '../assets/images/cross.png' && d === '../assets/images/cross.png' && g === '../assets/images/cross.png' || a === '../assets/images/zero.png' && d === '../assets/images/zero.png' && g === '../assets/images/zero.png')
      {
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square4')?.classList.add('blink');
        document.getElementById('square7')?.classList.add('blink');
        setTimeout(() => {
          this.over(a);
        }, 200);
      }
      if(b === '../assets/images/cross.png' && e === '../assets/images/cross.png' && h === '../assets/images/cross.png' || b === '../assets/images/zero.png' && e === '../assets/images/zero.png' && h === '../assets/images/zero.png')
      {
        document.getElementById('square2')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square8')?.classList.add('blink');
        setTimeout(() => {
          this.over(b);
        }, 200);
      }
      if(c === '../assets/images/cross.png' && f === '../assets/images/cross.png' && i === '../assets/images/cross.png' || c === '../assets/images/zero.png' && f === '../assets/images/zero.png' && i === '../assets/images/zero.png')
      {
        document.getElementById('square3')?.classList.add('blink');
        document.getElementById('square6')?.classList.add('blink');
        document.getElementById('square9')?.classList.add('blink');
        setTimeout(() => {
          this.over(c);
        }, 200);
      }
      if(a === '../assets/images/cross.png' && b === '../assets/images/cross.png' && c === '../assets/images/cross.png' || a === '../assets/images/zero.png' && b === '../assets/images/zero.png' && c === '../assets/images/zero.png')
      {
        document.getElementById('square1')?.classList.add('blink');
        document.getElementById('square2')?.classList.add('blink');
        document.getElementById('square3')?.classList.add('blink');
        setTimeout(() => {
          this.over(a);
        }, 200);
      }
      if(d === '../assets/images/cross.png' && e === '../assets/images/cross.png' && f === '../assets/images/cross.png' || d === '../assets/images/zero.png' && e === '../assets/images/zero.png' && f === '../assets/images/zero.png')
      {
        document.getElementById('square4')?.classList.add('blink');
        document.getElementById('square5')?.classList.add('blink');
        document.getElementById('square6')?.classList.add('blink');
        setTimeout(() => {
          this.over(d);
        }, 200);
      }
      if(g === '../assets/images/cross.png' && h === '../assets/images/cross.png' && i === '../assets/images/cross.png' || g === '../assets/images/zero.png' && h === '../assets/images/zero.png' && i === '../assets/images/zero.png')
      {
        document.getElementById('square7')?.classList.add('blink');
        document.getElementById('square8')?.classList.add('blink');
        document.getElementById('square9')?.classList.add('blink');
        setTimeout(() => {
          this.over(g);
        }, 200);
      }   
    }
  }

}
