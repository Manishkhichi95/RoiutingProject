import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']

})
export class AComponent {
  obj: any
  url = "https://reqres.in/api/users/2"
  constructor(private routes: Router, private http: HttpClient) {

    this.http.get(this.url).subscribe((res: any) => {
      console.log("res", res)
      this.obj = res.data
    })

    console.log("object", this.obj)
  }
id:number=2
  routel() {
    this.routes.navigate(['b/c'], {
      queryParams: {
        firstname: this.obj.first_name,
         id:this.id,
         lastName:this.obj.last_name,
         email:this.obj.email,
         avatar:this.obj.avatar,
      }
    })
  }
}
