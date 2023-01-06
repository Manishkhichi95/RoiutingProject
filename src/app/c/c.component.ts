import { Component, Input } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent {
@Input() object:any
constructor(private routes: Router){

}
goBack(){
  this.routes.navigate([''])
}
}
