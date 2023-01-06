import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BComponent } from './b/b.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoiutingProject';
  constructor(private routes:Router){
  }
  routel(){
  this.routes.navigate(['b'])
  }
}
