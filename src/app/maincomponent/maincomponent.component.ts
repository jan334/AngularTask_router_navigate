import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maincomponet',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent {

  constructor(private router:Router, private route:ActivatedRoute){}
  title = 'angularTask';
  public buttonName:any = 'show';
  panelOpenState = false;
  show=false;

  show1 = false;

  toggleClick(){
    this.show = !this.show;
    if(this.show){  
      this.buttonName = "hide";
    }else{
      this.buttonName = "show";
  }
  }

  nextpage(){
    this.router.navigate(['/complain']);  
    console.log("complain")
   
  }
  toggleClick1(){
    this.show1 = !this.show1;
    if(this.show1){  
      this.buttonName = "hide";
    }else{
      this.buttonName = "show";
  }
  }

  upload(){
    this.router.navigate(['/backenlog']);  
  }
  featureClick(){
    this.router.navigate(['/feature']); 
  }
}
