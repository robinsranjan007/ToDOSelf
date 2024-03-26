import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/general.service';
import { fancards } from 'src/app/shared/generic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private httpservice:GeneralService) { }

  fandetails:fancards[]=[]
  showdetails:boolean=false;
  singleDetails!:fancards;

  ngOnInit(): void {
    
    console.log(this.fandetails,'SHOW SOMETHIING')
    this.httpservice.getusers().subscribe((val)=>{
      this.fandetails=val
    })
  }


showform:boolean=false;

fetchData()
{
  this.httpservice.getusers().subscribe((val)=>{
    this.fandetails=val; 
  
  })
}

showtable()
{
  this.showform=true;
}

closeform(val:boolean)
{
this.showform=val;
}


fandata(val:fancards)
{
  this.httpservice.postuser(val);
  this.httpservice.getusers().subscribe((val)=>{
    this.fandetails=val;
    this.fetchData();
  })
}
 
deleteUser(userId: string|undefined): void {
  this.httpservice.deleteselected(userId).subscribe(
    () => {
      console.log(`User with ID ${userId} deleted successfully`);
      this.httpservice.getusers().subscribe((val)=>{
        this.fandetails=val; 
        
      })
    },
    (error) => {
      console.error('Error deleting user:', error);
    }
  );

  }

  detail(val:string|undefined)
  {
    this.showdetails=true;
  this.httpservice.getsingledata(val).subscribe((val)=>{
    this.singleDetails=val;
    console.log(this.singleDetails,'single details')
  })

  }
  hideDetail()
  {
    this.showdetails=false;
   
  }



}
