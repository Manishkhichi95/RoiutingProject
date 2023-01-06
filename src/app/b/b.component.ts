import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  name: any;
  id: any;
  idParam:any;
  object:any={};
  url = "https://reqres.in/api/users/2"
  data: any;
  constructor(private route: ActivatedRoute,private http: HttpClient) {
   

    this.http.get(this.url).subscribe((res: any) => {
      console.log("resId", res.data.id)
      this.id = res.data.id
      this.data=res.data
      // console.log("id API",this.id)
    })

    this.route.queryParamMap.subscribe((res: any) => {
      console.log("::Res", typeof (res.params))
      this.idParam=res.params.id
      this.object = res.params
      // console.log("id PARAM",this.idParam)
      }
    )
    console.log(":::::::::::::::::::::::::::::::idApi",this.id,"paramid",this.idParam)
    if(this.id==this.idParam){
     this.data=this.object
    }
  };


    // console.log("Name is::::::::::", this.object)
  };


